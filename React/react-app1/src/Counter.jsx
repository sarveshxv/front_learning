import { useState } from "react";

export default function Counter(){
    let [num, setNum] = useState(2);
    const incr = () => {
        console.log("CLicked,")
        setNum = 10;
    }
    // const decr = () => (num-=1)
    return (
        <div>
            <p>The Count is: {num}</p>
            {/* <button onClick={decr}>-</button> */}
            <button onClick={incr}>+</button>
        </div>
    )
}