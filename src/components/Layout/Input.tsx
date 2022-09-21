import React, { useEffect, useRef } from 'react';
import { SyntheticEvent, useContext, useState } from 'react';
import { APIContext } from '../../context/APIContext';

import './Input.scss';

type InputProps = {
    type: string,
    className: string
}

const Input = ({ type, className }: InputProps) => {
    // ref
    const inputRef = useRef<HTMLInputElement>(null);
    // local state
    const [topic, setTopic] = useState('');
    // context
    const { results, getResults, setSearchTopic, searchTopic } = useContext(APIContext);

    // internal methods
    const handleSetTopic = (e: SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        // case study - why does state is behid target.value with 1 char??
        setTopic(target.value);

    }
    const onSearchTopic = () => {
        getResults(topic);
    }

    const handleSearchSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearchTopic(topic)
    };

    useEffect(() => {
        if (inputRef.current && results && results.length > 0) {
            console.log('topic', topic);
            inputRef.current.value = searchTopic;
        }
    }
        , [results, inputRef])


    return (
        <form onSubmit={handleSearchSubmit} className={className}>
            <input type={type} onChange={handleSetTopic} ref={inputRef} />
            <button onClick={onSearchTopic}>
                <i className="fas fa-magnifying-glass"></i>
            </button>
        </form>
    )
}
export default Input;