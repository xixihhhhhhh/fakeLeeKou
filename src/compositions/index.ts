import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
// 倒计时
export const useCountDown = () => {
    const time = ref(0)
    // pause 停止  resume继续
    const { pause, resume } = useIntervalFn(
        () => {
            time.value--
            if (time.value <= 0) {
                pause()
            }
        },
        1000,
        { immediate: false }
    )

    const start = (num: number) => {
        // 赋值
        time.value = num
        // 调用
        resume()
    }
    return { time, start }
}