import { expect, test } from "vitest";
import { mount } from '@vue/test-utils'
import Input from './Input.vue';

test("add event", () => {
    const InputWrapper = mount(Input);
    InputWrapper.find('button').trigger('click');

    expect(InputWrapper.emitted()).toHaveProperty('add');
})