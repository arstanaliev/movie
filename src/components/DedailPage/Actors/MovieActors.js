import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../Apikey";
import actors from "./index";
import ActorsMovies from "./ActorsMovies";

const MovieActors = () => {

    const [actorsInfo, setActorsInfo] = useState({})

    const [accordion, setAccordion] = useState(false)

    const {movieId} = useParams()

    const getInfo = async () => {
        const url = await axios(`https://api.themoviedb.org/3/person/${movieId}?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setActorsInfo(data)
    }
    useEffect(() => {
        getInfo()
    }, [])
    console.log(actorsInfo)
    const {profile_path, name, biography} = actorsInfo
    return (
        <section id="movie-actors" style={{
            background: "rgba(0,0,26,0.84)",
        }}>
            <div className="container">
                <div className="movie-actors" style={{
                    display: "flex",
                    color: "white",
                    fontSize: "30px",
                    padding: "40px 0",
                }}>
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt="" style={{
                            marginRight: "30px"
                        }}/>
                    </div>

                    <div>
                        <h1>{name}</h1>
                        <p>{biography ? biography.length < 201 ? biography : (<p style={{
                            display: accordion ? "none" : "block"
                        }}>{biography.slice(0, 200)}</p>) : ""}<p
                            onClick={() => setAccordion(!accordion)} style={{
                            textDecoration: "none",
                            color: "blue",
                            display: accordion ? "none" : "block",
                            cursor: "pointer"
                        }}> читать дальше</p><p style={{
                            display: accordion ? "block" : "none"
                        }}>{biography}</p><p onClick={() => setAccordion(!accordion)} style={{
                            textDecoration: "none",
                            color: "blue",
                            display: accordion ? "block" : "none",
                            cursor: "pointer"
                        }}> читать меньше</p></p>
                    </div>
                </div>
            </div>
            <ActorsMovies movieId={movieId}/>
        </section>


    );
};

export default MovieActors;