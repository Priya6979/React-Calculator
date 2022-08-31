import React,{useState} from 'react'
function Calci() {

    const [result,setResult] = useState("");

    const clickHandler=(event)=>{
       setResult(result.concat(event.target.value))
    }

    const allClear=()=>{
        setResult("");
    }

    const answer=()=>{
        setResult(eval(result).toString());
    }
    
    const numDelete=()=>{
        setResult(result.slice(0, result.length-1));
    }

  return (
    <div className="calc">
        <input type="text" placeholder="0" id="output" value={result}/>
        <input type="button" value="AC" className="span-two"onClick={allClear}/>
        <input type="button" value="DEL" className="button" onClick={numDelete} />
        <input type="button" value="+" className='button' onClick={clickHandler}/>
        <input type="button" value="9" className='button' onClick={clickHandler}/>
        <input type="button" value="8" className='button' onClick={clickHandler}/>
        <input type="button" value="7" className='button' onClick={clickHandler}/>
        <input type="button" value="-" className='button' onClick={clickHandler}/>
        <input type="button" value="6" className='button' onClick={clickHandler}/>
        <input type="button" value="5" className='button' onClick={clickHandler}/>
        <input type="button" value="4" className='button' onClick={clickHandler}/>
        <input type="button" value="*" className='button' onClick={clickHandler}/>
        <input type="button" value="3" className='button' onClick={clickHandler}/>
        <input type="button" value="2" className='button' onClick={clickHandler}/>
        <input type="button" value="1" className='button' onClick={clickHandler}/>
        <input type="button" value="/" className='button' onClick={clickHandler}/>
        <input type="button" value="." className='button' onClick={clickHandler}/>
        <input type="button" value="0" className='button' onClick={clickHandler}/>
        <input type="button" value="%" className='button' onClick={clickHandler}/>
        <input type="button" value="=" className="button" onClick={answer}/>
    </div>
  )
}

export default Calci
