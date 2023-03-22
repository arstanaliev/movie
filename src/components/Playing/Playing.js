import React, {useEffect, useState} from 'react';
import axios, {get} from "axios";
import {APIKEY} from "../Apikey";
import {NavLink} from "react-router-dom";

const Playing = () => {
    const [playing, setPlaying] = useState([])
    const getPlaying = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        setPlaying(data.results)
    }
    useEffect(() => {
        getPlaying()
    }, [])
    console.log(playing)
    return (
        <section id="playing">
            <div className="container">
                <section className="playing">
                    {
                        playing.map(el => (
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

export default Playing;