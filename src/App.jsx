import { useState } from 'react';
import './App.scss';

export default function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ["/", "*", "-", "+", "."];
  let isClicked = false;


  const calculate = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  const equals = () => {
    setCalc(eval(calc).toString());
    setResult('');
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  return (
    <main>
      <div className='calc'>
        <div className="result">
          {result ? <span>({result})</span> : ""}
          <p>{calc || '0'}</p>
        </div>
        <div className='operators'>
          <div className='outline'><button onClick={() => { setCalc(''), setResult('') }}>CE</button></div>
          <div className='outline'><button onClick={() => { calculate('/') }}>/</button></div>
          <div className='outline'><button onClick={() => { calculate('*') }}>*</button></div>
          <div className='outline minus'><button onClick={() => { calculate('-') }}>-</button></div>
          <div className='outline'><button onClick={() => { calculate('7') }}>7</button></div>
          <div className='outline'><button onClick={() => { calculate('8') }}>8</button></div>
          <div className='outline'><button onClick={() => { calculate('9') }}>9</button></div>
          <div className='outline'><button onClick={() => { calculate('4') }}>4</button></div>
          <div className='outline'><button onClick={() => { calculate('5') }}>5</button></div>
          <div className='outline'><button onClick={() => { calculate('6') }}>6</button></div>
          <div className='outline plus'><button onClick={() => { calculate('+') }}>+</button></div>
          <div className='outline'><button onClick={() => { calculate('1') }}>1</button></div>
          <div className='outline'><button onClick={() => { calculate('2') }}>2</button></div>
          <div className='outline'><button onClick={() => { calculate('3') }}>3</button></div>
          <div className='outline'><button onClick={() => { calculate('.') }}>.</button></div>
          <div className='outline'><button onClick={() => { calculate('0') }}>0</button></div>
          <div className='outline'><button onClick={() => { deleteLast() }}>Del</button></div>
          <div className='outline equal'><button onClick={() => { equals() }}>=</button></div>
        </div>
      </div>
    </main>
  )
};
