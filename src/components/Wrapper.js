import { useState } from "react"
import Form from "./Form"
import List from "./List"

let lastId = 0

function Wrapper() {
    const [list, setList] = useState([])

    function updateList(event, newItem){
        event.preventDefault()
        setList([...list, {id:lastId++, text:newItem}])

        console.log(list)
    }

    function deleteFromList(id){

    }

    function edfitFromlist(id){

    }

    return (
        <div className="Wrapper">
            <Form updateList={updateList} />
            <List list={list} />
        </div>
    )
}

export default Wrapper