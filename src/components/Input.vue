<template>
    <input type="text" v-model="message" data-test="testInput" />
    <button @click="add">add</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const emit = defineEmits(['add']);

let message = ref("");

function add() {
    emit('add', message.value);
    message.value = '';
}
</script>
