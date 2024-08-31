<template>
    <div class="">
        <h4>list item {{ item.id }}</h4>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute, useRouter} from 'vue-router'

defineProps<{
    item: {
        id: number
    }
}>()
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
