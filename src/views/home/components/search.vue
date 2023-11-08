<template>
    <div class="homeSearch-con">
        <div class="top-box">
            <div class="search">
                <a-input-search v-model:value="searchText" placeholder="请输入搜素内容" enter-button @search="onSearch" />
            </div>
            <a-tabs v-model:activeKey="activeKey" type="card" size="large">
                <a-tab-pane key="problems">
                    <template #tab>
                        <pic-left-outlined />题目
                    </template>
                </a-tab-pane>
                <a-tab-pane key="users">
                    <template #tab>
                        <team-outlined />用户
                    </template>
                </a-tab-pane>
            </a-tabs>
        </div>
        <div class="bottom-box">
            <a-card v-if="activeKey === 'problems'">
                <a-table class="ant-table-striped" size="middle" :columns="columns" :data-source="problemsData"
                    :rowClassName="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" bordered>
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'title'">
                            <a class="editable-cell" @click="onDetail(record)">
                                {{ text }}
                            </a>
                        </template>
                    </template>
                </a-table>
            </a-card>
            <div class="userList" v-else>
                <a-empty v-if="isZero"></a-empty>
                <div class="userCard" v-for="(user, index) in usersData" :key="index">
                    <div class="left">
                        <a-avatar :src="config.imgUrl + (user as any).icon"
                            style="cursor: pointer;width: 50px;height: 50px;" />
                    </div>
                    <div class="mid">
                        {{ (user as any).name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, watchEffect } from 'vue'
import { PicLeftOutlined, TeamOutlined } from '@ant-design/icons-vue';
import config from '@/config/defaultSettings'

const searchText = ref('')
const onSearch = () => {
    num = 0
    doQuery(searchText.value)
}
const activeKey = ref('problems')

const columns = [
    { title: '标题', dataIndex: 'title' },
];

const problemsData = ref([])
const usersData = ref([])
const isZero = ref(false)

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()


const onDetail = (record: any) => {
    router.push({ path: '/problems', query: { id: record.id } })
}

import { searchProblemApi } from '@/api/problem/search'
import { userSearchApi } from '@/api/user/search'
let num = 0
function doQuery(text: string) {
    if (num === 2) {
        return
    }
    num++
    let api = activeKey.value === 'problems' ? searchProblemApi.searchByText : userSearchApi.searchByText
    api(text).then((res: any) => {
        if (res.code === 200) {
            if (activeKey.value === 'problems') {
                problemsData.value = res.data.problems
            } else {
                usersData.value = res.data.users
                isZero.value = res.data.total === 0
            }
        }
    })
}

onMounted(() => {
    doQuery(searchText.value || route.query.text + '')
})

watch(activeKey,
    () => {
        doQuery(searchText.value || route.query.text + '')
    })

watch(() => route.query.text,
    () => {
        num = 0
        searchText.value = ''
        doQuery(route.query.text + '')
    })
</script>

<style lang="less" scoped>
.homeSearch-con {

    .top-box {
        padding: 0 20%;
        height: 150px;
        padding-top: 50px;

        .search {
            width: 60%;
            margin-bottom: 32px;
        }
    }

    .bottom-box {
        min-height: 600px;
        padding: 20px 20%;
        background: rgb(247, 248, 250);

        .userList {
            .userCard {
                background: #fff;
                cursor: pointer;
                display: flex;
                padding: 20px 10px;
                border-radius: 10px;

                .left {}

                .mid {
                    margin-left: 10px;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
    }
}

[data-doc-theme='light'] .ant-table-striped :deep(.table-striped) td {
    background-color: #fafafa;
}

[data-doc-theme='dark'] .ant-table-striped :deep(.table-striped) td {
    background-color: rgb(29, 29, 29);
}
</style>
