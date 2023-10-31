import { useUserStore } from "@/stores/user";
import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from "axios";
import Cookies from "js-cookie";
import { useCancelTokenStore } from '@/stores/cancelToken'
const cancelTokenStore = useCancelTokenStore()

const service = axios.create({
    // baseURL: config.context || '',
    timeout: 60000
})

const err = (error: { request: AxiosRequestConfig, response: AxiosResponse }) => {
    // if (error.response.status === 401) {
    //     Cookies.remove('token');
    // }
    return Promise.reject(error)
}

service.interceptors.request.use((config: any) => {
    if (Cookies.get('token')) {
        config.headers['token'] = Cookies.get('token');
    }
    config.headers["X-Axios-With"] = true;

    // 将请求存储起来 跳转下一页时中断未完成的请求
    config.cancelToken = new axios.CancelToken((c: Canceler) => {
        cancelTokenStore.addHttpRequestList(c)
    });
    return config
}, err)

service.interceptors.response.use((response) => {
    return response
}, err)


function $http<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resole, reject) => {
        service({
            ...config
        }).then((res: any) => {
            if (res.config.responseType == 'blob') {
                resole(res)
            } else {
                resole(res.data)
            }
        }).catch(error => {
            reject(error)
        })
    })
}

export {
    $http as axios
}
