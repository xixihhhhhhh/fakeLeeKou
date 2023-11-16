import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
    const curUser = ref({})
    const setCurUser = (User: any) => {
        curUser.value = User
    }

    const isLogin = ref(false)
    const setLogin = (flag: boolean) => {
        isLogin.value = flag
    }

    return { curUser, setCurUser, isLogin, setLogin }
}, {
    persist: true
}

);
