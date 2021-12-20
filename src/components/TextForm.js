import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to upper case.","success");
    }
    const handleLowerCaseClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lower case.","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text cleared.","success");
    }
    const handleReverseClick = ()=>{
        setText(text.split('').reverse().join(''));
        props.showAlert("Text reversed.","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied.","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Text trimmed.","success");
    }
    const [text,setText]=useState("");
    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.taMode,color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className={`btn btn-${props.mode} bg-${props.mode} mx-2`} onClick={handleUpperCaseClick} >Convert to UpperCase</button>
            <button className={`btn btn-${props.mode} bg-${props.mode} mx-2`} onClick={handleLowerCaseClick} >Convert to LowerCase</button>
            <button className={`btn btn-${props.mode} bg-${props.mode} mx-2`} onClick={handleReverseClick} >Reverse text</button>
            <button className={`btn btn-${props.mode} bg-${props.mode} mx-2`} onClick={handleCopy} >Copy text</button>
            <button className={`btn btn-${props.mode} bg-${props.mode} mx-2`} onClick={handleExtraSpaces} >Remove extra spaces</button>
            <button className={`btn btn-${props.mode} bg-${props.mode} mx-2`} onClick={handleClearClick} >Clear text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(' ').filter(n=>n).length} words, {text.length} characters</p>
            <p>{text.split(' ').filter(n=>n).length * 0.008} Minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here."}</p>
        </div>
        </>
    )
}
