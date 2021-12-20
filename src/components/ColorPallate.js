import React from 'react'

export default function ColorPallate(props) {
    const themes = {
        Success:"success",
        Danger:"danger",
        Warning:"warning",
        Info:"info"
    }
    return (
        <>
            <p>
                <a className={`btn btn-${props.mode}`} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Browse other themes
                </a>
            </p>
            <div className="collapse" id="collapseExample">
                {Object.entries(themes).map(([key,value])=>(
                    <div id={value} key={key} onClick={props.toggleMode} className={`border border-${props.mode==='dark'?'white':'dark'} card card-body bg-${value} text-dark`}>
                    {key}
                </div>
                ))}
            </div>
        </>
    )
}
