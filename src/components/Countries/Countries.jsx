import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

//1. Load data
const Countries = () => {


    // State
    const [countries, setCountries] = useState([]);


    // For Mark Visit State
    const [visitedCountries, setVisitedCountries] = useState([]);


    // For Visited Flag of Countries state
    const [visitedFlags, setVisitedFlags] = useState([]);



    // Data load with useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,cca3,area')
            .then(res => res.json())
            .then(data =>setCountries(data))
    }, [])
    
    // For Visited Country HandleEvent
    const handleVisitedCountry = (country) => {

        // Add element to existing array
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    // Handle visited flag event 
    const handleVisitedFlags = (flags) => {
        console.log('Flag added. ')
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <hr />
            <hr />

            {/* Visited Country */}
            <div>
                <h3>Visited Country :{ visitedCountries.length}</h3>
                <ul>
                    { 
                        visitedCountries.map((country) => <li key={country.cca3}>{ country.name.common}</li>)
                    }


                </ul>
            </div>

          
            <div className="flags_container">
                {
                    visitedFlags.map((flag,idx) => <img key={idx} src={ flag} />)
                }
            </div>
            <hr />
            <hr />

            {/* Display Countries*/}
            <div className="country_container">
                {
                    countries.map((country) => <Country
                        key={country.cca3}
                        country={country}
                
                        // for added visited country
                        handleVisitedCountry={handleVisitedCountry}

                        // For added visited flag country
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;