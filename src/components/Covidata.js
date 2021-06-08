import React, { useEffect, useState } from 'react';
import './Covid.css'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <h1 className="livepop">🔴 Live</h1>
            <h2 className="titleCard">Covid19 Tracker Reactjs</h2>
            {/* Main Data */}
            <ul>
                <li className="card">
                    {/* Cards */}
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>COUNTRY</span> NAME</p>
                            <p className="card__total card__small">INDIA</p>
                        </div>
                    </div>

                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>TOTAL</span> RECOVERED</p>
                            <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </div>

                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>TOTAL</span> CONFIRMED</p>
                            <p className="card__total card__small">{data.confirmed}</p>
                        </div>
                    </div>

                     <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>TOTAL</span> ACTIVE</p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </div>

                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>TOTAL</span> DEATH</p>
                            <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </div>

                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>LAST</span> UPDATED</p>
                            <p className="card__total card__small updatedTime">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </>
    )
}

export default Covid
