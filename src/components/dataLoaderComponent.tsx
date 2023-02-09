
import {useEffect, useState} from "react";
import {NasaImage} from "../models/NasaImage";
import {NasaImageComponent} from "./nasaImage";

const API_URL = 'https://images-api.nasa.gov/search?q='
const DEFALT_SEARCH = 'webb';

interface Item {
    data: {
        title: string;
        date_created: string;
    }[];
    links: { href: string; render: string }[]
}

interface NasaSearchResults {
    collection: {
        items: Item[];
    };
}

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

const searchResultsToImage = (searchResults: NasaSearchResults): NasaImage => {
    const firstItem: Item = searchResults.collection.items[0];
    const imageModel: NasaImage = {
        date: new Date(firstItem.data[0].date_created),
        title: firstItem.data[0].title,
        imageUrl: firstItem.links[0].href
    }
    return imageModel

}

export const DataLoaderComponent = (props: any) => {
    const [searchResults, setSearchResults] = useState<NasaSearchResults>()
    useEffect(() => {
        fetch(`${API_URL}${DEFALT_SEARCH}`).then(res => (res.json().then(r => setSearchResults(r))))
    });


    return (searchResults ? <NasaImageComponent {...searchResultsToImage(searchResults)}></NasaImageComponent> : null)
}

