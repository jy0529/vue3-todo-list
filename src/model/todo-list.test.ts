import { expect, test } from 'vitest';
import { Todo, TodoList } from './todo-list';
import type { Todo as TodoType } from './todo-list';

test("todo basic", () => {
    let todo = new Todo("message")
    expect(todo.message).toBe("message");
});

test("todo-list basic", () => {
    let todoList: Array<TodoType> = [];
    let list = new TodoList(todoList)

    const todo = new Todo("message1");
    list.add(todo);
    expect(list.getList().length).toBe(1);

    list.remove("message1");
    expect(list.getList().length).toBe(0);

    list.add(todo);
    expect(list.getList().length).toBe(1);
    expect(list.getList()[0]).toBe(todo);

    const ans = list.remove('xxx');
    expect(ans).toBe(undefined);
});
