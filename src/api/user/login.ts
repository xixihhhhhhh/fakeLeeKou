// 用户登录相关接口

import { axios } from "@/utils/request";
import { ResDataStruct } from '@/interface/request'
let prefixPath = "https://api_oj.mgaronya.com";
export const loginApi = new (class {
    /* 获取验证码 */
    getVerfiyCode = <T = any>(email: string) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/verify/${email}`,
            method: "get",
        })
    }
})();