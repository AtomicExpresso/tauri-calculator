import React, {useState} from "react";

function Calculator(){
  const [count, setCount] = useState([]);
  

  function calculate(nums){
    switch(nums){
      case nums:
        setCount([...count, nums]) 
      break;
    }
  }

  const modifyNum = mod => {
    switch(mod){
      case 'backspace':
        setCount(prevState => prevState.slice(0, -1))
      break;
      case 'clear':
        setCount([...count.slice(0, 0)]) 
      break;
    }
  }

  const finalOutput = () => {

  }

  return(
    <div className="calc-container">
      <div className="calc-output">
        <h1>{count}</h1>
      </div>
      <div className="calc-row-1">
          <li><button onClick={() => modifyNum('clear')}>C</button></li>
          <li><button onClick={() => calculate('/')}>/</button></li>
          <li><button onClick={() => calculate('%')}>%</button></li>
          <li><button onClick={() => modifyNum('backspace')}>Back</button></li>
        </div>
      <div className="calc-btn">
        <div className="calc-col-1">
        <ul>
          <li><button onClick={() => calculate(7)}>7</button></li>
          <li><button onClick={() => calculate(8)}>8</button></li>
          <li><button onClick={() => calculate(9)}>9</button></li>
        </ul>
        <ul>
          <li><button onClick={() => calculate(4)}>4</button></li>
          <li><button onClick={() => calculate(5)}>5</button></li>
          <li><button onClick={() => calculate(6)}>6</button></li>
        </ul>
        <ul>
          <li><button onClick={() => calculate(1)}>1</button></li>
          <li><button onClick={() => calculate(2)}>2</button></li>
          <li><button onClick={() => calculate(3)}>3</button></li>
        </ul>
        <ul>
          <li><button>+/-</button></li>
          <li><button onClick={() => calculate(0)}>0</button></li>
          <li><button onClick={() => calculate('.')}>.</button></li>
        </ul>
        </div>
        <div className="calc-col-2">
        <ul>
          <li><button onClick={() => calculate('*')}>x</button></li>
          <li><button onClick={() => calculate('-')}>-</button></li>
          <li><button onClick={() => calculate('+')}>+</button></li>
          <li><button onClick={() => finalOutput()}>=</button></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export {Calculator};