import {  NasaImageComponent} from "./nasaImageComponent";
import {useEffect, useState} from "react";

const API_URL = 'https://images-api.nasa.gov/search?q='
const DEFALT_SEARCH = 'webb';

//TODO:
// Part A - Make the app show one image (the first one) from the NASA Api
//    With title and date
// The way:
// 1. build a typescript model for (interface) for the props passed to NasaImage
// 2. (optional) build a typescript model for (interface) for data from the api
// 3. pass the interface to the child component
// ........
// ........
// Part B - Make the app show multiple image (the first one) from the NASA Api
// add keywords (an array in the api)
// .......
// api information : https://api.nasa.gov/#nasa-image-and-video-library
// ...
// The images are on the links with {href : string, render: 'image'}

export const DataLoaderComponent = (props: any) => {
    const [ searchResults, setSearchResults ] :any= useState([])
    useEffect(  () => {
       fetch(`${API_URL}${DEFALT_SEARCH}`).then(res=>(res.json().then(r=>  setSearchResults(r) )  ))
    });
    console.log(searchResults)
    return ( <NasaImageComponent></NasaImageComponent>  )
}
