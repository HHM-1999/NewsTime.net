import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'

var lazyloaded = false
export default function RaceGender() {
    const [race1, setRace1] = useState([])
    const [race2, setRace2] = useState([])
    const [race3, setRace3] = useState([])


    // 10
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory10.json`)
            .then(({ data }) => {

                setRace1(data.data.slice(0,3))
                // setRace2(data.data[1])
                // setRace3(data.data[2])

                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);


            })
    }, [])
    return (
        <>
            <div class="col-lg-4 col-12">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="AllSecTitle">
                            <Link to="/race-gender" onClick={scrollTop}>
                                {/* <!-- <span class="RIghtBar"></span> --> */}
                                <h2>রেস-জেন্ডার</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="Common-list2">
                    {
                        race1.map((nc) => {
                            return (
                                <div class="Common-list2-details">
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
                            )
                        })
                    }


                    {/* <div class="Common-list2-details">
                            <a href="">
                                <div class="row">
                                    <div class="col-lg-12 col-5">
                                        <picture>
                                            <img class="img-fluid img100" src="<?php echo $sSiteURL; ?>media/imgAll/রানী-659af9c6dae6a.jpg" alt="" title="">
                                        </picture>
                                    </div>
                                    <div class="col-lg-12 col-7">
                                        <div class="Desc">
                                            <h3 class="Title">মানুষের ভালোবাসায় সিক্ত ট্রান্সজেন্ডার রানী ও
                                                উর্মি </h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div> */}
                    {/* <div class="Common-list2">
                            <div class="Common-list2-details">
                                <a href="">
                                    <div class="row">
                                        <div class="col-lg-12 col-5">
                                            <picture>
                                                <img class="img-fluid img100" src="<?php echo $sSiteURL; ?>media/imgAll/সিমিন-65d2175f86065.webp" alt="" title="">
                                            </picture>
                                        </div>
                                        <div class="col-lg-12 col-7">
                                            <div class="Desc">
                                                <h3 class="Title">নারীরা বোঝা নয়, দেশের সম্পদ : প্রতিমন্ত্রী
                                                    সিমিন
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div> */}


                </div>
            </div>
        </>

    )
}
