import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollTop } from '../AllFunctions'
import { Link } from 'react-router-dom';

const { toBengaliNumber } = require('bengali-number');
export default function LeadLatestNews() {
    const [latest, setLatest] = useState([])
    const [popular, setPopular] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateLatest.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setLatest(data.data.slice(0, 10))
                }
            })
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generatePopular.json`)
            .then(({ data }) => {
                setPopular(data.data)
            })
    }, [])

    return (
        <>
            {/* <section className="DLPSTab2">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">সর্বশেষ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">জনপ্রিয়</a>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-body PanelHeight">
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="DLatestNews longEnough mCustomScrollbar" data-mcs-theme="dark">
                                    {latest.map((nc, i) => {
                                        return (
                                            <div className="DLatestNewsList" key={nc.ContentID}>
                                                <a href={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                    <div className="d-flex flex-row">
                                                       
                                                        {nc.ContentSubHeading == null ?
                                                            <p>{nc.ContentHeading} </p> :
                                                            <p> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </p>
                                                        }
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="DLatestNews longEnough mCustomScrollbar" data-mcs-theme="dark">

                                    {popular.map((nc) => {
                                        return (
                                            <div className="DLatestNewsList" key={nc.ContentID}>
                                                <a href={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                    <div className="d-flex flex-row">
                                                      
                                                        {nc.ContentSubHeading == null ?
                                                            <p>{nc.ContentHeading} </p> :
                                                            <p> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </p>
                                                        }
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="allnews"><Link to="/archives" onClick={scrollTop}>সব খবর <i className="fa fa-angle-double-right"></i></Link></div>
            </section> */}
            <div class="DLPSTab2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-bs-toggle="tab" href="#tabs-1" role="tab"
                                    aria-selected="true">সর্বশেষ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tabs-2" role="tab"
                                    aria-selected="false">সর্বাধিক পঠিত</a>
                            </li>
                        </ul>
                    </div>
                    <div class="panel-body PanelHeight">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="DLatestNews longEnough mCustomScrollbar" data-mcs-theme="dark">

                                    {latest.map((nc,i) => {
                                        return (
                                            <div class="DLatestNewsList"  key={nc.ContentID}>
                                                <a href={"/" + nc.Slug + "/news/" + nc.ContentID}>
                                                    <div class="d-flex flex-row">
                                                        <div class="d-flex h-100 align-items-center"><span>{toBengaliNumber(i + 1)}</span>
                                                        </div>
                                                        {nc.ContentSubHeading == null ?
                                                            <p>{nc.ContentHeading} </p> :
                                                            <p> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </p>
                                                        }
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })}


                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="DLatestNews longEnough mCustomScrollbar" data-mcs-theme="dark">
                                {popular.map((nc,i) => {
                                        return (
                                            <div class="DLatestNewsList"  key={nc.ContentID}>
                                                <a href={"/" + nc.Slug + "/news/" + nc.ContentID}>
                                                    <div class="d-flex flex-row">
                                                        <div class="d-flex h-100 align-items-center"><span>{toBengaliNumber(i + 1)}</span>
                                                        </div>
                                                        {nc.ContentSubHeading == null ?
                                                            <p>{nc.ContentHeading} </p> :
                                                            <p> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </p>
                                                        }
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
