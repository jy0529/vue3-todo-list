import { expect, test } from "vitest";
import { mount } from '@vue/test-utils'
import ListView from './ListView.vue';
import { Todo } from "../model/todo-list";

test("add event", () => {
    const todoList = [
        new Todo('message1'),
    ];
    const ListViewWrapper = mount(ListView, {
        props: {
            todoList
        }
    });
    ListViewWrapper.find('button').trigger('click');
    expect(ListViewWrapper.emitted()).toHaveProperty('remove');
})