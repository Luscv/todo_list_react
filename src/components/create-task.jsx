import { useState } from "react";

const CreateTask = ({onAddTask}) => {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim()){
            onAddTask(input)
            setInput("")
        }
    }

    return (
    <> 
    <form className="flex p-3 gap-3" onSubmit={handleSubmit}>
        <input type="text" className="rounded p-3" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your task here"/>
        <button type="submit">Save Task</button>
    </form>   
    </>
    )
}

export default CreateTask;