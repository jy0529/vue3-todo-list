export interface Todo {
    message: string;
};

export interface ITodoList {
    add(todo: Todo): Todo;
    remove(message: string): Todo | undefined;
    getList(): Readonly<Array<Todo>>;
    store(): void;
};

export class Todo implements Todo {
    constructor(message = '') {
        this.message = message;
    }
};

export class TodoList implements ITodoList {
    _list: Array<Todo> = [];
    constructor(todoList: Array<Todo> = []) {
        this._list = todoList;
    }
    add(todo: Todo): Todo {
        this._list.push(todo);
        return todo;
    }
    remove(message: string = ''): Todo | undefined {
        const idx = this._list.findIndex(t => t.message === message);
        const todo = this._list[idx];
        if (idx !== -1) {
            this._list.splice(idx, 1);
            return todo;
        }
        return;
    }
    getList(): readonly Todo[] {
        return Object.freeze(this._list.slice());
    }
    store(): void {
        // TODO
        throw new Error("Method not implemented.");
    }
}