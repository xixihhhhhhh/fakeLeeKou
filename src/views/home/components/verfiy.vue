<template>
    <div class="verfiy">
        <a-button @click="send()" type="primary" v-if="time === 0">
            发送验证码
        </a-button>
        <span v-else class="code">
            {{ time + '秒后获取' }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { useCountDown } from '@/compositions/index'
import { ref } from 'vue'
import { loginApi } from "@/api/user/login";
const isSendCode = ref(false)
const { start, time } = useCountDown()
const send = async () => {
    // // 如果大于0  直接return
    if (time.value > 0) return
    // 发送Ajax
    // try {
    //     await loginApi.getVerfiyCode(form.mobile).then((res) => console.log(res))
    //     Message({ type: 'success', text: '获取验证码成功！' })
    // } catch (error) {
    //     Message({ type: 'error', text: error.response.data.message || '获取验证码失败！' })
    // }
    
    isSendCode.value = true
    start(60)
}
</script>

<style lang="less" scoped>
.verfiy {
    width: 200px;
    margin-left: 20px;
    .code {
        padding: 10px;
        background: rgb(5, 145, 181);
        color: #fff;
        border-radius: 10px;
    }
}
</style>