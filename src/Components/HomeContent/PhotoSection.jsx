import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ForLazyLoaderImg, scrollTop } from '../AllFunctions'

var lazyloaded = false

export default function PhotoSection() {
    const [photoStory, setPhotoStory] = useState([])
    const [photoStory2, setPhotoStory2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generatePhotoFeature.json`)
            .then(({ data }) => {
                setPhotoStory(data.data[0])
                setPhotoStory2(data.data.slice(1, 5))
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
    }, [])
    return (

        <>
            <section class="video-area">
                <div class="container">
                    <div class="video-area-wrapper">
                        <div class="row">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="AllSecTitle">
                                        <Link to="/photo-feature" onClick={scrollTop}>
                                            {/* <!-- <span class="RIghtBar"></span> --> */}
                                            <h2>ফটোগ্যালারি</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="video-big">
                                    <Link to={"/photo-feature/news/" + photoStory.PhotoFeatureID} key={photoStory.PhotoFeatureID} onClick={scrollTop}>
                                        <div class="video-img-wrap">
                                            <div class="video-overlay"></div>
                                            <picture>
                                                <img src={process.env.REACT_APP_IMG_Path + photoStory.ImageBgPath} alt={photoStory.ContentHeading} title={photoStory.ContentHeading} className="img-fluid img100" />
                                                {photoStory.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                            </picture>
                                        </div>
                                        <div class="Desc">
                                            <h3 class="Title2">{photoStory.ContentHeading}</h3>
                                        </div>
                                        <div class="video-icon"><i class="fas fa-image"></i></div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="video-middel">
                                    <div class="row gx-2">
                                        {photoStory2.map((nc) => {
                                            return (
                                                <div class="col-lg-6">
                                                    <div class="video-middel-items">
                                                        <Link to={"/photo-feature/news/" + nc.PhotoFeatureID} key={nc.PhotoFeatureID} onClick={scrollTop}>
                                                            <div class="video-img-wrap">
                                                                <div class="video-overlay"></div>
                                                                <picture>
                                                                    <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                                    {nc.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                                                                </picture>
                                                            </div>
                                                            <div class="Desc">
                                                                <h3 class="Title2">{nc.ContentHeading}</h3>
                                                            </div>
                                                            <div class="video-icon"><i class="fas fa-image"></i></div>
                                                        </Link>
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
