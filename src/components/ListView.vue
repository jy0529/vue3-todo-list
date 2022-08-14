<template>
    <ul>
        <li v-for="(todo, i) in todoList" :key="i">
            {{ todo.message }}
            <button @click="remove(todo)">remove</button>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { Todo } from '../model/todo-list';
defineProps({
    todoList: Array<Todo>,
});
const emit = defineEmits(['remove']);
function remove(todo: Todo) {
    emit("remove", todo.message);
}
</script>