import { FormConfig } from "@/components/BaseForm/config";
import { Rule } from "ant-design-vue/lib/form";
import { markRaw } from "vue";

export const loginConfig: Array<FormConfig> = [
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
        type: 'a-input-password',
        key: "Password",
    },
] as any;

export const loginFormRules: Record<string, Rule[]> = {
    Email: [{
        required: true, message: '邮箱格式不正确!',
        pattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    }],
    Password: [{ required: true, min: 6, max: 18, message: '请输入6到18位的密码!' }],
};

export const enrollConfig: Array<FormConfig> = [
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
] as any;

export const enrollFormRules: Record<string, Rule[]> = {
    Email: [{
        required: true, trigger: 'blur', message: '请输入邮箱！',
        pattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    }],
    Name: [{ required: true, trigger: 'blur', message: '请输入名称！' }],
    Password: [{ required: true, trigger: 'blur', message: '请输入密码！' }],
    ensurePassword: [{ required: true, trigger: 'blur', message: '请确认密码！' }],
    Verify: [{ required: true, trigger: ['change', 'blur'], message: '请输入验证码！' }],
};

export const findPasswordConfig: Array<FormConfig> = [
    {
        span: 24,
        labelSpan: 4,
        label: "邮箱",
        type: 'a-input',
        key: "Email",
    },
] as any;

export const findPasswordFormRules: Record<string, Rule[]> = {
    Email: [{
        required: true, trigger: 'blur', message: '邮箱格式不正确!',
        pattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    }],
};

export const personalMsgConfig: Array<FormConfig> = [
    {
        span: 11,
        labelSpan: 6,
        label: "昵称",
        type: 'a-input',
        key: "name",
    },
    {
        span: 11,
        labelSpan: 6,
        label: "性别",
        type: 'a-radio-group',
        attrs: {
            options: [
                { label: '男', value: true },
                { label: '女', value: false },
            ],
        },
        key: "sex",
    },
    {
        span: 11,
        labelSpan: 6,
        label: "邮箱",
        type: 'a-input',
        key: "email",
    },
    {
        span: 11,
        labelSpan: 6,
        label: "地址",
        type: 'a-input',
        key: "address",
    },
    {
        span: 11,
        labelSpan: 6,
        label: "博客地址",
        type: 'a-input',
        key: "blog",
    },
] as any;

export const upbatePasswordConfig: Array<FormConfig> = [
    {
        span: 11,
        labelSpan: 6,
        label: "旧密码",
        type: 'a-input-password',
        key: "first",
    },
    {
        span: 11,
        labelSpan: 6,
        label: "新密码",
        type: 'a-input-password',
        key: "second",
    },
] as any;

export const upbatePasswordRules: Record<string, Rule[]> = {
    first: [{ required: true, trigger: 'blur', min: 6, max: 18, message: '密码请在六到十八位！', }],
    second: [{ required: true, trigger: 'blur', min: 6, max: 18, message: '密码请在六到十八位！', }],
};