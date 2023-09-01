import React from 'react';

/*  
    React.memo(com)会将组件定义为一个纯组件，不会受到外界的干扰
        tip: 当使用了 memo 的组件，在接收了一个引用类型的时候，此时就需要将引用类型通过useMemo或者useCallback进行处理一下
    React.useCallback(cb,[])能将函数缓存起来，只有在依赖项变化的时候，才会重新走cb函数，更新值
    React.useMemo(cb,[])能将变量缓存起来，只有在依赖项变化的时候，才会重新走cb函数，更新值，
        tip：useCallback能做的事，useMemo也能做，只是在处理函数的时候，useCallback是直接将需要缓存的函数传递进来，而useMemo是通过一个函数，返回我们需要缓存的函数
        function fn(){
            console.log(111)
        }
        demo: useMemo(()=>fn,[])
              useCallback(fn,[])
*/

const PurePrimeCalculator = React.memo(PrimeCalculator)

function PrimeCalculator({ obj }) {
    const [selectedNum, setSelectedNum] = React.useState(100);
    /* const allPrimes = React.useMemo(() => {
        console.log(11111111)
        const allPrimes = [];
        for (let counter = 2; counter < selectedNum; counter++) {
            if (isPrime(counter)) {
                allPrimes.push(counter);
            }
        }
        return allPrimes
    }, [selectedNum]) */
    console.log(2222222)
    const allPrimes = [];
    for (let counter = 2; counter < selectedNum; counter++) {
        if (isPrime(counter)) {
            allPrimes.push(counter);
        }
    }
    const testFn = () => {
        console.log('进行计算')
        return 1
    }

    return (
        <>
            <form>
                <label htmlFor="num" onClick={testFn}>Your number:{obj.name}</label>
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

function Clock({ time }) {
    return (
        <p className="clock">
            {time}
        </p>
    );
}

function App() {
    const time = useTime();
    const obj = React.useMemo(() => {
        return {
            name: 'zs'
        }
    }, [])
    return (
        <>
            <Clock time={time} />
            <PurePrimeCalculator obj={obj} />
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