import React, {useEffect, useState} from 'react';
import axios, {get} from "axios";
import {APIKEY} from "../Apikey";
import {NavLink} from "react-router-dom";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        setPopular(data.results)
    }
    useEffect(() => {
        getPopular()
    }, [])
    console.log(popular)
    return (
        <section id="popular">
            <div className="container">
                <section className="popular">
                    {
                        popular.map(el => (
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

export default Popular;