import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ForLazyLoaderImg, scrollTop } from '../AllFunctions'
var lazyloaded = false
export default function International() {
    const [news, setNews] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory4.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setNews(data.data[0]);
                    setState2(data.data.slice(1, 7));

                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])
    return (
        <section class="international-area-news">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="AllSecTitle">
                            <a href="/international">
                                {/* <!-- <span class="RIghtBar"></span> --> */}
                                <h2>আন্তর্জাতিক</h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 border-right-inner">
                        <div class="CommonSecNews4-wrapper">
                            <div class="CommonLead4">
                                <Link to={"/" + news.Slug + "/news/" + news.ContentID} onClick={scrollTop}>
                                    <picture>
                                        <img src={process.env.REACT_APP_IMG_Path + news.ImageBgPath} alt={news.ContentHeading} title={news.ContentHeading} className="img-fluid img100" />
                                        {news.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                    </picture>
                                    <div class="Desc">
                                        <h3 class="Title">{news.ContentHeading}</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="Common-list">
                            {state2.map((nc)=>{
                                return(
                                    <div class="Common-listBox-item">
                                <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                    <div class="Desc">
                                        <h3 class="Title"> <span class="subHeading">{nc.ContentSubHeading}</span>{nc.ContentHeading}
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                                )
                            })}
                            

                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
