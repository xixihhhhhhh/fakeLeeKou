<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <a-tooltip>
    <template #title>回到顶部</template>
    <a-back-top :visibilityHeight="100" />
  </a-tooltip>
</template>


<style lang='less'>
@import url("@/components/global.less");
@themeColor: #0591b5;

#app {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // -moz-user-select: none;
  // /*火狐*/
  // -webkit-user-select: none;
  // /*webkit浏览器*/
  // -ms-user-select: none;
  // /*IE10*/
  // -khtml-user-select: none;
  // /*早期浏览器*/
  // user-select: none;
}

*,
p {
  margin: 0;
  padding: 0
}

ul,
li {
  list-style: none;
}

/* 分页 */
.ant-pagination {
  .ant-pagination-item:hover a {
    color: #00b29f !important;
  }

  .ant-pagination-item-active {
    background: @themeColor !important;
    border-color: @themeColor !important;

    a {
      color: #fff !important;
    }

    &:hover a {
      color: #fff !important;
    }
  }

  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    color: #00b29f !important;
    // border-color: #00b29f !important;
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: @themeColor !important;
  }
}

/* 按钮 */
.ant-btn {
  border-radius: 5px !important;
}

.ant-btn:hover,
.ant-btn:focus {
  color: @themeColor;
  border-color: @themeColor;
}

.ant-btn-danger:hover,
.ant-btn-danger:focus {
  color: #fff;
  border-color: #ff4d4f;
}

.ant-btn-primary {
  background-color: @themeColor !important;
}

.ant-btn-primary:hover,
.ant-btn-primary:focus {
  color: #fff !important;
  opacity: .9;
}

.ant-btn-dangerous:hover,
.ant-btn-dangerous:focus {
  color: #ff7875 !important;
  border-color: #ff7875 !important;
  background: #fff !important;
}

.ant-btn-primary[disabled],
.ant-btn-primary[disabled]:hover,
.ant-btn-primary[disabled]:focus,
.ant-btn-primary[disabled]:active {
  color: inherit !important;
  background-color: #f5f5f5 !important
}

/* 标签页 */
.ant-tabs {
  .ant-tabs-tab {
    &:hover {
      color: @themeColor;
    }
  }
}

.ant-tabs-ink-bar {
  background: @themeColor;
}

.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: @themeColor;
}


/* 输入框-选择框 */
.ant-input:hover,
.ant-input:focus,
.ant-input-focused {
  border-color: @themeColor !important;
}

.ant-input-affix-wrapper:focus,
.ant-input-affix-wrapper-focused,
.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
  border-color: @themeColor !important;
}

// .ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected{
//   background-color: #a4dfed !important;
// }
.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
  border-color: @themeColor !important;
}

.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border-color: @themeColor !important;
}

/* 单选框 */

.ant-radio-checked .ant-radio-inner,
.ant-radio-wrapper:hover .ant-radio,
.ant-radio:hover .ant-radio-inner,
.ant-radio-input:focus+.ant-radio-inner {
  border-color: @themeColor !important;
}

.ant-radio-inner::after {
  background-color: @themeColor !important;
}
</style>