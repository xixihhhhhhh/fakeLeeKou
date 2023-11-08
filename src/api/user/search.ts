// 问题相关接口

import { axios } from "@/utils/request";
import { ResDataStruct } from '@/interface/request'
let prefixPath = "http://api_oj.mgaronya.com/user";
export const userSearchApi = new (class {
    /* 返回当前登录的用户 */
    searchByText = <T = any>(text: string) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/search/${text}`,
            method: "get",
        })
    }
})();