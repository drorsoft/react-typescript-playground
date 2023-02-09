import {MyComponent} from "./myComponent";


export const FatherComponent = (props: any) => {
    const propsAsJson = JSON.stringify(props,null, "  ")
    return (  <MyComponent></MyComponent>)
}
