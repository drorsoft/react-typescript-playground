import {NasaImage} from "../models/NasaImage";
import React from "react";
import {UserChoiceEnum} from "../models/userChoice.enum";

const buttonStyle : React.CSSProperties = {

}
export interface NasaImageComponentProps {
    image : NasaImage;
    clickHandler : (choice:UserChoiceEnum) => void
}

export const NasaImageComponent = (props: NasaImageComponentProps) => {
    const image = props.image;
    const buttonClick = (choice:UserChoiceEnum) =>{
        props.clickHandler(choice)
    }

    return (

        <div style={{display: 'flex', flexDirection : 'column'}}>
            <>
                <div id={'buttons-container'}>
                    <button style={{...buttonStyle}} onClick={()=>buttonClick(UserChoiceEnum.First)}>First</button>
                    <button style={{...buttonStyle}} onClick={()=>buttonClick(UserChoiceEnum.Random)}>Random</button>
                    <button style={{...buttonStyle}} onClick={()=>buttonClick(UserChoiceEnum.Last)}>Last</button>

                </div>
                <h3>  {image.title}</h3>
                <img src={image.imageUrl} alt={`${image.title}`}/>
               <h4> {image.date.toISOString()}</h4>
            </>
        </div>

    )
}
