<template>
    <listToolbarComponent />
    <listComponent />
    <BasePagination
        :maxPage="maxPage"
        :currentPage="currentPage"
        @changePage="(pageNumber) => changePage(pageNumber)"
    />
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute} from 'vue-router'
import listComponent from './ListComponent.vue'
import listToolbarComponent from './ListToolbarComponent.vue'
import BasePagination from '@/components/ui/BasePagination.vue'

defineProps<{
    msg?: string
}>()

const currentPage = ref(1)
const maxPage = ref(10)

const changePage = (pageNumber: number) => {
    currentPage.value = pageNumber
}
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
