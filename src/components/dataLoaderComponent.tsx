import {useEffect, useState} from "react";
import {NasaImage} from "../models/NasaImage";
import {NasaImageComponent} from "./nasaImage";
import {UserChoiceEnum} from "../models/userChoice.enum";


const API_URL = 'https://images-api.nasa.gov/search?q='
const DEFAULT_SEARCH = 'novas';


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
    searchResults.collection.items = searchResults.collection.items.filter(i=>i.links.length);
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


const searchResultsToImage = (searchResults: NasaSearchResults, choice: UserChoiceEnum): NasaImage => {
    searchResults = filterOnlyResultsWithImageLinks(searchResults)
    searchResults.collection.items = searchResults.collection.items.filter(i=>i.links);

    let itemNumber : number = 0;
    if (choice === UserChoiceEnum.Random){
     //   itemNumber=  Math.floor(Math.random() * searchResults.collection.items.length)
    } else if (choice === UserChoiceEnum.Last) {
      itemNumber = searchResults.collection.items.length - 1
    }
   console.log( searchResults.collection.items)
   console.log( itemNumber)
    const firstItem: Item = searchResults.collection.items[0];
    const imageModel: NasaImage = {
        date: new Date(firstItem.data[0].date_created),
        title: firstItem.data[0].title,
        imageUrl: firstItem.links[0].href
    }
    return imageModel
}

export const DataLoaderComponent = (props: any) => {
    const [searchResults, setSearchResults] = useState<NasaSearchResults>();
    const [userChoice, setUserChoice] = useState<UserChoiceEnum>(UserChoiceEnum.First);
    const userChoiceHandler = (choice: UserChoiceEnum) => setUserChoice(choice);

    useEffect(() => {
        fetch(`${API_URL}${DEFAULT_SEARCH}`).then(res => (res.json().then(r => setSearchResults(r))))
    },[]);
 const showImage : NasaImage | null =searchResults ? searchResultsToImage(searchResults, userChoice) : null

    return (showImage ?
        <NasaImageComponent clickHandler={userChoiceHandler} image={showImage}></NasaImageComponent> : null)
}

