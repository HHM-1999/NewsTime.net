import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'

var lazyloaded = false
export default function Finance() {


    const [news, setNews] = useState([])
    const [news2, setNews2] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory2.json`)
            .then(({ data }) => {
                setNews(data.data[0])
                setNews2(data.data.slice(1, 4))

                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
    }, [])
    return (
        <>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="AllSecTitle">
                            <a href="/trade-finance">
                                {/* <!-- <span class="RIghtBar"></span> --> */}
                                <h2>অর্থ-বাণিজ্য </h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div class=" CommonSecNews3-wrapper">
                    <div class="CommonLead3">
                        <Link to={"/" + news.Slug + "/news/" + news.ContentID} onClick={scrollTop}>
                            <div class="row">
                                <div class="col-lg-8">
                                    <picture>
                                        <img src={process.env.REACT_APP_IMG_Path + news.ImageBgPath} alt={news.ContentHeading} title={news.ContentHeading} className="img-fluid img100" />
                                        {news.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                    </picture>
                                </div>
                                <div class="col-lg-4 order-lg-first">
                                    <div class="Desc">
                                        <h2 class="Title FW700">{news.ContentHeading}
                                        </h2>
                                        <div class="Brief">
                                            <p>{news.ContentBrief}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="Common-list3">
                        <div class="row gx-3">
                            {news2.map((nc) => {
                                return (
                                    <div class="col-lg-4">
                                        <div class="Common-list3-details">
                                            <a href="">
                                                <div class="row">
                                                    <div class="col-lg-12 col-5">
                                                        <picture>
                                                            <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                            {nc.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                                        </picture>
                                                    </div>
                                                    <div class="col-lg-12 col-7">
                                                        <div class="Desc">
                                                            <h3 class="Title"> {nc.ContentHeading}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
