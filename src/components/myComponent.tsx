import {Developer} from "../models/developer";


interface MyComponentProps {
   name: string;
   developer : Developer
}

export const MyComponent = (props: MyComponentProps) => {
    const propsAsJson = JSON.stringify(props,null, "  ")
    return (  <div className={'json-display'}>
        <pre>{propsAsJson}</pre>
    </div> )
}



