import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import { Link } from 'react-router-dom';

var lazyloaded = false
export default function LeadNews() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial1.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data[0]);
                    setState2(data.data.slice(1, 4));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])

    return (
        <>
            <div class="DLeadNews">
                <Link to={"/" + state.Slug + "/news/" + state.ContentID} key={state.CategoryID} onClick={scrollTop}>
                    <div class="row">
                        <div class="col-md-7">
                            <picture>
                                <img src={process.env.REACT_APP_IMG_Path + state.ImageBgPath} alt={state.ContentHeading} title={state.ContentHeading} className="img-fluid img100" />
                                {state.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                            </picture>
                        </div>
                        <div class="col-md-5 order-lg-first">
                            <div class="Desc">
                                <h1 class="Title">{state.ContentHeading}</h1>
                                <div class="Brief">
                                    <p>{state.ContentBrief}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div class="leadTop3">
                <div class="row">
                    {state2.map((nc) => {
                        return (
                            <div class="col-lg-4 d-flex border-right-inner">
                                <div class="leadTop3-wrap align-self-stretch">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} key={nc.CategoryID} onClick={scrollTop}>
                                        <div class="row">
                                            <div class="col-lg-12 col-5">
                                                <picture>
                                                    <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                    {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
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
                        )
                    })}
                </div>
            </div>

        </>

    )
}
