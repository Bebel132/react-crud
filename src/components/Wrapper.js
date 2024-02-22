import { useEffect, useState } from "react"
import Form from "./Form"
import List from "./List"
import styles from './wrapper.module.css'

function Wrapper() {
    const [list, setList] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3001/list')
            .then(response => response.json())
            .then(data => setList(data));
    }, []);

    let lastId = list[list.length-1]

    function updateJSON(arr) {
        fetch(`http://localhost:3001/list`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(arr)
        })
        .then(response => response.json())
        .then(data => setList(data));
      }

    function updateList(event, newItem){
        event.preventDefault()
        const id = parseInt(lastId.id)+1
        const text = newItem

        const newList = [...list, {id, text}]

        setList(newList)
        updateJSON(newList)
    }

    function deleteFromList(id){
        let newArr = list.filter(todo => todo.id != id)
        setList(newArr)
        updateJSON(newArr)
    }

    function editFromList(id){
        let alteracao = prompt()

        let newArr =    (obj => {
            if(obj.id == id){
                return {id: id, text: alteracao}
            } else {
                return obj
            }
        })

        setList(newArr)
        updateJSON(newArr)
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