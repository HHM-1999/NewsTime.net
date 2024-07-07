import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'

var lazyloaded = false
export default function ElectionSection() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial2.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data.slice(0, 5));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])

    return (
        <>
            <div class="DQuickPostSec MobileHide mt-3">
                <div class="DTitleStyle"><a href="#">
                    <h3><i class="fa-solid fa-circle-half-stroke"></i>নির্বাচিত</h3>
                </a></div>
                <div class="DQuickPostNews">
                    <ul>
                        {state.map((nc) => {

                            return (
                                <>
                                    {nc.ContentSubHeading ===  null ?
                                        <li key={nc.ContentID}><Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>{nc.ContentHeading}</Link></li> :
                                        <li key={nc.ContentID}><Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}><span className="subHeading">{nc.ContentSubHeading + " /"}</span>{nc.ContentHeading}</Link></li>
                                    }
                                </>


                            )
                        })}



                    </ul>
                </div>
            </div>

        </>

    )
}
