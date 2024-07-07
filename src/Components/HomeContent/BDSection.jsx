import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import { Link } from 'react-router-dom';

var lazyloaded = false
export default function BDSection() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory1.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data.slice(0, 3));
                    setState2(data.data.slice(3, 7));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])

    return (
        <>

            <div class="row">
                <div class="col-lg-12">
                    <div class="AllSecTitle">
                        <a href="#">
                            <h2>বাংলাদেশ</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div class="leadTop3">
                <div class="NewsSeparator">
                    <div class="row">
                        {state.map((nc) => {
                            return (
                                <div class="col-lg-4 d-flex border-right-inner">
                                    <div class="leadTop3-wrap align-self-stretch">
                                        <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} key={nc.CategoryID} onClick={scrollTop}>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <picture>
                                                        <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                        {nc.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                                    </picture>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="Desc">
                                                        <h3 class="Title"> {nc.ContentHeading}
                                                        </h3>
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
                <div class="row">
                    {state2.map((nc)=>{
                        return(
                            <div class="col-lg-3 d-flex border-right-inner">
                            <div class="leadTop3-wrap align-self-stretch">
                                <a href="#">
                                    <div class="row">
                                        <div class="col-lg-12 col-5">
                                            <picture>
                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                {nc.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                            </picture>
                                        </div>
                                        <div class="col-lg-12 col-7">
                                            <div class="Desc">
                                                {nc.ContentSubHeading === null ?
                                                    <h3 class="Title">
                                                        {nc.ContentHeading}
                                                    </h3> :
                                                    <h3 class="Title"><span class="subHeading">
                                                    </span> {nc.ContentHeading}
                                                    </h3>}
    
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
        </>

    )
}
