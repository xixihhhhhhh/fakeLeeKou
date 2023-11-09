<template>
    <div class="problems-container">
        <div class="header">
            <div class="header-left">
                <router-link to="/home/homeIndex">
                    <div class="header-left-item">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1698735267811"
                            class="icon" viewBox="0 0 1086 1024" version="1.1" p-id="2624" width="33.9375" height="20">
                            <path
                                d="M321.214785 391.8002l455.224775-2.045954-218.917083 550.361638zM373.386613 192.31968l346.789211 3.068931 61.378621 134.00999-450.10989-3.068931zM274.157842 322.237762l-274.157842-114.573427 147.308691-109.458541 175.952048 91.044955zM0 274.157842l259.836164 115.596404 279.272727 546.26973zM841.91009 388.731269l243.468531-125.826174-512.511489 670.04995zM836.795205 321.214785l-68.539461-141.170829 156.515485-86.953047 135.032967 113.55045zM368.271728 124.803197l-59.332667-15.344655-111.504496-62.401598 130.941059-47.056943 427.604396 0 129.918082 54.217782-124.803197 60.355644-41.942058 10.22977-350.881119 0z"
                                p-id="2625" fill="#1296db" />
                        </svg>
                    </div>
                </router-link>
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
            <div class="header-middle">
                <a-tooltip placement="bottom">
                    <template #title>
                        <span>运行</span>
                    </template>
                    <div class="header-middle-item problem-box">
                        <caret-right-outlined style="font-size: 20px;position: relative; top: 2px;" /> &nbsp;运行
                    </div>
                </a-tooltip>
                <a-tooltip placement="bottom">
                    <template #title>
                        <span>提交</span>
                    </template>
                    <div class="header-middle-item problem-box" style="color: #01b328;">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="cloud-arrow-up"
                            style="position: relative;top: 2px;margin-right: 10px;" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16">
                            <path fill="currentColor"
                                d="M354.9 121.7c13.8 16 36.5 21.1 55.9 12.5c8.9-3.9 18.7-6.2 29.2-6.2c39.8 0 72 32.2 72 72c0 4-.3 7.9-.9 11.7c-3.5 21.6 8.1 42.9 28.1 51.7C570.4 276.9 592 308 592 344c0 46.8-36.6 85.2-82.8 87.8c-.6 0-1.3 .1-1.9 .2H504 144c-53 0-96-43-96-96c0-41.7 26.6-77.3 64-90.5c19.2-6.8 32-24.9 32-45.3l0-.2v0 0c0-66.3 53.7-120 120-120c36.3 0 68.8 16.1 90.9 41.7zM512 480v-.2c71.4-4.1 128-63.3 128-135.8c0-55.7-33.5-103.7-81.5-124.7c1-6.3 1.5-12.8 1.5-19.3c0-66.3-53.7-120-120-120c-17.4 0-33.8 3.7-48.7 10.3C360.4 54.6 314.9 32 264 32C171.2 32 96 107.2 96 200l0 .2C40.1 220 0 273.3 0 336c0 79.5 64.5 144 144 144H464h40 8zM223 255c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V384c0 13.3 10.7 24 24 24s24-10.7 24-24V249.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z">
                            </path>
                        </svg>提交
                    </div>
                </a-tooltip>
            </div>
            <div class="header-right">
                <router-link to="/home/personalIntro" style="margin-right: 10px;">
                    <a-avatar :src="avatarUrl" style="cursor: pointer;" />
                </router-link>
            </div>
        </div>
        <div class="main-content">
            <div class="left">
                <p class="title">{{ (problem as any).title }}</p>
                <p class="created-at">&nbsp;&nbsp;创建于{{ (problem as any).created_at }} &nbsp;更新于{{ (problem as
                    any).updated_at }}</p>
                <p class="description" v-html="(problem as any).description"></p>
                <p class="hint" v-html="(problem as any).hint"></p>
                <p style="font-weight: bold;font-size: 16px;">输入</p>
                <p class="input" v-html="(problem as any).input"></p>
                <p style="font-weight: bold;font-size: 16px;">输出</p>
                <p class="output" v-html="(problem as any).output"></p>
                <p style="font-weight: bold;font-size: 16px;">贡献者</p>
                <p class="source" style="font-weight: bold;font-size: 16px;">&nbsp;&nbsp;{{ (problem as any).source }}</p>
            </div>
            <div class="resize" title="收缩侧边栏">
                ⋮
            </div>
            <div class="mid">
                <!--右侧div内容-->
            </div>
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
                    <div class="drawer-problem-list">
                        <div class="drawer-problem-list-item" v-for="item in 10">
                            <a-checkbox>统计特殊子序列的数目</a-checkbox>
                            <span v-if="1" style="color: #ff3348;">困难</span>
                            <span v-else style="color: #FFB800;">中等</span>
                            <span v-if="0" style="color: #15BD66;">简单</span>
                        </div>
                    </div>
                </div>
            </div>
        </a-drawer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
    MenuUnfoldOutlined, LeftOutlined, RightOutlined, ScissorOutlined, CloseOutlined,
    CaretRightOutlined
} from '@ant-design/icons-vue'

