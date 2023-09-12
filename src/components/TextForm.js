import React, { useState } from 'react'


function TextForm(props) {


    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted into Uppercase !","success");

    };
    const handlespace = () => {
        let newString;
        newString = text.replace(/\s+/g,' '); // "thiscontainsspaces"
        newString = text.replace(/ +/g,' ');  //"thiscontainsspaces"
        setText(newString);
        props.showAlert("Extra Spaces Removed!","success");

    };
    const handlecopy = () => {
        // Get the text field
        var copyText = document.getElementById("mybox");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Tect Copied TO your ClipBoard !","success");

    };
    const handleseClick = () => {
        var sentence = text.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }

        setText(sentence.join(" "));
        props.showAlert("Text Are Beautified !","success");

    };

    const handleclear = () => {
        setText("");
        props.showAlert("Text are Cleared !","success");

    };
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted in LowerCase !","success");

    };
    const handleOnchange = (event) => {

        setText(event.target.value)
    }
    const [text, setText] = useState("");

    return (
        <>


            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3" >
                    <label className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick} >Convert to UpperCase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick} >Convert to LowerCase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleclear} >Clear the Text </button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleseClick} >beautify</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handlecopy} >copy</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handlespace} >Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary!</h2>
                <p>{text.split(" ").length} words and {text.length} characters !</p>
                <p>{0.008 * text.split(" ").length} to Read </p>
                <h2>PreView </h2>
                <p>{text.length > 0 ? text : "Enter Somthing To Preview Hear"}</p>

            </div>

        </>
    )
}

export default TextForm