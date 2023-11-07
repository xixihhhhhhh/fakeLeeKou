<template>
    <Form ref="formRef" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" :model="formData">
        <Row :span="24" :getter="24">
            <Col :span="item.span" v-for="item in props.config" :key="item.key"
                v-show="(!item.refVisAttr || (!item.refVisible || item.refVisAttr && formData[item.refVisAttr] == item.refVisValue))">

            <FormItem v-bind="{ ...computeLabelCol(item.span, item.labelSpan) }" :label="item?.label" :name="item?.key"
                :rules="props.rules && props.rules[item.key]"
                v-if="item?.label && (!item.refVisAttr || (item.refVisAttr && formData[item.refVisAttr] == item.refVisValue))">
                <FormItemRest>
                    <component v-if="item.modelType == 'checked'" :disabled="status == 'check'" :is="item.type"
                        v-model:checked="formData[item.key]" v-bind="item?.attrs"
                        :placeholder="status !== 'check' ? item.placeholder : ''" :style="item?.style"
                        :title="formData[item.key]"></component>
                    <component v-else :disabled="status == 'check'" :is="item.type" v-model:value="formData[item.key]"
                        v-bind="item?.attrs" :placeholder="status !== 'check' ? item.placeholder : ''" :style="item?.style"
                        :title="formData[item.key]"></component>
                </FormItemRest>
            </FormItem>
            <div v-if="!item?.label && (!item.refVisAttr || (item.refVisAttr && formData[item.refVisAttr] == item.refVisValue))">
                <component v-if="item.modelType == 'checked'" :disabled="status == 'check'" :is="item.type"
                    v-model:checked="formData[item.key]" v-bind="item?.attrs"
                    :placeholder="status !== 'check' ? item.placeholder : ''" :style="item?.style"
                    :title="formData[item.key]"></component>
                <component v-else :disabled="status == 'check'" :is="item.type" v-model:value="formData[item.key]"
                    v-bind="item?.attrs" :placeholder="status !== 'check' ? item.placeholder : ''" :style="item?.style"
                    :title="formData[item.key]"></component>
            </div>
            </Col>
        </Row>
    </Form>
</template>

<script lang="ts" setup>
import {
    PropType,
    ref,
    watchEffect,
    watch,
    computed,
} from "vue";
import { Form, FormItem, FormItemRest, Row, Col } from "ant-design-vue";
import { FormInstance, Rule } from "ant-design-vue/es/form";
import { FormConfig, StatusType } from "./config";
import dayjs from "dayjs";
const computeLabelCol = (span: number, labelSpan?: number) => {
    var labelCol = labelSpan ? labelSpan : Math.floor((1 / span) * 100);
    return {
        labelCol: { span: labelCol },
        wrapperCol: { span: 24 - labelCol },
    };
};
const props = defineProps({
    config: {
        type: Array<FormConfig>,
        default: () => [],
    },
    rules: {
        type: Object as PropType<Record<string, Rule[]>>,
        default: () => { },
    },
    status: {
        type: String as PropType<StatusType>,
        default: "",
    },
    data: {
        type: Object as any,
        default: () => { },
    },
});
const formData = ref<any>({});
let rules: PropType<Record<string, Rule[]>> = JSON.parse(
    JSON.stringify(props.rules || [])
);
props.config.map((val) => {
    // if (typeof val.type === "object" && val.type.name === "ADatePicker") {
    //   formData.value[val.key] = props.data[val.key]
    //     ? dayjs(props.data[val.key])
    //     : null;
    // } else {
    formData.value[val.key] = val.value;
    // }
    if (rules && rules[val.key]) {
        rules[val.key].map((rulesVal: { message: any }) => {
            if (!rulesVal.message) {
                rulesVal.message = `请输入${val.label}`;
            }
        });
    }
});
if (props.status === "check") {
    rules = [];
}

const formRef = ref<FormInstance>();
const subRef = ref()
let isValidate = false;
const validateFn = () => {
    isValidate = true
    return new Promise((reslove, rejects) => {
        formRef.value?.validate(Object.keys(props.rules || {}))
            .then(async (values: any) => {
                let list: any = []
                subRef.value?.map((e: any) => {
                    if (e.validateFn) {
                        list.push(e.validateFn())
                    }
                })
                if (list.length == 0) {
                    isValidate = false
                    reslove(formData.value)
                    return
                }
                Promise.all(list).then(res => {
                    isValidate = false
                    reslove(!res.includes(false))
                }).catch(() => {
                    isValidate = false
                    reslove(false)
                })
            })
            .catch((info: any) => {
                subRef.value?.map(async (val: any) => {
                    if (val.validateFn) {
                        val.validateFn()
                    }
                })
                isValidate = false
                isValidate = false
                reslove(false)
            });
    })
};
const resetFields = () => {
    formRef.value?.resetFields()
}
defineExpose({
    validateFn,
    resetFields
});

let emit = defineEmits(["update:data", "preview"]);
watchEffect(() => {
    if (Object.keys(props.data || {})?.length > 0) {
        formData.value = props.data;
        props.config.map((val) => {
            if (typeof val.type === "object" && val.type.name === "ADatePicker") {
                formData.value[val.key] = props.data[val.key]
                    ? dayjs(props.data[val.key])
                    : null;
            } else {
                formData.value[val.key] = props.data[val.key];
            }
        });
    }
});
watch(
    formData.value,
    () => {
        emit("update:data", formData.value);
    },
    { deep: true }
);

watch(
    () => props.data,
    (val) => {
        formData.value = val
    },
    { deep: true }
);

/* 可优化 */
let newformData = computed(() => {
    return JSON.parse(JSON.stringify(formData.value));
});
/* 触发表单校验 */
watch(
    () => newformData.value,
    (newVal, oldVal) => {
        if (!isValidate) {
            return;
        }
        for (const key in props.rules) {
            if (newVal[key] !== oldVal[key]) {
                formRef.value
                    ?.validate(key)
                    .then((values) => { })
                    .catch((info) => { });
            }
        }
    },
    { deep: true }
);
</script>

<style scoped lang="less">
.form-upload {
    display: flex;

    .form-upload-btn {
        margin-left: 10px;
    }
}
</style>
