import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
// import LeadTopSlider from './LeadTopSlider'
var lazyloaded = false
export default function Sports() {
    const [sports, setSports] = useState([])
    const [sports2, setSports2] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory6.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setSports(data.data[0]);
                    setSports2(data.data.slice(1,5));

                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])
    return (
        <>
            <section class="Sports-area-news">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="AllSecTitle">
                                <a href="/sports">
                                    {/* <!-- <span class="RIghtBar"></span> --> */}
                                    <h2>খেলা</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="CommonSecNews2-wrapper">
                        <div class="row">
                            <div class="col-lg-6 col-12 d-flex border-right-inner">
                                <div class="CommonLead2">
                                    <Link to={"/" + sports.Slug + "/news/" + sports.ContentID} onClick={scrollTop}>
                                        <div class="">
                                            <picture>
                                                <img src={process.env.REACT_APP_IMG_Path + sports.ImageBgPath} alt={sports.ContentHeading} title={sports.ContentHeading} className="img-fluid img100" />
                                                {sports.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                            </picture>
                                        </div>
                                        <div class="Desc">
                                            <h2 class="Title FW700"> {sports.ContentHeading}
                                            </h2>
                                            <div class="Brief">
                                                <p>{sports.ContentBrief} </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="sports-right">
                                    <div class="row">
                                        {sports2.map((nc) => {
                                            return (
                                                <div class="col-lg-6 border-right-inner">
                                                    <div class="Common-list2">
                                                        <div class="Common-list2-details">
                                                            <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                                <div class="row">
                                                                    <div class="col-lg-12 col-5">
                                                                        <picture>
                                                                            <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                                            {nc.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                                                        </picture>
                                                                    </div>
                                                                    <div class="col-lg-12 col-7">
                                                                        <div class="Desc">
                                                                            <h3 class="Title">{nc.ContentHeading}</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
