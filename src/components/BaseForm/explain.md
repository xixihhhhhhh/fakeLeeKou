# 基础表单组件

通过配置回显表单格式，支持查看、编辑、新增状态，新增/编辑时支持对表单进行校验。

引用方式：

```javascript
import BaseForm from "@/components/BaseForm/index.vue";
```

## 代码演示  [demo](https://pro.loacg.com/test/home)

```html
<template>
  <BaseForm ref="baseForm" :config="formConfig" v-model:data="advancedSearchForm"  />
  <Button @click="onSubmit">保存</Button>
</template>
<script lang="ts" setup>
import { markRaw, ref } from "vue";
import BaseForm from "@/components/BaseForm/index.vue";
import { ZDictSelect } from "zui-v3";
import { FormConfig } from "@/components/BaseForm/config";
const formConfig: Array<FormConfig> = [
  {
    span: 24,
    label: "事故名称",
    type: markRaw(Input),
    key: "accidentName",
    placeholder: "事故名称",
  },
  {
    span: 24,
    label: "事故等级",
    type: markRaw(ZDictSelect),
    attrs: {
      dictName: "GQFLXL",
    },
    key: "accidentLevel",
    placeholder: "事故等级",
  },
];
const data = ref<any>({})
const baseForm = ref()

const onSubmit = ()=>{
  // 需要进行校验时
  let values = baseForm.value.validateFn()
  if(!values){
    // 校验不通过
  }else{
    // 校验通过
    console.log(`values：`, values)
  }
  // 不需要进行校验时
  console.log(`data：`, data)
}
</script>

```

## API

| 参数   | 说明               | 类型                         | 默认值 |
| ------ | ------------------ | ---------------------------- | ------ |
| config | 表单配置项         | `Array<FormConfig>`        | -      |
| rules  | 需要进行校验的字段 | `Record<string, Rule[]>`   | -      |
| status | 表单状态           | `'check' \| 'edit' \| 'add'` | -      |
| data   | 双向绑定数据       | `object`                   |        |

### 方法

| 方法名     | 说明         | 回调参数         |
| ---------- | ------------ | ---------------- |
| validateFn | 校验整个表单 | ()=>false/values |
