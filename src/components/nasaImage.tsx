import {NasaImage} from "../models/NasaImage";


export const NasaImageComponent = (props: NasaImage) => {
    return (
        <div>
            <>
                <h3>  {props.title}</h3>
                <img src={props.imageUrl}/>
                {props.date}
            </>
        </div>

    )
}
