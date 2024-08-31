import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import ListApi from '@/common_functions/api/listApi'

const listApi = new ListApi()

export const useListStore = defineStore('list', () => {
    const list = ref([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
    ])

    return { list }
})
