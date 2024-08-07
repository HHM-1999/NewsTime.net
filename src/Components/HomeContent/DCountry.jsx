import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ForLazyLoaderImg, scrollTop } from '../AllFunctions'
var lazyloaded = false
export default function DCountry() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    const [state3, setState3] = useState([])
    const [divisionName, setDivisionName] = useState([])
    // const [districtName, setDistrictName] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial2.json`)
            .then(({ data }) => {
                setState(data.data[0])
                setState2(data.data.slice(1, 4))
                setState3(data.data.slice(4, 7))
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
    }, [])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}division`)
            .then(({ data }) => {
                setDivisionName(data.divisions);
            });
    }, [])

    const getDist = (e) => {
        e.preventDefault();

        //disabled ture & false
        if (document.getElementById("division") !== null) {
            document.getElementById("button").disabled = false;
        } else {
            document.getElementById("button").disabled = true;
        }//disabled ture & false

        var division = e.target.value
        console.log(division);
        // if (division !== 0) {
        //     axios
        //         .get(`${process.env.REACT_APP_API_URL}districtInDivision/${division}`)
        //         .then(({ data }) => {
        //             setDistrictName(data.districtInDivision);
        //         });
        // } else {
        //     setDistrictName([]);
        // }
    }
    const getURL = (e) => {
        e.preventDefault()
        var url = ""
        var division = e.target.division.value
        // var district = e.target.district.value
        if (division > '0') { url = '/divisions/' + division }
        // if (district > '0') { url = '/divisions/' + division + '/' + district }
        console.log(url);
        window.location.href = url;
    }


    return (
        <>
            <section class="desh-news-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="AllSecTitle">
                                                <Link to="/country" onClick={scrollTop} >
                                                    <h2>দেশ</h2>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="desh-area-search">
                                        <div class="AreaSearch">
                                            <form onSubmit={getURL}>
                                                <div class="row form-group gx-2">
                                                    <div class="col-md-9">
                                                        <select defaultValue={'0'} class="form-select" aria-label="Default select example" name="division" id="division" onChange={getDist}>
                                                            <option value="0" disabled>--বিভাগ--</option>
                                                            {divisionName.map((nc) => {
                                                                return (
                                                                    <option data-id={nc.DivisionID} key={nc.DivisionID} value={nc.DivisionSlug}>{nc.DivisionNameBn}</option>
                                                                )
                                                            })}
                                                            {/* <option value="0" disabled>--বিভাগ--</option>
                                                        <option data-id="2" value="barisal">বরিশাল</option>
                                                        <option data-id="3" value="chittagong">চট্টগ্রাম
                                                        </option>
                                                        <option data-id="4" value="dhaka">ঢাকা</option>
                                                        <option data-id="5" value="khulna">খুলনা</option>
                                                        <option data-id="6" value="rajshahi">রাজশাহী</option>
                                                        <option data-id="7" value="sylhet">সিলেট</option>
                                                        <option data-id="8" value="rangpur">রংপুর</option>
                                                        <option data-id="9" value="mymensingh">ময়মনসিংহ
                                                        </option> */}
                                                        </select>
                                                    </div>
                                                    <div class="col-md-3 d-flex align-items-center justify-content-center">
                                                        <button type="submit" name="btnSubmit" class="btn btn-danger searchCap btn-block d-flex" ><i class="fas fa-search"></i> খুঁজুন
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 border-right-inner">
                            <div class="CommonLead3">
                                <Link to={"/" + state.Slug + "/" + state.ContentID} onClick={scrollTop}>
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <picture><img src={process.env.REACT_APP_IMG_Path + state.ImageBgPath} alt={state.ContentHeading} title={state.ContentHeading} className="img-fluid img100" /></picture>
                                            {state.ShowVideo === 1 || state.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                        </div>
                                        <div class="col-lg-4 order-lg-first">
                                            <div class="Desc">
                                                <h2 class="Title FW700"> {state.ContentHeading}
                                                </h2>
                                                <div class="Brief">
                                                    <p>{state.ContentBrief}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-3 border-right-inner">
                            <div class="Common-list">
                                {state2.map((nc) => {
                                    return (
                                        <div class="CommonLeadList">
                                            <a href="#">
                                                <div class="row">
                                                    <div class="col-lg-7 col-7">
                                                        <div class="Desc">
                                                            <h2 class="Title FW700"> {nc.ContentHeading}</h2>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-5 col-5">

                                                        <picture><img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                        {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}

                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="Common-list">
                                {state3.map((nc) => {
                                    return (
                                        <div class="CommonLeadList">
                                            <a href="#">
                                                <div class="row">
                                                    <div class="col-lg-7 col-7">
                                                        <div class="Desc">
                                                            <h2 class="Title FW700"> {nc.ContentHeading}</h2>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-5 col-5">
                                                        <picture><img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" /></picture>
                                                        {nc.ShowVideo === 1 || nc.VideoID !== null ? <span className="play-btn-big"><i className="fas fa-play"></i></span> : ""}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>

    )
}
