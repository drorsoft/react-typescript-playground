
export const MyComponent = (props: any) => {
    const propsAsJson = JSON.stringify(props,null, "  ")
    return (  <div className={'json-display'}>
        <pre>{propsAsJson}</pre>
    </div> )
}
