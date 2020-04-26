import * as React from 'react'

// InterFace For Content
interface ContentInterface {
    activeImage : string
    contentContainerRef : React.RefObject<any>
    textBottom : string
    textTop : string
}

// Content Components
const Content = (props : ContentInterface) => {
    return (
        <div className="content" ref={props.contentContainerRef}>
            {/* Image Preview */}
            <img src={props.activeImage} alt="Meme Image"/>
            {/* Text Top */}
            <h1 className="content__top">{props.textTop}</h1>
            {/* Text Bottom */}
            <h1 className="content__bottom">{props.textBottom}</h1>
        </div>
    )
}

export default Content