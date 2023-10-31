// 用户登录相关接口

import { axios } from "@/utils/request";
import { ResDataStruct } from '@/interface/request'
let prefixPath = "http://api_oj.mgaronya.com/user";
export const loginApi = new (class {
    /* 获取验证码 */
    getverifyCode = <T = any>(email: string) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/verify/${email}`,
            method: "get",
        })
    }
    /* 注册 */
    enroll = <T = any>(data: any) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/regist`,
            method: "post",
            data
        })
    }
    /* 注册 */
    login = <T = any>(data: any) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/login`,
            method: "post",
            data
        })
    }
})();