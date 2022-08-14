<template>
    <todo-input @add="add"></todo-input>
    <list-view :todoList="todoList" @remove="remove"></list-view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import TodoInput from './Input.vue';
import ListView from './ListView.vue';
import { Todo, TodoList } from '../model/todo-list';

let todoList: Array<Todo> = reactive([]);
const controller = new TodoList(todoList);

function add(message: string) {
    controller.add(new Todo(message));
}

function remove(message: string) {
    controller.remove(message);
}

</script>