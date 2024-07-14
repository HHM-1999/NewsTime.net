import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'

var lazyloaded = false
export default function ScienceTechnology() {
    const [edu, setEdu] = useState([])
    const [edu2, setEdu2] = useState([])



    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory9.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setEdu(data.data[0]);
                    setEdu2(data.data.slice(1, 5));

                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])
    return (
        <>
              <div class="multiple-news-wrap">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="AllSecTitle">
                            <a href="/science-and-technology">
                                <h2>বিজ্ঞান-প্রযুক্তি</h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="Common-list">
                    <div class="Common-list-details">
                        <Link to={"/" + edu.Slug + "/news/" + edu.ContentID} onClick={scrollTop}>
                            <picture>
                                <img src={process.env.REACT_APP_IMG_Path + edu.ImageBgPath} alt={edu.ContentHeading} title={edu.ContentHeading} className="img-fluid img100" />
                                {edu.ShowVideo === 1 && <div className="card-video-icon transition">  </div>}
                            </picture>
                            <div class="Desc">
                                <h3 class="Title"> {edu.ContentHeading}</h3>
                            </div>
                        </Link>
                    </div>
                    {
                        edu2.map((nc) => {
                            return (
                                <div class="Common-listBox-item">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div class="Desc">
                                            <h3 class="Title">{nc.ContentHeading}
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </>

    )
}
