import { useState } from "react"
import styles from './form.module.css'

function Form({updateList}) {
    const [value, setValue] = useState("")
    return (
        <form className={styles.form} onSubmit={e => updateList(e, value)}>
            <input type="text" className={styles.inputText} onChange={e => setValue(e.target.value)} />
            <input type="submit" className={styles.submit} value="enviar"/>
        </form>
    )
}

export default Form