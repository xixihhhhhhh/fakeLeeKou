import { FormConfig } from "@/components/BaseForm/config";
import { Rule } from "ant-design-vue/lib/form";
import { markRaw } from "vue";

export const loginColumns: Array<FormConfig> = [
    {
        span: 24,
        labelSpan: 4,
        label: "邮箱",
        type: 'a-input',
        key: "Email",
    },
    {
        span: 24,
        labelSpan: 4,
        label: "密码",
        type: 'a-input',
        key: "Password",
    },
] as any;

export const loginFormRules: Record<string, Rule[]> = {
    Email: [{ required: true, message: '请输入邮箱！' }],
    Password: [{ required: true, min: 6, max: 18, message: '请输入密码!' }],
};

import verfiy from './verfiy.vue'
export const enrollColumns: Array<FormConfig> = [
    {
        span: 24,
        labelSpan: 4,
        label: "邮箱",
        type: 'a-input',
        key: "Email",
    },
    {
        span: 24,
        labelSpan: 4,
        label: "用户名",
        type: 'a-input',
        key: "Name",
    },
    {
        span: 24,
        labelSpan: 4,
        label: "密码",
        type: 'a-input-password',
        key: "Password",
    },
    {
        span: 24,
        labelSpan: 4,
        label: "确认密码",
        type: 'a-input-password',
        key: "ensurePassword",
    },
    // {
    //     span: 14,
    //     labelSpan: 7,
    //     label: "验证码",
    //     type: 'a-input',
    //     key: "Verify",
    // },
    // {
    //     span: 2,
    //     label: "",
    // },
    // {
    //     span: 8,
    //     labelSpan: 6,
    //     type: markRaw(verfiy),
    // },
] as any;

export const enrollFormRules: Record<string, Rule[]> = {
    Email: [{ required: true, trigger: 'blur', message: '请输入邮箱！' }],
    Name: [{ required: true, trigger: 'blur', message: '请输入名称！' }],
    Password: [{ required: true, trigger: 'blur', message: '请输入密码！' }],
    ensurePassword: [{ required: true, trigger: 'blur', message: '请确认密码！' }],
    Verify: [{ required: true, trigger: ['change', 'blur'], message: '请输入验证码！' }],
};