const visible = ref<boolean>(false);

const avatarUrl = ref('')
import config from '@/config/defaultSettings'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
avatarUrl.value = config.imgUrl + (userStore.curUser as any).icon

import { dragControllerDiv } from './config'

onMounted(() => {
    dragControllerDiv()
})

import { ProblemApi } from '@/api/problem'
import { searchProblemApi } from '@/api/problem/search'
import { useRoute } from 'vue-router'
const route = useRoute()
const problem = ref({})
onMounted(() => {
    ProblemApi.problemList()
    searchProblemApi.searchById(route.query.id + '').then((res: any) => {
        problem.value = res.data.problem
    })
})


</script>

<style lang="less" scoped>
.problems-container {
    height: 100vh;
    background: rgb(240, 240, 240);

    .header {
        margin: 0 5px;
        padding-top: 10px;
        border-radius: 5px 5px 0 0;
        height: 50px;
        display: flex;
        justify-content: space-between;

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
                    background-color: rgb(235, 235, 235);
                }
            }
        }

        .header-middle {
            display: flex;
            height: inherit;
            align-items: center;

            .header-middle-item {
                cursor: pointer;
                color: #1a1a1a;
                font-size: 16px;
                background: rgb(231, 231, 231);
                margin-right: 10px;
            }

            .problem-box {
                padding: 4px 10px;

                &:hover {
                    background-color: rgb(226, 226, 226);
                }
            }
        }

        .header-right {
            margin-right: 100px;
        }
    }

    .main-content {
        height: 700px;
        margin: 20px 20px 0;
        background: #fff;
        border-radius: 10px 10px 0 0;
        box-shadow: -1px 9px 10px 3px rgba(0, 0, 0, 0.11);

        .left {
            width: calc(50% - 10px);
            /*左侧初始化宽度*/
            height: 100%;
            background: #FFFFFF;
            float: left;
            padding: 10px 0 0 10px;
            overflow-y: auto;

            .title {
                font-weight: bold;
                font-size: 16px;
            }

            .source {
                font-size: 12px;
                color: #999;
            }

            .description {
                user-select: none;
            }
        }

        /*拖拽区div样式*/
        .resize {
            cursor: col-resize;
            float: left;
            position: relative;
            top: 45%;
            background-color: #d6d6d6;
            border-radius: 5px;
            margin-top: -10px;
            width: 10px;
            height: 50px;
            background-size: cover;
            background-position: center;
            /*z-index: 99999;*/
            font-size: 32px;
            color: white;
        }

        /*拖拽区鼠标悬停样式*/
        .resize:hover {
            color: #444444;
        }

        /*右侧div'样式*/
        .mid {
            float: left;
            width: 50%;
            /*右侧初始化宽度*/
            height: 100%;
            background: #fff;
            box-shadow: -1px 4px 5px 3px rgba(0, 0, 0, 0.11);
        }
    }
}
</style>

<style lang="less">
.custom-drawer {
    padding-right: 0;

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

    .drawer-scoll {
        overflow-y: auto;
        height: calc(100% - 100px);

        .drawer-second-row {
            height: 72px;

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

            .drawer-problem-list {
                width: 100%;
                height: 1000px;

                .drawer-problem-list-item {
                    height: 52px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 4px 4px 0 0;
                    border: 1px solid #eee;
                    cursor: pointer;
                    padding: 0 16px;

                    &:hover {
                        background: rgb(235, 235, 235);
                    }
                }
            }
        }

        &::-webkit-scrollbar {
            width: 20px;
            height: 8px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 12px;
            border: 6px solid rgba(0, 0, 0, 0);
            box-shadow: 8px 0 0 #A5ADB7 inset;
        }

        &::-webkit-scrollbar-thumb:hover {
            box-shadow: 8px 0 0 #4A4A4A inset;
        }
    }


}
</style>