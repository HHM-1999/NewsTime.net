import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ForLazyLoaderImg, scrollTop } from '../AllFunctions'

var lazyloaded = false
export default function NewsTimeSpecial() {
    const [news, setNews] = useState([])
    const [news2, setNews2] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial2.json`)
            .then(({ data }) => {
                setNews(data.data[0])
                setNews2(data.data[1])

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
                        <a href="/newstime-special">

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
            <div className="DHomeTopLead">
                <Link to={"/" + news2.Slug + "/news/" + news2.ContentID} onClick={scrollTop}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="DImgZoomBlock">
                                <picture><img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + news2.ImageBgPath} alt={news2.ContentHeading} title={news2.ContentHeading} className="img-fluid img100" />
                                    {news2.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}</picture>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="Desc">
                                {news2.ContentSubHeading == null ?
                                    <h1 className="Title"> {news2.ContentHeading}</h1> :
                                    <h1 className="Title"> <span className="subheadTitle">{news2.ContentSubHeading}/</span>  {news2.ContentHeading}</h1>


                                }


                            </div>
                        </div>
                    </div>
                </Link>
            </div>


        </>

    )
}
