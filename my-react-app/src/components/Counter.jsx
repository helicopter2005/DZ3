import { useState, useCallback, memo, useEffect, useRef} from 'react'

export const Counter = memo(() => {
    const [count, setCount] = useState(0);
    const history = useRef([0]);

    useEffect(() => {
        if (count !== 0 || history.current.length > 1) {
            history.current.push(count);
        }
    }, [count]);
    const callBackHandleClick = useCallback(() => {
        console.log("Ререндер кнопки с колбеком");
    }, []);

    const noCallBackHandleClick = () => {
        console.log("Ререндер кнопки без колбека");
    }

    return (
        <>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <div>
            <p>Счётчик принимал значения: {history.current.join(', ')}</p>
        </div>
        <CheckRender callBackHandleClick={callBackHandleClick} />
        <CheckRenderNoCallBack noCallBackHandleClick={noCallBackHandleClick} />
        </>
    )
});

const CheckRender = memo( ({callBackHandleClick})  => {
    console.log("С callBack")
    return (
        <>
        <button onClick={callBackHandleClick}>Жум Жум</button>
        </>
    )
});

const CheckRenderNoCallBack = memo(({noCallBackHandleClick})  => {
    console.log("Без callBack")
    return (
        <>
        <button onClick={noCallBackHandleClick}>Тыкайте</button>
        </>
    )
});
