import React from 'react'
import './LanguageComponent.scss'

export default function LanguageComponent(props) {

    return (
        <span className='language'>
            {props.text}
        </span>
    )
}