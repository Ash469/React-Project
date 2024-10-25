
import React,{useState} from 'react'


export default function TextFrom(props) {
    const handleUP=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLP=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClear=()=>{
        let newText="";
        setText(newText);
    }
    const handleSpace=()=>{
        let newText=text.replace(/\s+/g, ' ');
        setText(newText);
    }
    const handleSentence=()=>{
        let t=text.toLowerCase();
        let newText=t.replace(/(?:^|\.\s*)[a-z]/g, (match) => match.toUpperCase());
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
   
    const [text, setText]=useState('');
    return (
        <>
        <div className='container' style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUP}>Convet To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLP}>Convet To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Space</button>
            <button className="btn btn-primary mx-2" onClick={handleSentence}>Make Sentence</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            
           
        </div>
        <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} charcters</p>
            <p>{0.008*text.split(" ").length } Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
