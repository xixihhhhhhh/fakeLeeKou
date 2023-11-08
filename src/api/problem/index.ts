// 问题相关接口

import { axios } from "@/utils/request";
import { ResDataStruct } from '@/interface/request'
let prefixPath = "http://api_oj.mgaronya.com/problem";
export const ProblemApi = new (class {
    /* 返回当前登录的用户 */
    problemList = <T = any>(data?: any) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/list`,
            method: "get",
            data
        })
    }
})();