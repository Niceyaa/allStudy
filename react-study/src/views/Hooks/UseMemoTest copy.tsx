import React, { useMemo } from 'react';

function App() {
    const [selectedNum, setSelectedNum] = React.useState(100);

    // `time` is a state variable that changes once per second,
    // so that it's always in sync with the current time.
    const time = useTime();

    // Calculate all of the prime numbers.
    // (Unchanged from the earlier example.)
    const allPrimes: number[] = [];

    useMemo(() => {
        for (let counter = 2; counter < selectedNum; counter++) {
            console.log('111111')
            if (isPrime(counter)) {
                allPrimes.push(counter);
            }
        }
    }, [selectedNum])



    return (
        <>
            <p className="clock">
                {time}
            </p>
            <form>
                <label htmlFor="num">Your number:</label>
                <input
                    type="number"
                    value={selectedNum}
                    onChange={(event) => {
                        // To prevent computers from exploding,
                        // we'll max out at 100k
                        let num = Math.min(100_000, Number(event.target.value));

                        setSelectedNum(num);
                    }}
                />
            </form>
            <p>
                There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
                {' '}
                <span className="prime-list">
                    {allPrimes.join(', ')}
                </span>
            </p>
        </>
    );
}

function useTime() {
    const [time, setTime] = React.useState(new Date().getSeconds());

    React.useEffect(() => {
        const intervalId = window.setInterval(() => {
            setTime(new Date().getSeconds());
        }, 1000);

        return () => {
            window.clearInterval(intervalId);
        }
    }, []);

    return time;
}

function isPrime(n: number) {
    const max = Math.ceil(Math.sqrt(n));

    if (n === 2) {
        return true;
    }

    for (let counter = 2; counter <= max; counter++) {
        if (n % counter === 0) {
            return false;
        }
    }

    return true;
}

export default App;