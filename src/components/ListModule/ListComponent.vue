<template>
    <div class="">
        <ListItemComponent
            v-for="item in listStore.list"
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute, useRouter} from 'vue-router'
import { useListStore } from '@/stores/listStore'
import ListItemComponent from './ListItemComponent.vue'

defineProps<{
    msg?: string
}>()

const listStore = useListStore()
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
