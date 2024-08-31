import type { Ref } from 'vue'

const validateNumberInput = (input: HTMLInputElement, ref: Ref<number>) => {
    if (/\D/g.test(input.value)) {
        ref.value = +input.value.replace(/\D/g, '')
    }
    if (/^0/.test(input.value)) {
        ref.value = +input.value.replace(/^0/, '')
    }
}

export { validateNumberInput }
