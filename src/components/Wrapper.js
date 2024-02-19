import { useState } from "react"
import Form from "./Form"
import List from "./List"
import styles from './wrapper.module.css'

let lastId = 0

function Wrapper() {
    const [list, setList] = useState([])

    function updateList(event, newItem){
        event.preventDefault()
        setList([...list, {id:lastId++, text:newItem}])
    }

    function deleteFromList(id){
        let newArr = list.filter(todo => todo.id != id)
        setList(newArr)
    }

    function editFromList(id){
        let alteracao = prompt()

        let newArr = list.map(obj => {
            if(obj.id == id){
                return {id: id, text: alteracao}
            } else {
                return obj
            }
        })

        setList(newArr)
    }

    return (
        <div className={styles.wrapper}>
            <h1>Simple Crud</h1>
            <Form updateList={updateList} />
            <List list={list} deleteFromList={deleteFromList} editFromList={editFromList}/>
        </div>
    )
}

export default Wrapper