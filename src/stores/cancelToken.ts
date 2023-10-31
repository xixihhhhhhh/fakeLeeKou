import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface CancelTokenState {
  httpRequestList: Array<any>,
}
import { Canceler } from 'axios'

export const useCancelTokenStore = defineStore("CancelToken", () => {
  const httpRequestList = ref([])

  const ADD_HTTP_REQUEST_LIST = (payload: Canceler | number) => {
    if (payload === 0) {
      httpRequestList.value.forEach(item => {
        (item as any)("interrupt")
      })
      httpRequestList.value = []
    } else {
      (httpRequestList.value as any).push(payload)
    }
  }

  const addHttpRequestList = (payload: Canceler) => {
    ADD_HTTP_REQUEST_LIST(payload)
  }

  function removeHttpRequestList() {
    ADD_HTTP_REQUEST_LIST(0)
  }

  return { addHttpRequestList, removeHttpRequestList }
});
