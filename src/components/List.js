import styles from './list.module.css'

function List({list, deleteFromList, editFromList}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>text</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.text}</td>
                        <td>
                            <div className="buttons">
                                <button className={styles.edit} onClick={() => editFromList(item.id)}>edit</button>
                                <button className={styles.del} onClick={() => deleteFromList(item.id)}>delete</button>
                            </div>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )
}

export default List