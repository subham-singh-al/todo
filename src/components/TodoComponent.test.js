/**
 * TODO APP RENDER PROPERLY -->DONE
 * Input any task in the input box -- click on the button --> <li> {text} <li> --> DONE
 * Click on the button to add task with empty task --> LI should not render
 */

import React from 'react'
import { shallow } from 'enzyme';
import TodoComponent from './TodoComponent';

describe("TODO APP TEST", () => {
    it("TODO APP Component RENDER PROPERLY", () => {
        shallow(<TodoComponent />);
    });
    it("Input any task in the input box -- click on the button", () => {
        const tree = shallow(<TodoComponent />);
        const inputBox = tree.find('.input-text');
        inputBox.simulate('change', { target: { value: 'Go for a walk' } })
        const addTaskBtn = tree.find('button')
        addTaskBtn.simulate('click');
        const taskAdded = (
            <div className="task-list card">
                <ul class="list-group list-group-flush">
                    <li className="list-group-item">
                        <input type="checkbox" className="input-checkBox" />
                        Go for a walk
                    </li>
                </ul>
            </div>
        );
        expect(tree.contains(taskAdded)).toEqual(true);
    });
    it("Click the Add Task button with no Task entered should not render any List for task", () =>{
        const tree = shallow(<TodoComponent />);
        tree.find('button').simulate('click');
        const emptytaskAdded = (
            <div className="task-list card">
                <ul class="list-group list-group-flush">
                    <li className="list-group-item">
                        <input type="checkbox" className="input-checkBox" />
                    </li>
                </ul>
            </div>
        );
        expect(tree.contains(emptytaskAdded)).toEqual(false);
    })
});
