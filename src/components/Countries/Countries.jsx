import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
//1. Load data
const Countries = () => {
    // State
    const [countries, setCountries] = useState([]);

    // Data load with useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,cca3,area')
            .then(res => res.json())
            .then(data =>setCountries(data))
    }, [])
    
    // For Mark Visit State
    const [visitedCountries, setVisitedCountries] = useState([]);

    // For Visited Country HandleEvent
    const handleVisitedCountry = (country) => {

        // Add element to existing array
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <hr />
            <hr />
            <div>
                <h3>Visited Country :{ visitedCountries.length}</h3>
                <ul>
                    { 
                        visitedCountries.map((country) => <li key={country.cca3}>{ country.name.common}</li>)
                    }


                </ul>
            </div>
            <hr />
            <hr />
            <div className="country_container">
                {
                    countries.map((country) => <Country
                        key={country.cca3}
                        country={country}
                
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;