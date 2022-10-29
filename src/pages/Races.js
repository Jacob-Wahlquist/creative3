import React, { useState, useEffect } from 'react';


function Races() {

    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch(`https://api.open5e.com/races/?format=json`,{method:"GET"})
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
                                    <div ><h3>{item.desc}</h3></div>
                                    <div ><h3>Traits: {item.traits}</h3></div>
                                    <div><h3>{item.age}</h3></div>
                                    <div><h3>{item.alignment}</h3></div>
                                    <div><h3>{item.size}</h3></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Races