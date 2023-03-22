import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trailers = ({movieId}) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const [trailers, setTrailers] = useState([])

    const getTrailers = async (key, id) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id.id}/videos?api_key=${key}&language=en-US`)
        const {data} = await url
        setTrailers(data.results)
    }

    useEffect(() => {
        getTrailers(APIKEY, movieId)
    }, [])
    console.log(trailers)
    return (
            <section id="trailers">
                <div className="container">
                    <div className="trailers" style={{
                        padding: '2rem 0 4rem 0',
                    }}>
                        <h1 style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: '40px',
                            paddingBottom: "20px"
                        }}>Trailers:</h1>
                        <Slider {...settings}>
                            {
                                trailers.map(el => (
                                    <iframe width="300" height="250" src={`https://www.youtube.com/embed/${el.id}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen style={{
                                        padding: '10px'
                                    }}></iframe>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
    );
};

export default Trailers;