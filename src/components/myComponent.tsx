import {MyModel} from "../models/myModel";


interface MyComponentProps {
   name: string;
   model : MyModel
}

export const MyComponent = (props: MyComponentProps) => {
    return (<div> My component</div>)
}
