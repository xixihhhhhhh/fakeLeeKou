/*
 * @Description: 类型定义
 * @Version: 1.0
 * @Autor: jiajun wu
 * @Date: 2022-04-12 14:42:26
 * @LastEditors: jiajun.wu
 * @LastEditTime: 2022-07-28 14:44:01
 */
/// <reference types="vite/client" />
import { RouterMeta } from '@/router/types'

import 'vue-router';

declare module 'vue-router' {
    interface RouteMeta extends RouterMeta {
    }
}
