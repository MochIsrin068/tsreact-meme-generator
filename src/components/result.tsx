import * as React from 'react'

// Inteface Results
interface ResultInteface {
    resultContainerRef : React.RefObject<any>
}

// Result Componet
const Result = (props : ResultInteface) => {
    return (
        <div ref={props.resultContainerRef} className="result"></div>
    )
}

export default Result