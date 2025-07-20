import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
//1. Load data
const Countries = () => {
    // State
    const [countries, setCountries] = useState([]);

    // Data load with useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags')
            .then(res => res.json())
            .then(data =>setCountries(data))
    },[])
    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <div className="country_container">
                {
                    countries.map((country) => <Country key={country.cca3} country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;