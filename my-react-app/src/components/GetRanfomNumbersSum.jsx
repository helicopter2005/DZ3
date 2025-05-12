import { useState, useEffect, useMemo } from "react";

export const GetRandomNumbersSum = () =>{
    const [time, setTime] = useState(new Date());
    const [numbers, setNumbers] = useState(generateRandomNumbers());

    useEffect(() => {
        const interval = setInterval(() => {
        regenerateNumbers();
        setTime(new Date());
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    
    const sum = useMemo(() => {
        console.log("Пересчитана сумма")
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    function generateRandomNumbers() {
        return Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1);
    }

    const regenerateNumbers = () => {
        setNumbers(generateRandomNumbers());
    };

    return (
        <div>
        <p>Случайные числа: {numbers.join(', ')}</p>
        <h3>Сумма: {sum}</h3>
        <button onClick={regenerateNumbers}>Сгенерировать новые числа</button>
        </div>
    );
};