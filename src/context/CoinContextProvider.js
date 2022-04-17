import React , {useState , useEffect, createContext} from 'react';

import { getData } from '../services/api';


export const coinContext = createContext()

const CoinContextProvider = ({children}) => {

    const [coin , setCoin] = useState([])

    useEffect(()=> {
        const fetchAPI = async() => {
            setCoin(await getData())
        }

        fetchAPI()
    }, [])
    console.log(coin);
    return (
        <coinContext.Provider value={coin}>
            {children}
        </coinContext.Provider>
    );
};

export default CoinContextProvider;