import { useState } from "react"

function Form({updateList}) {
    const [value, setValue] = useState("")
    return (
        <form onSubmit={e => updateList(e, value)}>
            <input type="text" onChange={e => setValue(e.target.value)} />
            <input type="submit" value="enviar"/>
        </form>
    )
}

export default Form