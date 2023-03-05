
import {useEffect, useState} from "react";
import {NasaImage} from "../models/NasaImage";
import {NasaImageComponent} from "./nasaImage";


const API_URL = 'https://images-api.nasa.gov/search?q='
const DEFAULT_SEARCH = 'nova';


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


const filterOnlyResultsWithImageLinks = (searchResults: NasaSearchResults) : NasaSearchResults=> {
    searchResults.collection.items = searchResults.collection.items.filter(i=>i.links?.length);
    return searchResults
}


//TODO (Exercise 2):
// Part A:
// Add 3 buttons to the nasaImage component, that request different images:
// 1. The first image
// 2. The last image
// 3. A random image
// -----------
// Part B:
// Build a Generic function that takes an object with a (date : Date) property,
// clones it and returns the object with a formatted date property



const searchResultsToImage = (searchResults: NasaSearchResults): NasaImage => {
    searchResults = filterOnlyResultsWithImageLinks(searchResults)

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
        fetch(`${API_URL}${DEFAULT_SEARCH}`).then(res => (res.json().then(r => setSearchResults(r))))
    },[]);


    return (searchResults ? <NasaImageComponent {...searchResultsToImage(searchResults)}></NasaImageComponent> : null)
}

