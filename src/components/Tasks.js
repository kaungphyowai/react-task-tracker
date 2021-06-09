import { useState } from 'react'

const Tasks = ({ tasks }) => {

    return (
        <>
            {tasks.map((task) => (<h2 key={task.id}>{task.text}</h2>))}
        </>
    )
}

export default Tasks
