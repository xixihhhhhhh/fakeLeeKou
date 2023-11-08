// 用户信息相关接口

import { axios } from "@/utils/request";
import { ResDataStruct } from '@/interface/request'
let prefixPath = "http://api_oj.mgaronya.com/user";
let avatarPath = "http://api_img.mgaronya.com/user";
export const userInfoApi = new (class {
    /* 返回当前登录的用户 */
    getCurPersonMsg = <T = any>() => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/info`,
            method: "get",
        })
    }
    /* 更新密码 */
    upbatePassword = <T = any>(data: any) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/update/password`,
            method: "PUT",
            data
        })
    }
    /* 更新用户信息 */
    upbateCurPersonMsg = <T = any>(data: any) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/update`,
            method: "PUT",
            data
        })
    }
    /* 更新用户信息 */
    upbateAvatar = <T = any>(data: any) => {
        return axios<ResDataStruct<T>>({
            url: `${avatarPath}/upload`,
            method: "post",
            data,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    }
})();