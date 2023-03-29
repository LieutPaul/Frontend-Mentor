import React from 'react'
import './LanguageComponent.scss'

export default function LanguageComponent(props) {

    return (
        <span className={`${props.role==="role" ? "language" : "filter"}`} onClick={()=>{
            if(props.role==="role"){
                if(props.filters.includes(props.text)===false){
                    props.changeFilters((prev)=>{
                        return [...prev,props.text];
                    })
                }
            }else{
                props.changeFilters(prev => {
                    return prev.filter(prevValue => {
                        return prevValue !== props.text;
                    })
                })
            }
            
        }}>
            {props.text}
        </span>
    )
}