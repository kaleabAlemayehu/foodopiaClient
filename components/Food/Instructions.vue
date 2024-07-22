<template>
    <div>
        <div class="mt-8">
            <h3 class="font-fancy text-3xl text-primary">Instructions</h3>
            <ol class="marker:text-gray-800 marker:font-semibold marker:poppins list-decimal mt-4 ml-6">
                <li v-for="instruction, index in instructions" :key="index" class="pl-4 mt-2">
                    <p>
                        {{ instruction.description }}
                    </p>
                </li>
            </ol>
        </div>

    </div>
</template>

<script setup>
import { FETCH_INSTRUCTION } from '~/helpers/queries/food';
const props = defineProps({
    id: Number,
})
const instructions = ref([])
onMounted(async () => {
    const { data } = await useAsyncQuery(FETCH_INSTRUCTION, {
        _eq: props.id
    })
    instructions.value = data?._value?.steps || []
})
</script>

<style scoped></style>