/**
    个人简介页面
**/

<template>
    <div class="personalIntro-con">
        <div class="personalIntro-wrapper">
            <div class="personalIntro-left">
                <div class="avatar-wrappper">
                    <div class="avatar-top">
                        <img src="../../../assets/mihoyo.jpg" alt="">
                    </div>
                    <div class="avatar-bottom">组件化</div>
                </div>
            </div>
            <div class="personalIntro-right">
                <div class="avatar-upload">
                    <a-upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader"
                        :show-upload-list="false" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :before-upload="beforeUpload" @change="handleChange">
                        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                        <div v-else>
                            <loading-outlined v-if="loading"></loading-outlined>
                            <plus-outlined v-else></plus-outlined>
                            <div class="ant-upload-text">Upload</div>
                        </div>
                    </a-upload>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';

function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
}

const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');
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
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
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
        height: 600px;

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

            .avatar-upload {
                height: 100px;
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>