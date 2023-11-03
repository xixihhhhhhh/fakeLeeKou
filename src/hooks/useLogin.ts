import { ref } from 'vue'
import Cookies from "js-cookie";
import { userInfoApi } from '@/api/user/userInfo'
export const useLogin = () => {

    const isLogin = ref(!!Cookies.get('token'))

    return { isLogin }
}