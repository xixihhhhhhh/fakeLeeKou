// 徽章相关接口

import { axios } from "@/utils/request";
import { ResDataStruct } from '@/interface/request'
let prefixPath = "http://api_oj.mgaronya.com/badge";
export const badgeApi = new (class {
    /* 返回当前登录的用户 */
    getCurBadge = <T = any>() => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/list`,
            method: "get",
        })
    }
})();