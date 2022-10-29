import React, { useState, useEffect } from 'react';


function Weapons() {

    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch(`https://api.open5e.com/weapons/?format=json`,{method:"GET"})
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
                                    <div ><h3>Category: {item.category}</h3></div>
                                    <div><h3>Damage: {item.damage_dice} {item.damage_type}</h3></div>
                                    <div><h3>Weight: {item.weight}</h3></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Weapons