import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
    const verify = ref()

    return { verify }
}, {
    persist: true
}

);
