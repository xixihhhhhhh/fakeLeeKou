// 用户信息相关接口

import { axios } from "@/utils/request";
import { ResDataStruct } from '@/interface/request'
let prefixPath = "http://api_oj.mgaronya.com/user";
export const userInfoApi = new (class {
    /* 返回当前登录的用户 */
    getCurPersonMsg = <T = any>(email: string) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/info`,
            method: "get",
        })
    }
})();