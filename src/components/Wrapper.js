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

    function updateList(event, newItem){
        event.preventDefault()
        let id = parseInt(lastId.id)+1
        id = String(id)
        const text = newItem

        const newList = [...list, {id, text}]

        fetch('http://localhost:3001/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, text})
        })
        .then(response => response.json)
        .then(setList(newList))
    }

    function deleteFromList(id){
        let newArr = list.filter(todo => todo.id != id)

        fetch(`http://localhost:3001/list/${id}`, {
            method: 'DELETE'
        })
        .then(setList(newArr))
    }

    function editFromList(id, placeholder){
        let text = prompt("", placeholder)

        let newArr = list.map(obj => {
            if(obj.id == id){
                return {id: id, text: text}
            } else {
                return obj
            }
        })
        
        fetch(`http://localhost:3001/list/${id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id, text})
        })
        .then(response => response.json()
        .then(setList(newArr))
        )
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