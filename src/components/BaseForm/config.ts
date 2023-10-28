/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhuokunhao
 * @Date: 2023-08-07 17:57:10
 * @LastEditors: zhuokunhao
 * @LastEditTime: 2023-10-12 11:45:06
 */


import { Data } from 'ant-design-vue/es/_util/type';
import { CSSProperties } from 'vue';
export interface FormConfig {
  /* 行占比 */
  span:number,
  /* 自定义label占比 */
  labelSpan?:number,
  /* 控件类型 */
  type: string | any,
  /* 控件key */
  key:string,
  /* 标签的文本 */
  label?:string,
  /* 控件值 */
  value?:string | any,
  /* 控件附加属性 */
  attrs?:Data,
  /** 绑定可见属性字段  如根据`a`字段的值来对该控件进行显示/隐藏 */
  refVisAttr?: string,
  /** 可见属性值 */
  refVisValue?: any,
  /** 是否隐藏依旧占位置 */
  refVisible?:boolean,
  /* 输入框文本提示 */
  placeholder?:string,
  /* 控件样式 */
  style?:CSSProperties,
  
  [key: string]: any;
}

export type StatusType = 'check' | 'edit' | 'add'