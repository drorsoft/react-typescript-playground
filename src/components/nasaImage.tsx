import {NasaImage} from "../models/NasaImage";


export const NasaImageComponent = (props: NasaImage) => {
    return (
        <div style={{display: 'flex', flexDirection : 'column'}}>
            <>
                <h3>  {props.title}</h3>
                <img src={props.imageUrl}/>
               <h4> {props.date.toISOString()}</h4>
            </>
        </div>

    )
}
