import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
    const curUser = ref({})
    const setCurUser = (User: any) => {
        curUser.value = User
    }

    return { curUser, setCurUser }
}, {
    persist: true
}

);
