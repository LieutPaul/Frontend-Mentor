import React from 'react'

export default function LanguageComponent(props) {
    const styles={
        "backgroundColor":"rgb(233,246,242)",
        "color":"rgb(108,156,150)",
        "padding":"5px 5px 5px 5px",
        "borderRadius":"3px",
        "marginRight":"15px",
        "wordWrap": "break-word",
        "display": "inline-block"
        // "marginTop" : '20px'
    };

    return (
        <span style={styles}>
            {props.text}
        </span>
    )
}