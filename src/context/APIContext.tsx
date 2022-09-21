import React, { FC } from 'react';
import { useState } from 'react';
import { Children } from './genericTypes';
const API_KEY = 'e53224ed56057e6a4b9d717d82daa86b3e3df654ad57cb498a6a3ad41cbebaa6';
const API_REQUEST = `https://serpapi.com/search?api_key=${API_KEY}&engine=google_scholar&q=`;

type ResultsMetadataOptions = {
    time_taken_displayed: number,
    total_results: number,
    organic_results_state: string,
    query_displayed: string
}

type APIContextProps = {
    results: any,
    getResults: (inputData: string) => void,
    setResults: React.Dispatch<React.SetStateAction<never[]>>,
    resultsSearchMetadatas: any,
    setSearchTopic: React.Dispatch<React.SetStateAction<string>>,
    searchTopic: string,
}



export const APIContext = React.createContext<APIContextProps>({
    results: [],
    getResults: () => { },
    setResults: () => { },
    resultsSearchMetadatas: {
        time_taken_displayed: 0,
        total_results: 0,
        organic_results_state: '',
        query_displayed: ''
    },
    setSearchTopic: () => { },
    searchTopic: ''
});

const APIContextProvider: FC<Children> = ({ children }) => {
    const [searchTopic, setSearchTopic] = useState('')
    const [results, setResults] = useState([]);
    const [resultsSearchMetadatas, setResultsSearchMetadatas] = useState({})

    const getResults = (inputData: string) => {
        fetch(`${API_REQUEST}${inputData}`)
            .then(data => data.json())
            .then(data => {
                console.log('data', data);

                const searchInformation = data.search_information;
                const { organic_results } = data;
                const results = organic_results.map((item: any) => {
                    const inlineLinks = item.inline_links;
                    const authorsInfo = item.publication_info;
                    const link = item.link;
                    console.log('link', link);

                    // place the authors details here also
                    let authors;
                    if (authorsInfo.summary) {
                        authors = authorsInfo.summary;
                    } else {
                        authors = authors;
                    }
                    const { cited_by: { total: citedByTotal }, versions } = inlineLinks;
                    return {
                        ...item,
                        citedByTotal,
                        ...versions,
                        ...searchInformation,
                        authors,
                        link,
                    }
                });
                console.log('results', results);
                setResults(results);
                setResultsSearchMetadatas({
                    ...searchInformation,
                })
            });
    }
    const value = {
        results,
        getResults,
        setResults,
        setSearchTopic,
        searchTopic,
        resultsSearchMetadatas
    }
    return <APIContext.Provider value={value}>{children}</APIContext.Provider>
}

export default APIContextProvider;