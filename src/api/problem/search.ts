// 问题搜索相关接口

import { axios } from "@/utils/request";
import { ResDataStruct } from '@/interface/request'
let prefixPath = "http://api_oj.mgaronya.com/problem";
export const searchProblemApi = new (class {
    /* 根据文本搜索题目 */
    searchByText = <T = any>(text: string) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/search/${text}`,
            method: "get",
        })
    }
    /** 根据Id搜索题目 */
    searchById = <T = any>(id: string) => {
        return axios<ResDataStruct<T>>({
            url: `${prefixPath}/show/${id}`,
            method: "get",
        })
    }
})();