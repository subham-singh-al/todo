import React, { useState } from 'react'
import './TodoComponent.css'
/**
 * TODO: 
 * Add input box -- Done
 * Add Button task -- Done
 * Add List of the all task -- Done
 * Add checkbox toggle the status done or left - Left
 * Add Unit test cases 
 */

/**
 * After the call I did following things : 
 *  --> Fixed the Dependency error --> took some amount of time --> 
 *          JEST dependency I had to remove it was giving error jest-dom is already in React package
 *  --> fixed a small bug in the task as it was adding a undefined task into the List --> tested that too
 *  --> Completed the third test case -->Wrote 3 test case in all
 *  --> Added Some styling
 *  ----> Added two image file with screenshot for test run and also the output rendered on browser
 */


function TodoComponent() {
    const [tasks, setTasks] = useState([]);
    const [singleTask, setSingleTask] = useState();

    const handlerToAddTask = () => {
        if (singleTask !== '' && singleTask !== undefined) {
            setTasks([...tasks, { value: singleTask, isCompleted: false }])
        }
    }
    return (
        <div>
            <div>
                <form>
                    <input
                        className='input-text form-control'
                        aria-label="Default"
                        label={'Task to be added'}
                        type="text"
                        name="text"
                        id="text"
                        onChange={(e) => setSingleTask(e.target.value)}
                        required={true}
                    />
                </form>
                <button className="add-btn btn btn-primary" onClick={handlerToAddTask}>
                    Add Task
                </button>
            </div>
            <div className="task-list card">
            <ul class="list-group list-group-flush">
                {/* map to task to render like list */}
                {
                    tasks.map((todo, index) => (
                        <li className="list-group-item">
                            <input
                                type="checkbox"
                                className="input-checkBox"
                            />
                            {todo.value}
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default TodoComponent
