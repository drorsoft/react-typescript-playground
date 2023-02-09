import {MyComponent} from "./myComponent";
import {useEffect, useState} from "react";

const API_URL = 'https://images-api.nasa.gov/search?q='
const DEFALT_SEARCH = 'webb'
export const FatherComponent = (props: any) => {
    const [ searchResults, setSearchResults ] :any= useState([])
    useEffect(  () => {
       fetch(`${API_URL}${DEFALT_SEARCH}`).then(res=>(res.json().then(r=>  setSearchResults(r) )  ))
    });
    console.log(searchResults)
    return (  <MyComponent></MyComponent>)
}
