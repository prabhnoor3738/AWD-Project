import React, {useState} from 'react'
// import './buttonss.css'

//we can use shift+tab to back space the selected code
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upaarcase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase", "success")
    }
    const handleOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }

    const handleLowClick = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Text converted to LowerCase", "success")
    }

    const handleClear = ()=>{
        setText("");
        props.showAlert("Text Cleared", "success")
    }    

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard", "success")
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed from the Text", "success")
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color : props.mode==="light"?"gray":"white"}}>

        <div>
            <h1>{props.headding}</h1>
            <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==="dark"?"gray":"white", color: props.mode==="light"?"gray":"white"}} id="myBox" rows="8"></textarea>
            </div>
            <div className="buttons">
            <button className="btn btn-primary mx-1" onClick={handleUpClick} id="btn1">Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick} id="btn2">Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear} id="btn2">Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} id="btn2">Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} id="btn2">Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
        </div>
        </div>
        </>
    )
}
