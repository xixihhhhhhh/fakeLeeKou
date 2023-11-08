/**
    个人简介页面
**/

<template>
    <div class="personalIntro-con">
        <div class="personalIntro-wrapper">
            <div class="personalIntro-left">
                <div class="avatar-wrappper">
                    <div class="avatar-top">
                        <img :src="imageUrl" alt="">
                    </div>
                    <div class="avatar-bottom">组件化</div>
                </div>
            </div>
            <div class="personalIntro-right">
                <div class="avatar-upload">
                    <a-upload v-model:file-list="fileList" name="" list-type="picture-card" class="avatar-uploader"
                        :show-upload-list="false" action="http://api_img.mgaronya.com/img/upload"
                        :before-upload="beforeUpload" @change="handleChange" :maxCount="1" method="post">
                        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                        <div v-else>
                            <loading-outlined v-if="loading"></loading-outlined>
                            <plus-outlined v-else></plus-outlined>
                            <div class="ant-upload-text">上传头像</div>
                        </div>
                    </a-upload>
                </div>
                <BaseForm :config="personalMsgConfig" v-model:data="personalMsgFormData" style="margin-top: 20px;">
                </BaseForm>
                <div style="text-align: right;padding: 20px 60px 10px 0;">
                    <a-button type="primary" @click="onUpbatePersonalMsg">保存</a-button>
                </div>
                <BaseForm :config="upbatePasswordConfig" :rules="upbatePasswordRules" v-model:data="upbatePasswordFormData"
                    style="margin-top: 20px;" ref="upbatePasswordFormRef">
                </BaseForm>
                <div style="text-align: right;padding: 20px 60px 10px 0;">
                    <a-button type="primary" @click="onUpbatePassword">更新密码</a-button>
                </div>
                <a-row :gutter="16" :span="24" style="margin-left: 20px;">
                    <a-col :span="8">
                        <a-statistic title="收到点赞数量" :value="(userStore.curUser as any).like_num">
                            <template #suffix>
                                <like-filled />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="8">
                        <a-statistic title="收到点踩数量" :value="(userStore.curUser as any).collect_num">
                            <template #suffix>
                                <dislike-filled />
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="8">
                        <a-statistic title="收到收藏数量" :value="(userStore.curUser as any).collect_num">
                            <template #suffix>
                                <star-filled />
                            </template>
                        </a-statistic>
                    </a-col>
                </a-row>
                <a-row :gutter="16" :span="24" style="margin-left: 20px;">
                    <a-col :span="8">
                        <a-statistic title="被游览数量" :value="(userStore.curUser as any).visit_num">
                            <template #suffix>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    t="1698990947273" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="4879"
                                    width="32" height="32" style="position: relative; top: 4px;">
                                    <path
                                        d="M320 128C320 57.344 262.656 0 192 0S64 57.344 64 128s57.344 128 128 128 128-57.344 128-128z m224 64c52.992 0 96-43.008 96-96S596.992 0 544 0s-96 43.008-96 96 43.008 96 96 96zM864 64c-52.992 0-96 43.008-96 96s43.008 96 96 96 96-43.008 96-96-43.008-96-96-96zM537.088 257.216c-77.056-1.216-164.736 10.688-234.944 72.896-70.272 62.208-61.504 217.6 37.824 259.392 99.392 41.728 121.28 113.92 94.656 203.776C408 883.136 453.44 960 567.04 960 762.88 960 832 776.512 832 570.944c0-223.552-87.872-310.592-294.912-313.728z"
                                        p-id="4880" />
                                </svg>
                            </template>
                        </a-statistic>
                    </a-col>
                    <a-col :span="8">
                        <a-statistic title="竞赛分数" :value="(userStore.curUser as any).score">
                            <template #suffix>
                                <star-filled />
                            </template>
                        </a-statistic>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PlusOutlined, LoadingOutlined, LikeFilled, DislikeFilled, StarFilled } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { ref, onMounted } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';

import config from '@/config/defaultSettings'
const imageUrl = ref<string>('');
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()
imageUrl.value = config.imgUrl + (userStore.curUser as any).icon

function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
}

const fileList = ref([]);
const loading = ref<boolean>(false);
const handleChange = (info: UploadChangeParam) => {

    if (info.file.status === 'uploading') {
        loading.value = true;
        return;
    }
    if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64((info.file.originFileObj as Blob), (base64Url: string) => {
            imageUrl.value = base64Url;
            loading.value = false;
        });
    }
    if (info.file.status === 'error') {
        loading.value = false;
        message.error('upload error');
    }
};

const beforeUpload = (file: UploadProps['fileList'][number]) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isLt2M;
}

import BaseForm from "@/components/BaseForm/index.vue"
import { personalMsgConfig, upbatePasswordConfig, upbatePasswordRules } from "./config";
const personalMsgFormData = ref({})
onMounted(() => {
    personalMsgFormData.value = userStore.curUser
})
import { userInfoApi } from '@/api/user/userInfo'
function onUpbatePersonalMsg() {
    userInfoApi.upbateCurPersonMsg(personalMsgFormData.value).then((res) => {
        message.success(res.msg)
    })
}

const upbatePasswordFormRef = ref()
function onUpbatePassword() {
    let status = upbatePasswordFormRef.value.validateFn()
    if (status) {
        userInfoApi.upbatePassword(upbatePasswordFormData.value).then((res) => {
            if (res.code === 200) {
                message.success(res.msg)
            } else {
                message.error(res.msg)
            }
        }).finally(() => {
            upbatePasswordFormRef.value.resetFields()
        })
    }
}

const upbatePasswordFormData = ref({})

import { badgeApi } from '@/api/user/badge'
onMounted(() => {
    badgeApi.getCurBadge().then((res) => {
        console.log(res, '');
    })
})
</script>

<style lang="less" scoped>
.personalIntro-con {
    background: rgb(247, 248, 250);

    .personalIntro-wrapper {
        flex: 1 1 0%;
        min-width: 992px;
        max-width: 72rem;
        width: 100%;
        display: flex;
        padding: 24px 36px 72px 0;
        margin: 0 auto;

        .personalIntro-left {
            width: 240px;

            .avatar-wrappper {
                display: flex;
                flex-direction: column;
                align-items: center;

                .avatar-top {
                    height: 70px;
                    overflow: hidden;
                    border-radius: 4px;

                    img {
                        width: 60px;
                        height: 60px;
                    }
                }

                .avatar-bottom {
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }

        .personalIntro-right {
            width: 816px;
            background: #fff;
            padding-bottom: 100px;

            .avatar-upload {
                height: 100px;
                display: flex;
                justify-content: center;
                margin-top: 10px;

                .avatar-uploader {
                    width: 100px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
}
</style>