import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'

var lazyloaded = false
export default function NewsTimeSpecial() {
    const [news, setNews] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial2.json`)
            .then(({ data }) => {
                setNews(data.data[0])

                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
    }, [])
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="AllSecTitle">
                        <a href="#">

                            <h2>নিউজটাইম স্পেশাল
                            </h2>
                        </a>
                    </div>
                </div>
            </div>
            <div class="NewsTimeSpecial">
                
                <div class="NewsTimeSpecialBox">
                    <Link to={"/" + news.Slug + "/news/" + news.ContentID} key={news.CategoryID} onClick={scrollTop}>
                        <picture>
                            <img src={process.env.REACT_APP_IMG_Path + news.ImageSmPath} alt={news.ContentHeading} title={news.ContentHeading} className="img-fluid img100" />
                            {news.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                        </picture>
                        <div class="Desc">
                            <h3 class="Title">{news.ContentHeading}
                            </h3>
                            <div class="Brief">
                                <p>{news.ContentBrief}</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>


        </>

    )
}
