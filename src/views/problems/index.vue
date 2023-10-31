<template>
    <div class="problems-container">
        <div class="header">
            <div class="header-left">
                <div class="header-left-item">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1698735267811"
                        class="icon" viewBox="0 0 1086 1024" version="1.1" p-id="2624" width="33.9375" height="20">
                        <path
                            d="M321.214785 391.8002l455.224775-2.045954-218.917083 550.361638zM373.386613 192.31968l346.789211 3.068931 61.378621 134.00999-450.10989-3.068931zM274.157842 322.237762l-274.157842-114.573427 147.308691-109.458541 175.952048 91.044955zM0 274.157842l259.836164 115.596404 279.272727 546.26973zM841.91009 388.731269l243.468531-125.826174-512.511489 670.04995zM836.795205 321.214785l-68.539461-141.170829 156.515485-86.953047 135.032967 113.55045zM368.271728 124.803197l-59.332667-15.344655-111.504496-62.401598 130.941059-47.056943 427.604396 0 129.918082 54.217782-124.803197 60.355644-41.942058 10.22977-350.881119 0z"
                            p-id="2625" fill="#1296db" />
                    </svg>
                </div>
                <a-tooltip placement="bottom">
                    <template #title>
                        <span>展开面板</span>
                    </template>
                    <div class="header-left-item problem-box" @click="visible = true">
                        <menu-unfold-outlined />
                        题库
                    </div>
                </a-tooltip>
                <a-tooltip placement="bottom">
                    <template #title>
                        <span>上一题</span>
                    </template>
                    <div class="header-left-item problem-box">
                        <left-outlined />
                    </div>
                </a-tooltip>
                <a-tooltip placement="bottom">
                    <template #title>
                        <span>下一题</span>
                    </template>
                    <div class="header-left-item problem-box">
                        <right-outlined />
                    </div>
                </a-tooltip>
                <a-tooltip placement="bottom">
                    <template #title>
                        <span>随机一题</span>
                    </template>
                    <div class="header-left-item problem-box">
                        <scissor-outlined />
                    </div>
                </a-tooltip>
            </div>
            <div class="header-righ"></div>
        </div>
        <a-drawer v-model:visible="visible" class="custom-drawer" :closable="false" title="" placement="left" width="600px">
            <div class="drawer-header">
                <div>
                    <span class="drawer-header-title">题库</span>
                    <right-outlined />
                </div>
                <div>
                    <close-outlined />
                </div>
            </div>
            <div class="drawer-scoll">
                <div class="drawer-second-row">
                    <div class="drawer-second-row-top"> 为你推荐 </div>
                    <div class="drawer-second-row-bottom">
                        <span>为你精选近期热门题目</span>
                        <a-checkbox>显示标签</a-checkbox>
                    </div>
                </div>
            </div>
        </a-drawer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuUnfoldOutlined, LeftOutlined, RightOutlined, ScissorOutlined, CloseOutlined } from '@ant-design/icons-vue'

const visible = ref<boolean>(false);
</script>

<style lang="less" scoped>
.problems-container {
    height: 100vh;
    background: rgb(240, 240, 240);

    .header {
        margin: 0 5px;
        border-radius: 5px 5px 0 0;
        height: 50px;
        background: #fff;
        display: flex;

        .header-left {
            margin-left: 40px;
            display: flex;
            height: inherit;
            align-items: center;

            .header-left-item {
                cursor: pointer;
            }

            .problem-box {
                padding: 4px 10px;

                &:hover {
                    background-color: #eee;
                }
            }
        }
    }
}
</style>

<style lang="less">
.custom-drawer {
    .drawer-header {
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;

        .drawer-header-title {
            font-size: 20px;
            margin-right: 10px;
        }
    }

    .drawer-second-row {
        height: 72px;
        margin: 20px 0;

        .drawer-second-row-top {
            color: #1a1a1a;
            margin-bottom: 20px;
            font-size: 16px;
        }

        .drawer-second-row-bottom {
            font-size: 12px;
            color: #525252;
            display: flex;
            justify-content: space-between;
        }

        .right {}
    }
}
</style>