<template>
    <div class="index-container" ref="containerRef">
        <div class="left">
            <div class="study-plan">
                <div class="study-title">
                    学习计划
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"
                        class="h-5 w-5 text-lc-icon-secondary dark:text-dark-lc-icon-secondary">
                        <path fill-rule="evenodd"
                            d="M9.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 12 9.293 7.707z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="study-list">
                    <div class="stydy-list-item">
                        <img alt="面试经典 150 题"
                            src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-interview-150/cover"
                            class="chakra-image css-1m34bn">
                        <div class="stydy-list-right">
                            <div class="study-right-top">
                                面试经典 150 题
                            </div>
                            <p class="study-right-bottom">
                                最经典 150 题，掌握面试所有知识点
                            </p>
                        </div>
                    </div>
                    <div class="stydy-list-item">
                        <img alt="LeetCode 热题 100"
                            src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-100-liked/cover"
                            class="chakra-image css-1m34bn">
                        <div class="stydy-list-right">
                            <div class="study-right-top">
                                假力扣热题 100
                            </div>
                            <p class="study-right-bottom">
                                假力扣最受刷题发烧友热爱的 100 道题
                            </p>
                        </div>
                    </div>
                    <div class="stydy-list-item">
                        <img alt="动态规划（基础版）"
                            src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/dynamic-programming/cover"
                            class="chakra-image css-1m34bn">
                        <div class="stydy-list-right">
                            <div class="study-right-top">
                                动态规划 （基础班）
                            </div>
                            <p class="study-right-bottom">
                                更细的知识点拆分，让入门更简单
                            </p>
                        </div>
                    </div>
                </div>
                <a-affix :offset-top="top">
                    <a-tabs v-model:activeKey="activeKey" size="large" @change="changeTab">
                        <a-tab-pane key="1" tab="推荐"></a-tab-pane>
                        <a-tab-pane key="2" tab="算法" force-render></a-tab-pane>
                        <a-tab-pane key="3" tab="数据结构"></a-tab-pane>
                        <a-tab-pane key="4" tab="题目交流"></a-tab-pane>
                        <a-tab-pane key="5" tab="职业发展"></a-tab-pane>
                        <a-tab-pane key="6" tab="竞赛"></a-tab-pane>
                        <a-tab-pane key="7" tab="前端"></a-tab-pane>
                        <a-tab-pane key="8" tab="后端"></a-tab-pane>
                    </a-tabs>
                </a-affix>
                <div class="feed-list">
                    <div class="feed-item">
                        <div class="avatar">
                            <img src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-interview-150/cover"
                                alt="">
                        </div>
                        <div class="feed-mid">
                            <div class="mid-username"> 海上森林一只猫 </div>
                            <div class="mid-title">新手今天完成2题</div>
                            <div class="mid-content ellipsis2">
                                小白第一次刷力扣题，有被爽到小白第一次刷力扣题，有被爽到小白第一次刷力扣题，有被爽到小白第一次刷力扣题，有被爽到小白第一次刷力扣题，有被爽到小白第一次刷力扣题，有被爽到小白第一次刷力扣题，有被爽到小白第一次刷力扣题，有被爽到
                                小白第一次刷力扣题，有被爽到小白第一次刷力扣题，有被爽到</div>
                            <div class="mid-bottom">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em"
                                        fill="currentColor" class="like">
                                        <path fill-rule="evenodd"
                                            d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>1</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em"
                                        fill="currentColor" class="comment">
                                        <path fill-rule="evenodd"
                                            d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>6</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em"
                                        fill="currentColor" class="collect">
                                        <path fill-rule="evenodd"
                                            d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.502.502 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.506.506 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918a2.5 2.5 0 01-.98.712c-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.496.496 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.501 2.501 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262zm.493 1.939c-.023.013-.132.089-.34.41-.271.418-.58 1.042-1.045 1.982l-.364.738-.05.103c-.213.434-.428.872-.788 1.197a2.5 2.5 0 01-.43.312c-.42.241-.903.31-1.381.379a52.6 52.6 0 00-.114.016l-.815.119c-1.037.15-1.725.252-2.207.38-.37.099-.476.18-.495.197a.5.5 0 00-.07.216c.005.025.044.153.285.45.314.386.811.874 1.562 1.605l.59.575.082.08c.346.336.697.676.895 1.118.072.162.127.332.164.506.1.474.016.955-.067 1.431l-.02.113-.138.811c-.178 1.033-.294 1.72-.32 2.217-.02.382.023.508.034.532.05.058.113.103.183.133.026.003.16.006.516-.132.465-.18 1.082-.502 2.01-.99l.728-.382.102-.054c.427-.226.859-.454 1.34-.505.177-.02.355-.02.532 0 .481.051.913.28 1.34.505l.102.054.728.383c.928.487 1.545.81 2.01.99.357.137.49.134.516.13a.499.499 0 00.183-.132c.01-.024.055-.15.034-.532-.026-.497-.142-1.184-.32-2.217l-.139-.81-.02-.114c-.082-.476-.166-.957-.066-1.431.037-.174.092-.344.164-.506.198-.442.549-.782.895-1.118a20.8 20.8 0 00.083-.08l.59-.575c.75-.731 1.247-1.219 1.561-1.606.241-.296.28-.424.285-.45a.5.5 0 00-.07-.215c-.02-.017-.126-.098-.495-.196-.482-.129-1.17-.23-2.207-.381l-.815-.119-.113-.016c-.479-.068-.963-.138-1.382-.379a2.5 2.5 0 01-.43-.312c-.36-.325-.575-.763-.788-1.197a31.757 31.757 0 00-.05-.103l-.364-.738c-.464-.94-.774-1.564-1.045-1.982-.208-.321-.317-.397-.34-.41a.5.5 0 00-.226 0zm8.326 6.044v.002-.002zm-3.246 9.575h-.002.002zm-9.934 0h.002-.002zm-3.246-9.575v.002-.002z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                        <div class="right-img">
                            <img src="https://pic.leetcode.cn/1696919757-gIwtqs-Enlighten AI · 机器学习.png" alt=""
                                class="h-full w-full rounded object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a-affix :offset-top="top">
            <div class="right">
                <ul class="right-ul">
                    <li class="right-item" v-for="(item, index) in arr">
                        <div class="li-item" :class="{ 'li-background': index === itemIndex }"
                            @click="onChangeDay(item, index)">
                            <div class="li-top" :class="{ 'li-red': ['SAT', 'SUN'].includes(item.top) }">{{ item.top }}
                            </div>
                            <div class="li-bottom" :class="{ 'li-bold': item.bottom === '今' }">{{ item.bottom }}</div>
                        </div>
                    </li>
                </ul>
                <router-link to="/problems" v-if="isSunday">
                    <div class="right-context">
                        <div class="card-top">
                            <img src="https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/contest-56f777dbd0f4d503b840f2e4cc835123.svg"
                                alt="竞赛" class="h-[14px] w-[14px]">
                            <span class="ml-1 text-xs font-medium" style="color: #af52d1;">竞赛</span>
                        </div>
                        <div class="card-bottom">
                            <span class="card-bottom-left">第 370 场周赛</span>
                            <span class="card-bottom-right">报名
                                <right-outlined />
                            </span>
                        </div>
                    </div>
                </router-link>
                <div class="right-dayCard" @click="onRouteToProblems">
                    <div class="card-top">
                        <img src="https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/everyday-problem-cbb6325ef6fecf53712264fb80350ef9.svg"
                            alt="每日 1 题" class="h-[14px] w-[14px]">
                        <span class="ml-1 text-xs font-medium" style="color: rgb(27, 163, 255);">每日 1 题</span>
                    </div>
                    <div class="card-bottom">
                        <span :class="{ 'glass': !isToday }">2520.统计能整除数字的位数统计能整除数字的位数统计能整除数字的位数</span>
                    </div>
                    <span v-if="!isToday" class="tip">零点揭晓</span>
                </div>
                <div class="right-welcome" v-if="!isLogin">
                    <div class="welcome-top">欢迎来到假力扣</div>
                    <div class="welcome-bottom">
                        <a-button style="width: 100%;" @click="router.push('/home/login')">登录/注册</a-button>
                    </div>
                </div>
                <div class="right-ranking-list" v-else>
                    <div class="ranking-list-item">
                        <div class="top">ac题数</div>
                        <div class="bottom">
                            <span class="num">{{ acNumber }}</span> 题
                        </div>
                    </div>
                    <div class="ranking-list-item">
                        <div class="top">ac排行</div>
                        <div class="bottom">
                            <span class="num">{{ acRank }}</span> 名
                        </div>
                    </div>
                    <div class="ranking-list-item">
                        <div class="top">竞赛排名</div>
                        <div class="bottom">
                            <span class="num">{{ contestRank }}</span> 名
                        </div>
                    </div>
                </div>
                <div class="right-bottom">
                    <div class="bottom-list">
                        <ul class="bottom-list-ul">
                            <li class="bottom-list-li">关于我们 <span style="font-weight: bold;">·</span></li>
                            <li class="bottom-list-li">企业服务 <span style="font-weight: bold;">·</span></li>
                            <li class="bottom-list-li">商务咨询 <span style="font-weight: bold;">·</span></li>
                            <li class="bottom-list-li">使用条款 <span style="font-weight: bold;">·</span></li>
                            <li class="bottom-list-li">隐私政策</li>
                            <li class="bottom-list-li">问题反馈 <span style="font-weight: bold;">·</span></li>
                            <li class="bottom-list-li">侵权投诉 <span style="font-weight: bold;">·</span></li>
                            <li class="bottom-list-li">证照中心</li>
                        </ul>
                    </div>
                    <div class="second-row">
                        <div class="second-row-one">沪ICP备18019787号-20</div>
                        <span style="font-size: 20px; font-weight: bold;">·</span>
                        <div class="second-row-two second-row-one">沪ICP证B2-20180578</div>
                    </div>
                    <div class="third-row">
                        <img src="https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/beian-0c5770666939ca0a3bbdb0daa3e68cc2.png"
                            alt="" style="width:14px;height:14px;margin-right:4px">
                        <span class="third-row-text">沪公网安备31010702007420号</span>
                    </div>
                    <div class="third-row">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="1em" height="1em"
                            fill="currentColor"
                            class="mr-1 h-[14px] w-[14px] fill-none stroke-current text-text-primary dark:text-text-primary"
                            style="margin-right:4px">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.34"
                                d="M4.502 3h3m-5.1-.6v7.2a1.2 1.2 0 001.2 1.2h4.8a1.2 1.2 0 001.2-1.2V2.4a1.2 1.2 0 00-1.2-1.2h-4.8a1.2 1.2 0 00-1.2 1.2zm3.6 6h.043v.038h-.043v-.039z">
                            </path>
                        </svg>
                        <span class="third-row-text">下载App</span>
                    </div>
                    <div class="third-row">
                        <span class="ml-[2px] mr-[5px]">©</span>
                        <span class="third-row-text">&nbsp;&nbsp;2023 领扣网络（上海）有限公司</span>
                    </div>
                </div>
            </div>
        </a-affix>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import { RightOutlined } from "@ant-design/icons-vue";
