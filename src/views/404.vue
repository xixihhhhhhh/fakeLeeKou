<template>
    <div class="exception">
        <div class="content">
            <!-- <div class="tit">404</div> -->
            <a-empty description="抱歉，你访问的页面不存在" />
        </div>
    </div>
</template>

<script>
export default {
    name: "PageNotFound",
    data() {
        return {};
    },
    mounted() { },
    methods: {},
};
</script>

<style lang="less" scoped>
.exception {
    height: 100%;
}

.content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .tit {
        font-size: 50px;
        margin-bottom: 30px;
    }
}
</style>
