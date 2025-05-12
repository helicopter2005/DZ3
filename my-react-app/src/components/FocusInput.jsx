import { useState, useEffect, useRef } from "react";

export const FocusAndPreviousInput = () => {
    const [value, setValue] = useState('');
    const prevValueRef = useRef('');
    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    }, []);
  
    useEffect(() => {
      prevValueRef.current = value;
    }, [value]);
  
    return (
      <div>
        <h2>Фокус и Предыдущее значение</h2>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Введите что-то"
        />
        <p>Текущее значение: {value}</p>
        <p>Предыдущее значение: {prevValueRef.current}</p>
      </div>
    );
}