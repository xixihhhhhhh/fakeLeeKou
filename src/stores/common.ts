import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("user", () => {
    const mode = ref('dark')
    const setMode = (Mode: string) => {
        mode.value = Mode
    }

    return { mode, setMode }
}, {
    persist: true
}

);
