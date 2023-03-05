import {NasaImage} from "../models/NasaImage";
import React from "react";
import {UserChoiceEnum} from "../models/userChoice.enum";

const buttonStyle: React.CSSProperties = {
    all: 'unset',
    margin: '20px',
    padding: '8px 20px',
    fontSize : '18px',
    cursor: 'pointer',
    background : '#fd0083',
    color: 'black',
    borderRadius : '10px'
}

export interface NasaImageComponentProps {
    image: NasaImage;
    clickHandler: (choice: UserChoiceEnum) => void
}

function cloneAndAddFormatDate  <T extends {date : Date}>(obj : T)  {
    const formatDate : string = obj.date.toLocaleDateString('IL', {formatMatcher : 'basic'})
    return {...obj,formatDate}
}

export const NasaImageComponent = (props: NasaImageComponentProps) => {
    const image = cloneAndAddFormatDate (props.image);
    const buttonClick = (choice: UserChoiceEnum) => {
        props.clickHandler(choice)
    }

    return (

        <div style={{display: 'flex', flexDirection: 'column'}}>
            <>
                <div id={'buttons-container'} style={{display: 'flex', justifyContent: 'space-around'}}>
                    <button style={{...buttonStyle}} onClick={() => buttonClick(UserChoiceEnum.First)}>First</button>
                    <button style={{...buttonStyle}} onClick={() => buttonClick(UserChoiceEnum.Random)}>Random</button>
                    <button style={{...buttonStyle}} onClick={() => buttonClick(UserChoiceEnum.Last)}>Last</button>

                </div>
                <h3>  {image.title}</h3>
                <img src={image.imageUrl} alt={`${image.title}`}/>
                <h4> {image.date.toISOString()}</h4>
            </>
        </div>

    )
}
