import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
var lazyloaded = false

export default function Entertaiment() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory7.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data.slice(0,3));
                    setState2(data.data.slice(3,7));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])
    return (
        <section class="Entertainment-area-news">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="AllSecTitle">
                            <a href="/entertainment">
                                {/* <!-- <span class="RIghtBar"></span> --> */}
                                <h2>বিনোদন</h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="Entertainment-news-wrapper-top">
                    <div class="row gx-3">
                        {state.map((nc) => {
                            return (
                                <div class="col-lg-4">
                                    <div class="CommonLead4">
                                        <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                            <picture>
                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                {nc.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                            </picture>
                                            <div class="Desc">
                                                <h3 class="Title">{nc.ContentHeading}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
                <div class="Entertainment-news-wrapper-bottom">
                    <div class="row gx-3">
                        {state2.map((nc)=>{
                            return(
                                <div class="col-lg-3 border-right-inner">
                            <div class="Common-list-details">
                                <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                    <div class="row">
                                        <div class="col-5 col-md-12">
                                        <picture>
                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                {nc.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                            </picture>
                                        </div>
                                        <div class="col-7 col-md-12">
                                            <div class="Desc">
                                                <h3 class="Title">{nc.ContentHeading}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                            )
                        })}
                        


                    </div>
                </div>
            </div>
        </section>
    )
}
