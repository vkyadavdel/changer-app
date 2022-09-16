import React,{useState} from 'react'

const TextForm = (props) => {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase','success')
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lowercase','success')
    }
    const handleOnChange=(event)=>{
        // console.log("handle on change")
        setText(event.target.value)

    }
    const handleClear=()=>{
      let newText=""
      setText(newText)
    }
    const handleCopy=()=>{
      var text=document.getElementById('myBox')
      text.select();
      // text.setSelectionRange(0,9999)
      navigator.clipboard.writeText(text.value)
      props.showAlert('Copied to clipboard','success')
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert('Extra spaces has been removed','success')
    }
  const [text,setText]=useState('')
//   setText("Enter your text here")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange}
   style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
   id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convet to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convet to LowerCase</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy your text</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className='btn btn-primary mx-2' onClick={handleClear}>Clear All Text</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length-0.008} minutes will be Required to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter some text to preview'}</p>
    </div>
    </>
  )
}

export default TextForm
