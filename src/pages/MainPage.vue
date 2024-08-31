<template>
    <span>{{ converterStore.rates }}</span>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute} from 'vue-router'
import { useConverterStore } from '@/stores/converterStore'

const converterStore = useConverterStore()

defineProps<{
    msg?: string
}>()
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
