import React, { useState } from 'react';
import './Country.css'
const Country = ({ country,  handleVisitedCountry }) => {
    const { name, flags, region, cca3, area } = country;
    console.log(country)

    // const handleDetails = () => {
    //     console.log('clicked Me.')
    // }

    const [visited, setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ?'visitedStyle':'non_VisitedStyle'}`}>
            <div>
                <h3>Name: {name?.common}</h3>
                <img src={flags?.png} alt="" />
                <hr />
                <hr />

                <p>Region: {region}</p>
                <p>Area: {area}</p>
                <small>CCA3: {cca3}</small>
                <div>
                    {/* <button onClick={handleDetails}>Details</button> */}
                    <button onClick={handleVisited}>{visited?'Completed':'Visit'}</button>
                    {/* {visited ? 'Visited Country.': 'I want to visit'} */}
                    
                    {/* Mark visited Button with props */}
                    <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
                </div>
               
            </div>
        </div>
    );
};

export default Country;