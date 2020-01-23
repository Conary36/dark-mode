import {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(()=> {

        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        //Parse and return stored json or, if undefined, return initalValue

        const setValue = value => {
            //Save state
            setStoredValue(value);
            //Save to local storage
            window.localStorage.setItem(key, JSON.stringify(value));
        };

        
        return item ? JSON.parse(item) : initialValue;

    });

    return [storedValue];
}