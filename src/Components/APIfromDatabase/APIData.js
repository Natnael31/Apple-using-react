import React, { useState, useEffect } from 'react'

export default function APIData() {

    const [data, setData] = useEffect([]);

    useEffect(() => {
        fetch("http://localhost:3100/productInfo")
            .then((res) => res.json)
            .then((file) => {
                setData(()=>file.products)
            })
            .catch(()=>alert("Error"));
    }, []);

    console.log(data);


    return (
        <div className='container'>
            <div className='row'>
                <div className="col-12 col-md-6">
                    {
                    data.map((products)=>{
                        <div>
                            
                        </div>
                    })
                    }
                </div>
            </div>
        </div>
    )
}



