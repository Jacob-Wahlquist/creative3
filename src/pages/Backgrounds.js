import React, { useState, useEffect } from 'react';


function Backgrounds() {

    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch(`https://api.open5e.com/backgrounds/?format=json`,{method:"GET"})
        .then((res) =>  res.json())
        .then((response) => setData(response.results));
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='root'>
            <div className='container'>
                <div className='card'>
                    {
                        data.map((item, key) => {
                            return (
                                <div key={key}>
                                    <div><h1>{item.name}</h1></div>
                                    <div ><h4>{item.desc}</h4></div>
                                    <div><h3>Skills: {item.skill_proficiencies}</h3></div>
                                    <div><h3>Equipment: {item.equipment}</h3></div>
                                    <div><h3>Feature: {item.feature}</h3></div>
                                    <div><h4>{item.feature_desc}</h4></div>
                                    <div><h3>{item.suggested_characteristics}</h3></div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Backgrounds