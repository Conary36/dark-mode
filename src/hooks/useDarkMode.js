import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue, key) =>  {

    const [someValue, setSomeValue] = useLocalStorage('toggle', initialValue);


        useEffect(()=>{

            if(someValue){
                window.document.body.classList.add('dark-mode');
            }else{
                window.document.body.classList.remove('dark-mode');
            }  
        }, [someValue])

        return [someValue, setSomeValue];

}