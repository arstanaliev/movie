import React, {useEffect, useState} from 'react';
import axios, {get} from "axios";
import {APIKEY} from "../Apikey";
import {NavLink} from "react-router-dom";

const Rated = () => {
    const [rated, setRated] = useState([])
    const getRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        setRated(data.results)
    }
    useEffect(() => {
        getRated()
    }, [])
    console.log(rated)
    return (
        <section id="rated">
            <div className="container">
                <section className="rated">
                    {
                        rated.map(el => (
                            <div>
                                <NavLink to={`/movie/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
                                </NavLink>
                            </div>
                        ))
                    }
                </section>
            </div>
        </section>
    );
};

export default Rated;