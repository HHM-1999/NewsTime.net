import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'

var lazyloaded = false
export default function Lifestyle() {
    const [lifeStyle, setLifeStyle] = useState([])
    const [lifeStyle2, setLifeStyle2] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory8.json`)
            .then(({ data }) => {

                setLifeStyle(data.data[0])
                setLifeStyle2(data.data.slice(1, 4))

                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);


            })
    }, [])
    return (
        <>
            <div class="col-lg-8 col-12 border-right-inner">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="AllSecTitle">
                            <Link to="/life">
                                {/* <!-- <span class="RIghtBar"></span> --> */}
                                <h2>জীবনযাপন</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="CommonLead2">
                    <Link to={"/" + lifeStyle.Slug + "/news/" + lifeStyle.ContentID} onClick={scrollTop}>
                        <div class="">
                            <picture>
                                <img src={process.env.REACT_APP_IMG_Path + lifeStyle.ImageBgPath} alt={lifeStyle.ContentHeading} title={lifeStyle.ContentHeading} className="img-fluid img100" />
                                {lifeStyle.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                            </picture>
                        </div>
                        <div class="Desc">
                            <h2 class="Title FW700"> {lifeStyle.ContentHeading}
                            </h2>
                            <div class="Brief">
                                <p>{lifeStyle.ContentBrief} </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div class="Common-list3">
                    <div class="row gx-3">
                        {lifeStyle2.map((nc)=>{
                            return(
                                <div class="col-lg-4">
                                <div class="Common-list3-details">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div class="row">
                                            <div class="col-lg-12 col-5">
                                                <picture>
                                                    <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
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
                            )
                        })}
                       
                      
                    </div>
                </div>
            </div>
        </>

    )
}
