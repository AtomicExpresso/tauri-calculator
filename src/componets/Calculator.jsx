import React, {useState} from "react";

function Calculator(){
  const [count, setCount] = useState([]);
  
  //Adds the button input to the output display
  function calculate(nums, thisOp){
    switch(nums){
      case nums:
        setCount([...count, nums]) 
      break;
      default:
        return
      break;
    }

    switch(thisOp){
      case '+':
        count.includes("+") ? finalOutput("add") : null
      break;
      case '-':
        count.includes("-") ? finalOutput("sub") : null
      break;
      case '*':
        count.includes("*") ? finalOutput("multi") : null
      break;
      case '/':
        count.includes("/") ? finalOutput("divide") : null
      break;
      case '%':
        count.includes("%") ? finalOutput("percent") : null
      break;
      default:
        return
      break;
    }
  }

  //Modifys the output box, for 'Clear' or 'Back space'
  const modifyNum = mod => {
    switch(mod){
      case 'backspace':
        setCount(prevState => prevState.slice(0, -1))
      break;
      case 'clear':
        setCount([]) 
      break;
      default:
        return
      break;
    }
  }

  //Calculates the result based on the numbers in the array and which operator you used
  const finalOutput = (op) => {
    let index;
    let opindex;
    let result;

    switch (op) {
      case "add":
        opindex = count.indexOf("+");
      break;
      case "sub":
        opindex = count.indexOf("-");
      break;
      case "multi":
        opindex = count.indexOf("*");
      break;
      case "divide":
        opindex = count.indexOf("/");
      break;
      case "percent":
        opindex = count.indexOf("%");
      break;
      default:
        return
      break;
    }

    const leftArray = count.slice(0, opindex);
    const rightArray = count.slice(opindex + 1);

    const left = parseFloat(leftArray.join(""));
    const right = parseFloat(rightArray.join(""));  

    index = count.indexOf(`${op}`);
    count.splice(index, 1, null);
    //Gives you the result
    switch(op){
      case "add":
        result = left + right
      break;
      case "sub":
        result = left - right
      break;
      case "multi":
        result = left * right
      break;
      case "divide":
        result = left / right
      break;
      case "percent":
        result = `${left / right * 100}%`
      break;
      default:
        return
      break;
    }
    //displays the result in the output display
    setCount([result])
  }

  const handleEqualBtn = () => {
    if(count.includes("+")){
      finalOutput("add")
    }else if (count.includes("-")){
      finalOutput("sub")
    }else if (count.includes("*")){
      finalOutput("multi")
    }else if (count.includes("/")){
      finalOutput("divide")
    }else if (count.includes("%")){
      finalOutput("percent")
    } else {
      return;
    }
  }

  return(
    <div className="calc-container">
      <div className="calc-output">
        <h1>{count}</h1>
      </div>
      <div className="calc-row-1">
          <li><button onClick={() => modifyNum('clear')}>C</button></li>
          <li><button onClick={() => calculate('/', "/")}>/</button></li>
          <li><button onClick={() => calculate('%', "%")}>%</button></li>
          <li><button id='backbtn' onClick={() => modifyNum('backspace')}>Back</button></li>
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
        </div>
        <div className="calc-col-2">
        <ul>
          <li><button onClick={() => calculate('*', "*")}>*</button></li>
          <li><button onClick={() => calculate('-', "-")}>-</button></li>
          <li><button onClick={() => calculate('+', "+")}>+</button></li>
        </ul>
      </div>
      </div>
      <div className="calc-row-2">
        <ul>
          <li><button onClick={() => calculate(0)}>0</button></li>
          <li><button onClick={() => calculate('.', ".")}>.</button></li>
          <li><button id='equalbtn' onClick={() => handleEqualBtn()}>=</button></li>
        </ul>
      </div>
    </div>
  )
}

export {Calculator};