import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import { Link } from 'react-router-dom';

var lazyloaded = false
export default function SelectedVideo() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generatePositionVideoCategory1.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data[0]);
                    setState2(data.data.slice(1, 3));
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
                            <h2>বাছাই ভিডিও
                            </h2>
                        </a>
                    </div>
                </div>
            </div>
            <div class="LiveVideoItem align-self-stretch">
                <Link to={"/video/show/" + state.WebTVID} onClick={scrollTop}>
                    <div class="LiveVideoImg">
                        <picture>
                            <img src={'https://img.youtube.com/vi/' + state.WebTVLinkCode + '/0.jpg'} width={406} height={228} alt={state.WebTVHeading} title={state.WebTVHeading} className="img100 ImgRatio" />
                            <div class="card-video-icon transition"></div>
                        </picture>

                    </div>
                    <div class="Desc">
                        <h3 class="Title">{state.WebTVHeading}</h3>
                    </div>
                </Link>
            </div>
            <div class="LiveVideoListItemBox">
                {state2.map((nc) => {
                    return (
                        <div class="LiveVideoListItem">
                            <Link to={"/video/show/" + nc.WebTVID} onClick={scrollTop}>
                                <div class="Desc">
                                    <h2 class="Title">{nc.WebTVHeading}</h2>
                                </div>
                            </Link>
                        </div>
                    )
                })}

                
            </div>

        </>

    )
}
