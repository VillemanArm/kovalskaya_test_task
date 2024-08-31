<!-- 
    Компонент представляет из себя модальное окно, которое принимает заголовок и компонент или html разметку в слот.
    
    Принимает свойства:
        header?: string

    Возвращает событие:
        closeModal
-->

<template>
    <div
        class="modal__wrapper"
        @click="$emit('closeModal')"
    >
        <div
            @click.stop
            class="modal"
        >
            <div class="modal__head">
                <h2>{{ header }}</h2>
                <div
                    class="modal__close"
                    @click="$emit('closeModal')"
                >
                    <svg
                        width="6"
                        height="8"
                        viewBox="0 0 6 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#272928"
                    >
                        <path
                            d="M1.33334 7.33337L4.66668 4.00004L1.33334 0.666707"
                            stroke="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div class="modal__content">
                <slot> </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineProps<{
    header?: string
}>()

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'

.modal__wrapper
    width: 100vw
    height: 100vh
    position: absolute
    z-index: 2
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center

    background-color: rgb(0, 0, 0, 0.5)
    overflow: hidden

.modal
    width: 600rem
    padding: 16rem 20rem

    background-color: $background-color
    border-radius: 16rem


.modal__head
    margin-bottom: 20rem

.modal__close
    float: right
    cursor: pointer
    width: 32rem
    height: 32rem

    &>svg
        width: 100%
        height: 100%

h2
    display: inline-block

    font-size: 24rem
    font-weight: 500
</style>