import dayjs from 'dayjs'
let arr: any[] = []
const isSunday = ref(false)
for (let i = 0; i < 7; i++) {
    let week = dayjs().add(i, 'day').format('ddd')
    let date = dayjs().add(i, 'day').format('DD')
    if (i === 0) {
        arr.push({
            top: (week + '').toUpperCase(),
            bottom: '今'
        })
        if (week === 'SUN') {
            isSunday.value = true
        }
    } else {
        arr.push({
            top: (week + '').toUpperCase(),
            bottom: date + ''
        })
    }
}
const isToday = ref(true)
const itemIndex = ref(0)
const onChangeDay = (day: any, index: number) => {
    isToday.value = day.bottom === '今'
    itemIndex.value = index
    isSunday.value = day.top === 'SUN' ? true : false
}

const top = ref<number>(20);

const activeKey = ref('1')
const changeTab = () => {

}

import { useRouter } from 'vue-router'
const router = useRouter()

import Cookies from "js-cookie";
let isLogin = ref(false)
onMounted(() => {
    isLogin.value = !!Cookies.get('token')
})

const acNumber = ref(0)
const acRank = ref(0)
const contestRank = ref(0)

const onRouteToProblems = () => {
    isToday.value && router.push('/problems')
}
</script>

<style lang="less" scoped>
@import url("../../../global.less");

