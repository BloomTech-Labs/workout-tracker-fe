import React, { useState, useEffect } from "react"
import Axios from "axios"

function Account(props) {
    const [user, setUser] = useState({
        id: '',
        first_name: '',
        last_name: '',

    })

    const [userStats, setUserStats] = useState({
        member_id: '',
        weight: '',
        height: '',
        bmi: '',
        bench_max: '',
        squat_max: '',
        mile_time: '',
        exercise_date: '',
    })

    useEffect(() => {
        const id = user.id;
        Axios
            .get(`https://firstrep.herokuapp.com/api/members/6`)
            .then(res => {
                setUser({
                    firstName: res.data.first_name,
                    lastName: res.data.last_name
                })
            })
            .catch(err => {
                console.log(err)
            })

            Axios
            .get(`https://firstrep.herokuapp.com/api/memberstatus/6`)
            .then(res => {
                setUserStats({
                    weight: res.data.weight,
                    height: res.data.height,
                    BMI: res.data.bmi,
                    benchMax: res.data.bench_max,
                    squatMax: res.data.squat_max,
                    mileTime: res.data.mile_time,
                    exerciseDate: res.data.exercise_date,
                })
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div className='user-info-container'>
            <div className='user-info' key={user.id}>
                <h3>Name: {user.firstName}</h3>
                <div className='user-info-wrapper'>
                    <h3>Weight: {userStats.weight} </h3>
                    <h3>Bench Max: {userStats.benchMax}</h3>
                    <h3>Squat Max: {userStats.squatMax}</h3>
                    <h3>Height: {userStats.height}</h3>
                    <h3>Body Mass Percentage: {userStats.BMI}</h3>
                    <h3>Mile Time: {userStats.mileTime}</h3>
                </div>
            </div>    
        </div>
    )
}

export default Account;