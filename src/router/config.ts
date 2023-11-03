/*
 * @Description: 路由信息
 * @Version: 1.0
 * @Autor: jiajun.wu
 * @Date: 2022-07-27 17:25:01
 * @LastEditors: zhuokunhao
 * @LastEditTime: 2023-10-17 17:30:15
 */
import { RouteRecordRaw } from "vue-router";

export const constantRouterMap: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "index",
        meta: { title: "首页" },
        redirect: "/home",
        children: [
            {
                path: "/home",
                component: () => import("@/views/home/index.vue"),
                meta: { title: "首页", keepAlive: true },
                children: [
                    {
                        path: "",
                        redirect: "/home/homeIndex"
                    },
                    {
                        path: "homeIndex",
                        name: 'homeIndex',
                        component: () => import("@/views/home/components/homeIndex.vue"),
                    },
                    {
                        path: "login",
                        name: 'login',
                        component: () => import("@/views/home/components/login.vue"),
                    },
                    {
                        path: 'personalIntro',
                        component: () => import("@/views/home/components/personalIntro.vue"),
                    },
                ]
            },
            {
                path: '/problems',
                component: () => import("@/views/problems/index.vue"),
            },
            {
                path: "/:pathMatch(.*)", // 页面不存在的情况下会跳到404页面
                redirect: "/404",
                name: "notFound",
                meta: { title: "页面-找不到了", keepAlive: false, hidden: true },
            },
            {
                path: "/404",
                name: "404",
                component: () => import("@/views/404.vue"),
                meta: { title: "页面-找不到了", keepAlive: false, hidden: true },
            },
        ]
    }
]