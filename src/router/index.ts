/*
 * @Description: 路由配置
 * @Version: 1.0
 * @Autor: JiaJun Wu
 * @Date: 2021-11-04 15:59:15
 * @LastEditors: jiajun.wu
 * @LastEditTime: 2022-07-27 17:27:24
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { constantRouterMap } from "./config";

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap,
})

export default router;