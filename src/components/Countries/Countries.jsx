import { useEffect, useState } from "react";


//1. Load data
const Countries = () => {
    // State
    const [countries, setCountries] = useState([]);

    // Data load with useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region')
            .then(res => res.json())
            .then(data =>setCountries(data))
    },[])
    return (
        <div>
            <h2>Countries:{countries.length}</h2>
        </div>
    );
};

export default Countries;