function List({list}) {
    return (
        <table border={1}>
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
                                <button className="edit">edit</button>
                                <button className="del">delete</button>
                            </div>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )
}

export default List