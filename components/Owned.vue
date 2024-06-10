<template>
    <div class="edit">
        <Icon name="fa6-solid:pen" class="pen" />

    </div>
    <div class="delete">
        <Icon name="fa6-solid:trash" class="trash" />

    </div>

</template>

<script setup>

</script>

<style scoped>
.pen,
.trash {
    @apply text-xl border-[1px];
}

.edit,
.delete {
    @apply text-xl border-[1px] p-2 rounded-lg transition-all duration-300 cursor-pointer;
}

.trash {
    @apply text-red-600;
}

.edit:hover,
.delete:hover {
    @apply shadow-md;
}
</style>