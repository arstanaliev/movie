import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";


const Actors = ({movieId}) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true ,
        speed: 300,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const [actors, setActors] = useState([])

    const getActors = async (key, id) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=${key}&language=en-US`)
        const {data} = await url
        setActors(data.cast)
    }

    useEffect(() => {
        getActors(APIKEY, movieId)
    }, [])
    console.log(actors)
    return (
        <section id="actors">
            <div className="container">
                <div className="actors" style={{
                    padding: '2rem 0 4rem 0',
                }}>
                    <h1 style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: '40px',
                        paddingBottom: "20px"
                    }}>Actors:</h1>
                    <Slider {...settings}>
                        {
                            actors.map(el => (

                                el.profile_path &&

                                <div className="krc" style={{
                                    width: '200px'
                                }}>
                                    <NavLink to={`/movie/movie-results/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt="" style={{
                                            width: '200px'
                                        }}/>
                                    </NavLink>

                                    <h1 style={{
                                        color: 'white'
                                    }}>{el.name}</h1>
                                </div>

                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Actors;