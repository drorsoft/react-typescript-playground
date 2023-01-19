import {Developer} from "../models/developer";


interface MyComponentProps {
   name: string;
   developer : Developer
}

export const MyComponent = (props: MyComponentProps) => {
    return (<div> My component Renders!</div>)
}
