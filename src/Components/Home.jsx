import React, { useEffect, useState } from 'react'
import LeadNewsSection from './HomeContent/LeadNewsSection'
import { ForLazyLoaderImg } from './AllFunctions'
import Sports from './HomeContent/Sports'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import Ads from './HomeContent/Ads'
// import DCountry from './HomeContent/DCountry'
import DDivisionSearch from './HomeContent/DDivisionSearch'
import DNational from './HomeContent/DNational'
import DInternationalSec from './HomeContent/DInternationalSec'
import OnlinePoll from './HomeContent/OnlinePoll'
import OpinionSec from './HomeContent/OpinionSec'
import DPoliticsSec from './HomeContent/DPoliticsSec'
import DJob from './HomeContent/DJob'
import DBusiness from './HomeContent/DBusiness'
import DEntertainment from './HomeContent/DEntertainment'
import Lifestyle from './HomeContent/Lifestyle'
import Crime from './HomeContent/Crime'
import Technology from './HomeContent/Technology'
import DForeign from './HomeContent/DForeign'
import Religion from './HomeContent/Religion'
import Health from './HomeContent/Health'
import Law from './HomeContent/Law'
import DEducation from './HomeContent/DEducation'
import PhotoSection from './HomeContent/PhotoSection'
import PrayerTime from './HomeContent/PrayerTime'
// import Event from './HomeContent/Event'
import HomeLdJson from './HomeContent/HomeLdJson'
import FBpagePlugin from './FBpagePlugin'
import LazyLoaderGIF from '../assets/media/common/loading.gif'
import BDSection from './HomeContent/BDSection'
import NewsTimeSpecial from './HomeContent/NewsTimeSpecial'
import DCountry from './HomeContent/DCountry'
import VideoSec from './HomeContent/VideoSec'
import Youth from './HomeContent/Youth'

var allComponentsLoaded = false
export default function Home() {
    useEffect(() => {
        document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [])
    const [isLoading, setisLoading] = useState(true)
    const [homeAd2, setHomeAd2] = useState([]) // eslint-disable-line no-unused-vars

    const [firstSection, setFirstSection] = useState(false)
    const [secondSection, setSecondSection] = useState(false)
    const [thirdSection, setThirdSection] = useState(false)
    const [fourthSection, setFourthSection] = useState(false)
    useEffect(() => {
        document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        setTimeout(() => { window.location.reload(1); }, 300000);
        setisLoading(true)
        setTimeout(() => { setisLoading(false) }, 300);
        setisLoading(true)
        setTimeout(() => { setisLoading(false) }, 300);

        allComponentsLoaded = true

    }, [])
    return (
        <>
            <main>
                {/* <Event /> */}

                <>

                    <DocumentTitle title='NewsTime.net :: নিউজটাইম ডটনেট' />
                    <HomeLdJson />
                    <div className="FirstSectioComponent">
                        <section className='container'>
                            <div className="row">
                                <LeadNewsSection />
                            </div>

                        </section>
                        <>
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="DHomeAdd970X90 d-flex justify-content-center mt-4 mb-2">
                                            <img src="media/Advertisement/Advertisement(970X90).png" alt="" title="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        <section className='TopAllNews'>
                            <div className="container">
                                <div class="row">
                                    <div class="col-lg-9 border-right-inner">
                                        <BDSection />
                                    </div>
                                    <div className="col-lg-3">
                                        <NewsTimeSpecial />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <>
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="DHomeAdd970X90 d-flex justify-content-center mt-4 mb-2">
                                            <img src="media/Advertisement/Advertisement(970X90).png" alt="" title="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        <div className="container">
                            <DCountry />
                        </div>
                        <>
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="DHomeAdd970X90 d-flex justify-content-center mt-4 mb-2">
                                            <img src="media/Advertisement/Advertisement(970X90).png" alt="" title="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                        <VideoSec />
                        <>
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="DHomeAdd970X90 d-flex justify-content-center mt-4 mb-2">
                                            <img src="media/Advertisement/Advertisement(970X90).png" alt="" title="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        <section class="tarunno-economy-area-news">
                            <div class="container">
                                <div className="row">
                                    <div class="col-lg-4 border-right-inner">
                                        <Youth />
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>





                </>



                {!allComponentsLoaded ?
                    <div className='container'>
                        <div className='row d-flex'>
                            <div className="col-lg-12 col-12 justify-content-between">
                                <img style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={LazyLoaderGIF} alt="loading" title='loading' className='img-fluid img100' />
                            </div>
                        </div>
                    </div> : ''}

            </main>
        </>
    )
}
