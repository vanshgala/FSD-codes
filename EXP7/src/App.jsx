 import React, { useState, useEffect } from "react";
let globalCounter = 0;
function CounterComponent() {
const [localCount, setLocalCount] = useState(0);
useEffect(() => {
globalCounter = localCount;
console.log("useEffect triggered");
console.log("Local Count:", localCount);
console.log("Global Counter:", globalCounter);
}, [localCount]);
const handleIncrement = () => {
setLocalCount(localCount + 1);
};
const handleDecrement = () => {
setLocalCount(localCount > 0 ? localCount - 1 : 0);
};
return (
<div>
<div>
<h2>Local Count: {localCount}</h2>
<h3>Global Counter: {globalCounter}</h3>
<div>
<button onClick={handleIncrement}>
Increment
</button>
<button
onClick={handleDecrement}
disabled={localCount === 0}
>
Decrement
</button>
</div>
</div>
</div>
);
}
export default CounterComponent;