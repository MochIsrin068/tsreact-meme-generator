import * as React from 'react'

// Interface Form 
interface FormInterface {
    isMemeGenerated : boolean
    textBottom : string
    textTop : string
    handleImageChange : () => void
    handleImageInputChange : (event : React.ChangeEvent) => void
    handleInputChange : (event : React.ChangeEvent) => void
    handleMemeGeneration : () => void
    handleMemeReset : () => void
}

// Main Components
const Form = (props : FormInterface) => {
    return (
        <div className="form">
            <div className="form__inputs">
                {/* Top */}
                <input 
                    name="text-top"
                    placeholder="Text Top"
                    type="text"
                    value={props.textTop}
                    onChange={props.handleInputChange}
                />

                {/* Bottom */}
                <input 
                    name="text-bottom"
                    placeholder="Text Bottom"
                    type="text"
                    value={props.textBottom}
                    onChange={props.handleInputChange}
                />
            </div>

            <div className="form__btns">
                {/* Chnage Image */}
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={props.handleImageChange}
                >
                    Change Image
                </button>

                {/* Load Image From Youtr Disl */}
                <label className="btn btn-primary">
                    Load Image
                    <input id="fileInput" name="fileInput" type="file" accept=".jpg, .jpeg, .png" onChange={props.handleImageInputChange} hidden/>
                </label>

                {/* Button to Generate Image Randomly */}
                <button 
                    className="btn btn-primary"
                    type="button"
                    onClick={props.handleMemeGeneration}
                >
                    Generate Meme
                </button>

                {/* Buttom To Remove the Meme Image from the DOM */}
                {
                    props.isMemeGenerated && <button className="btn btn-danger" type="button" onClick={props.handleMemeReset}>
                        Reset
                    </button>
                }
            </div>
        </div>
    )
}

export default Form

