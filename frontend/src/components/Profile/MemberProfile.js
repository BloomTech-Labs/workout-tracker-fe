import React, { useState, useEffect } from "react"
import axios from "axios"
import { render } from "react-dom"

function Account(props) {
    const [data, setData] = useState([{}]);


    useEffect(() => {
        const fetchData = async () => {
          const result = await axios("http://localhost:4000/api/members");
          setData(result.data);
        };
        fetchData();
      }, []);
    

    return (
        <div className='user-info-container' key='user'>
            {data.map(a => (
                <div className='user-info' key={a.id}>
                    <h3>Name: {a.firstName}</h3>
                    <div className='user-info-wrapper' key={a.member_id}>
                        <h3>Weight: {a.weight} </h3>
                        <h3>Bench Max: {a.benchMax}</h3>
                        <h3>Squat Max: {a.squatMax}</h3>
                        <h3>Height: {a.height}</h3>
                        <h3>Body Mass Percentage: {a.BMI}</h3>
                        <h3>Mile Time: {a.mileTime}</h3>
                    </div>
                    <div className='see-more'>
                        <a className='see-more-button' href='profile-info'>See More</a>     
                    </div> 
                </div>   
            ))}
             
        </div>
    )
}

export default Account;