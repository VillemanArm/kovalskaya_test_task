<template>
    <header>
        <router-link to="/">Главная</router-link>
        <router-link to="/converter">Конвертер</router-link>
    </header>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute, useRouter} from 'vue-router'
import { useConverterStore } from '@/stores/converterStore'

const converterStore = useConverterStore()

const props = defineProps<{
    msg?: string
}>()

onMounted(async () => {
    await converterStore.getRates()
    console.log(converterStore.rates)
})
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
