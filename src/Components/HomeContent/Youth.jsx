import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'

var lazyloaded = false
export default function Youth() {
    const [news2, setNews2] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory12.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                setNews2(data.data.slice(0,5))

                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            }
            })
    }, [])
    return (
        <>
            <div class="col-lg-4 border-right-inner">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="AllSecTitle">
                            <a href="/youth">
                                {/* <!-- <span class="RIghtBar"></span> --> */}
                                <h2>তারুণ্য</h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="Common-list">
                    {news2.map((nc)=>{
                        return(
                            <div class="CommonLeadList">
                            <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                <div class="row">
                                    <div class="col-lg-5 col-12">
                                        <div class="">
                                            {/* <picture>
                                                <img class="img-fluid img100" src="<?php echo $sSiteURL; ?>media/imgAll/running-1716815350.jpg" alt="" title="">
                                            </picture> */}
                                            <picture>
                                                        <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                        {nc.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                                    </picture>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 col-12 order-lg-first">
                                        <div class="Desc">
                                            <h2 class="Title FW700">{nc.ContentHeading}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )
                    })}

                  
                    
                </div>
            </div>

        </>

    )
}
