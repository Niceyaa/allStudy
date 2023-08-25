import { useEffect, useState } from "react";
import styles from './Counter.module.less'

export default () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('useEffect')
    }, [])
    console.log('1111111')
    return (
        <div className={styles.counter}>
            <button onClick={() => setCount(+1)}>+1</button>
            <div>{count}</div>
        </div>
    )
}