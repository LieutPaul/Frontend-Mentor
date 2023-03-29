import React from 'react'
import './LanguageComponent.scss'

export default function LanguageComponent(props) {

    return (
        <span className='language' onClick={()=>{
            props.changeFilters((prev)=>{
                return [...prev,props.text];
            })
        }}>
            {props.text}
        </span>
    )
}