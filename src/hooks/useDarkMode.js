import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

export const useDarkMode = () =>  {

    const [someValue, setSomeValue] = useLocalStorage(key)

        
        useEffect(()=>{

            if(someValue ){
                window.document.body.classList.add('dark-mode');
            }else{
                window.document.body.classList.remove('dark-mode');
            }
            
        })

        return [someValue, setSomeValue];

}