.index-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 10%;

    .left {
        width: 70%;

        .study-plan {
            .study-title {
                width: 100px;
                display: flex;
                align-items: center;
                font-size: 16px;
                color: #1a1a1a;
                font-weight: bold;
                cursor: pointer;
            }

            .study-list {
                margin: 10px 0;
                display: flex;
                justify-content: space-between;

                .stydy-list-item {
                    width: 258px;
                    height: 88px;
                    display: flex;
                    background: rgb(245, 245, 245);
                    padding: 10px;
                    border-radius: 10px;
                    cursor: pointer;

                    &:hover {
                        background: #eee;
                    }

                    .chakra-image {
                        width: 72px;
                        margin-right: 10px;
                    }

                    .stydy-list-right {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .study-right-top {
                            color: #1a1a1a;
                            font-weight: bold;
                        }

                        .study-right-bottom {
                            font-size: 12px;
                            line-height: 12px;
                            position: relative;
                            top: 10px;
                        }
                    }
                }
            }

            .feed-list {
                margin-top: 10px;
                font-size: 12px;

                .feed-item {
                    cursor: pointer;
                    display: flex;
                    height: 150px;
                    width: 814px;

                    .avatar {
                        width: 40px;
                        margin: 10px 10px 0 0;

                        img {
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                        }
                    }

                    .feed-mid {
                        flex: 1;
                        border-bottom: 1px #eee solid;

                        .mid-username {
                            height: 20px;
                        }

                        .mid-title {
                            height: 40px;
                            font-weight: bold;
                            font-size: 16px;
                            color: #1a1a1a;
                        }

                        .mid-content {
                            height: 40px;
                            margin-bottom: 10px;
                        }

                        .mid-bottom {
                            display: flex;

                            div {
                                width: 40px;
                                cursor: pointer;
                            }

                            .like {
                                position: relative;
                                top: 1px;

                                &:hover {
                                    color: rgb(94, 198, 130);
                                }
                            }

                            .comment {
                                position: relative;
                                top: 1px;
                            }

                            .collect {
                                position: relative;
                                top: 1px;

                                &:hover {
                                    color: rgb(255, 161, 22);
                                }
                            }
                        }
                    }

                    .right-img {
                        position: relative;
                        top: 20px;
                        width: 146px;
                        height: 88px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    .right {
        width: 300px;
        border-radius: 10px 10px 0 0;
        box-shadow: 0 0 8px #eee;
        padding: 10px;

        .right-ul {
            display: flex;

            .right-item {
                margin-right: 4px;
                width: 40px;
                cursor: pointer;

                .li-item {
                    color: #000057;
                    font-size: 12px;
                    padding: 10px 5px;
                    border-radius: 5px;

                    &.li-background {
                        background: #eee;
                    }

                    &:hover {
                        background: #ccc;
                    }

                    .li-top {
                        color: #999;
                        text-align: center;

                        &.li-red {
                            color: red;
                        }
                    }

                    .li-bottom {
                        text-align: center;

                        &.li-bold {
                            font-weight: bold;
                        }
                    }
                }
            }
        }

        .right-context {
            height: 50px;
            border-radius: 5px;
            background: #eee;
            padding: 4px 0 0 10px;
            cursor: pointer;
            position: relative;
            margin-bottom: 10px;

            &:hover {
                background: #ddd;
            }

            .card-top {
                display: flex;
                align-items: center;

                img {
                    margin-right: 5px;
                }
            }

            .card-bottom {
                padding-right: 10px;
                display: flex;
                justify-content: space-between;

                .card-bottom-left {
                    color: #000;
                }

                .card-bottom-right {
                    color: #999;
                }
            }
        }

        .right-dayCard {
            height: 50px;
            border-radius: 5px;
            background: #eee;
            padding: 4px 0 0 10px;
            cursor: pointer;
            position: relative;

            &:hover {
                background: #ddd;
            }

            .card-top {
                display: flex;
                align-items: center;

                img {
                    margin-right: 5px;
                }
            }

            .card-bottom {
                width: 60%;
                white-space: nowrap;
                color: #1a1a1a;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;

                .glass {
                    filter: blur(10px);
                }
            }

            .tip {
                position: absolute;
                bottom: 0;
                right: 4px;
            }
        }

        .right-welcome {
            margin-top: 10px;
            padding: 20px 0 0 0;
            border-top: 1px solid #ccc;

            .welcome-top {
                text-align: center;
                margin-bottom: 10px;
            }
        }

        .right-ranking-list {
            display: flex;
            height: 60px;
            margin: 10px 0 0 0;
            padding: 10px 0 0 0;
            border-top: 1px solid #eee;

            .ranking-list-item {
                flex: 1;

                .top {
                    text-align: center;
                }

                .bottom {
                    text-align: center;

                    .num {
                        color: #1a1a1a;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
            }
        }

        .right-bottom {
            color: #999;
            font-size: 12px;

            .bottom-list {
                .bottom-list-ul {
                    display: flex;
                    flex-wrap: wrap;

                    .bottom-list-li {
                        box-sizing: border-box;
                        padding: 2px;
                        width: 20%;
                        height: 16px;
                        cursor: pointer;
                    }

                    .bottom-list-li:hover {
                        color: @--text-blue;
                    }
                }
            }

            .second-row {
                display: flex;
                height: 20px;
                line-height: 20px;

                .second-row-one {
                    margin-right: 4px;
                    cursor: pointer;
                }

                .second-row-one:hover {
                    color: @--text-blue;
                }

                .second-row-two {
                    margin: 0 4px;
                }
            }

            .third-row {
                margin-top: 5px;

                .third-row-text {
                    cursor: pointer;

                    &:hover {
                        color: @--text-blue;
                    }
                }
            }
        }
    }
}
</style>