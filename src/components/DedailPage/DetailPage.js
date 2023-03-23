import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../Apikey";
import {GoPrimitiveDot} from "react-icons/go";
import Actors from "./Actors";
import Trailers from "./Trailers";


const DetailPage = () => {
    const [detail, setDetail] = useState({})
    const movieId = useParams()
    const getDetail = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setDetail(data)
    }
    useEffect(() => {
        getDetail()
    }, [])
    console.log(detail)
    let {
        poster_path,
        original_title,
        release_date,
        genres,
        runtime,
        vote_average,
        backdrop_path,
        overview
    } = detail
    return (
        <section id="detail" className="detail-id">
            <div style={{
                background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}) no-repeat left/cover`,
                filter: "grayscale(60%)"
            }}>
                <div className="container">
                    <div className="detail">
                        <div className="detail-title">
                            <div>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt="" style={{
                                    width: "300px"
                                }}/>
                            </div>
                            <div>
                                <h1>{original_title}</h1>
                                <h4><p>{release_date}</p> <span><GoPrimitiveDot/></span>
                                    {genres ? genres.map(el => (
                                        <div>{el.name + " "}</div>)) : " "}<span><GoPrimitiveDot/></span>
                                    {Math.floor(runtime / 60)}h {runtime % 60}m</h4>
                                <div>
                                    <h3>Рейтинг: <button>{Math.round(vote_average * 10)}%</button></h3>
                                </div>
                                <h1>Overview:</h1>
                                <p className="detail-overview">{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Actors movieId={movieId}/>
                <Trailers movieId={movieId}/>
            </section>
    );
};

export default DetailPage;