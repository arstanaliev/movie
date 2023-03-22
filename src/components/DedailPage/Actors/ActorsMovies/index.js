import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../Apikey";
import {NavLink} from "react-router-dom";

const ActorsMovies = ({movieId}) => {

    const [actorsMovies, setActorsMovies] = useState([])

    const getMovies = async (key, id) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
        const {data} = await url
        setActorsMovies(data.cast)
    }
    useEffect(() => {
        getMovies(APIKEY, movieId)
    } , [])
    console.log(actorsMovies)
    return (
        <section id="actors-movies">
            <div className="container">
                <div className="actors-movies" style={{
                    padding: "0 0 50px 0",
                    color: "white"
                }}>
                    <h1 style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: '40px',
                        paddingBottom: "20px"
                    }}>Известность за:</h1>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr"
                    }}>
                        {
                            actorsMovies.map(el => (
                                el.poster_path &&
                                <div style={{
                                    padding: "20px 10px"
                                }}>
                                    <NavLink to={`/movie/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
                                    </NavLink>
                                    <h1>{el.original_title}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActorsMovies;