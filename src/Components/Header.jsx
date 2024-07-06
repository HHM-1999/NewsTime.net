import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {  banglaDateConvetar } from './AllFunctions'
import { getDate, getMonth, getYear } from 'bangla-calendar';
import moment from 'moment-hijri';
const date1 = new Date();
let bnDate = getDate(date1, { format: 'D' })
let bnMonth = getMonth(date1, { format: 'MMMM' })
let bnYear = getYear(date1, { format: 'YYYY' })
let BNDATEs = bnDate + ' ' + bnMonth + ' ' + bnYear
const currentDate = moment().format('DD MMMM YYYY')
const currentDay = moment().format('dddd')
// var arabicDate = moment().subtract(1, 'days').format('iDD iMMMM iYYYY');

var todaysDate = new Date();
todaysDate.setDate(todaysDate.getDate() - 1);


var navbar
var sticky = 0
// var navbarMobile
// var sticky2 = 0
export default function Header() {

    let navigate = useNavigate();
    // const [showSubCat, setShowSubCat] = useState(false);
    // const [showSubCat1, setShowSubCat1] = useState(false);
    // const [showSubCat2, setShowSubCat2] = useState(false);
    // const [showSubCat3, setShowSubCat3] = useState(false);
    // const [showSubCat4, setShowSubCat4] = useState(false);
    // const [showSubCat5, setShowSubCat5] = useState(false);
    // const [showSubCat6, setShowSubCat6] = useState(false);
    // const [showSubCat7, setShowSubCat7] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', myFixedNav);
        navbar = document.getElementById("myHeader");
        sticky = navbar.offsetTop;
        // navbarMobile = document.getElementById("myHeader2");
        // sticky2 = navbarMobile.offsetTop;

    }, [])

    function myFixedNav() {
        navbar = document.getElementById("myHeader");
        // navbarMobile = document.getElementById("myHeader2");
        if (navbar) {
            if (window.pageYOffset > sticky) {
                navbar = document.getElementById("myHeader");
                navbar.classList.add("sticky");
            } else {
                navbar = document.getElementById("myHeader");
                navbar.classList.remove("sticky");
            }
        }
        // if (navbarMobile) {
        //     if (window.pageYOffset > sticky2) {
        //         navbarMobile = document.getElementById("myHeader2");
        //         navbarMobile.classList.add("sticky2");
        //     } else {
        //         navbarMobile = document.getElementById("myHeader2");
        //         navbarMobile.classList.remove("sticky2");
        //     }
        // }
    }

    // function mobileHeader() {
    //     var x = document.getElementById("mobile-nav");
    //     var element2 = document.getElementById("closeBTN1");
    //     var element = document.getElementById("menuBTN1");
    //     if (x.style.display === "block") {
    //         x.style.display = "none";
    //         element2.classList.add('hide')
    //         element2.classList.remove('show')
    //         element.classList.add('show')
    //         element.classList.remove('hide')
    //     } else {
    //         x.style.display = "block";
    //         element2.classList.add('show')
    //         element2.classList.remove('hide')
    //         element.classList.add('hide')
    //         element.classList.remove('show')
    //     }
    // }

    // function mobileHeaderSearch(e) {
    //     e.preventDefault();
    //     var searchWeb = document.getElementById("deskSearch");
    //     if (searchWeb.style.display === "none") {
    //         searchWeb.style.display = "block";
    //     } else {
    //         searchWeb.style.display = "none";
    //     }
    //     var searchMobile = document.getElementById("mobileSearchBar");
    //     if (searchMobile.style.display === "none") {
    //         searchMobile.style.display = "block";
    //     } else {
    //         searchMobile.style.display = "none";
    //     }
    // }

    const handelSubmit = (e) => {
        e.preventDefault();
        const txt = e.target.q.value;
        navigate('/search/' + txt)
    }
    return (
        <>
            {/* <header>
                <div className="HeaderTopBar stickyHide">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="DateTime h-100 d-flex align-items-center ">
                                    <p className="date">
                                        <i className="fas fa-calendar"></i>&nbsp;{banglaDateConvetar(currentDay)}, {banglaDateConvetar(currentDate)}, {BNDATEs}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12 d-flex justify-content-end">
                                <div className="SocialIcon">
                                    <ul>
                                        <li className="LiveTV"><a href='/namaj'>নামাজের সময়</a></li>
                                        <li className="LiveTV"><a href="/todays-sports">আজকের খেলা</a></li>
                                        <li className="LiveTV"><a href="/horoscope">রাশিফল</a></li>
                                        <li className="fb-icon"><a href="https://www.facebook.com/thenews24digital/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="yt-icon"><a href="https://www.youtube.com/@thenewsdhaka/" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
                                        <li className="tw-icon"><a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                                        <li className="li-icon"><a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                        <li className="icoInstagram"><a href="#" target="_blank" rel="noreferrer" ><i class="fab fa-instagram"></i></a></li>
                                        <li className="icoWhatApp"><a href="#" target="_blank" rel="noreferrer" ><i class="fab fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="DLogoArea">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <div className="DLogo d-flex justify-content-start">
                                    <a href="/">
                                        <img src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="TheNews24 || দ্য নিউজ ২৪" title="TheNews24 || দ্য নিউজ ২৪" className="img-fluid img100" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="DHeaderAdd d-flex justify-content-end">
                                    <a href="/">
                                        <img src={"/media/Advertisement/56.png"} className="img-fluid img100 border" alt="advertisment" title="advertisment" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="myHeader" className="header d-print-none">
                    <div className="DHeaderNav Mobilehide">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                        <Link to="/" className="StickyLogo" rel="home" onClick={scrollTop}>
                                            <img src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="TheNews24 || দ্য নিউজ ২৪" title="TheNews24 || দ্য নিউজ ২৪" className="img-fluid img100" />
                                        </Link>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav">
                                                <li className="nav-item"><Link className="nav-link" to="/national" onClick={scrollTop}>জাতীয়</Link></li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" to="/international" id="navbarDropdown" onClick={scrollTop} role="button" data-bs-toggle="dropdown disable" aria-expanded="false">আন্তর্জাতিক </Link>
                                                    <ul className="dropdown-menu DiplayInline" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/international/asia">এশিয়া</Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/international/south-asia">দক্ষিণ এশিয়া</Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/international/middle-east">মধ্যপ্রাচ্য </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/international/europe">ইউরোপ </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/international/usa">যুক্তরাষ্ট্র </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/international/russia">রাশিয়া </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/international/feature-international">ফিচার </Link></li>

                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/international/international-extra">অন্যান্য </Link></li>
                                                    </ul>
                                                </li>
                                             
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" to="/country" id="navbarDropdown" role="button" data-bs-toggle="dropdown disable" aria-expanded="false">স্বদেশ </Link>
                                                    <ul className="dropdown-menu DiplayInline" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/divisions/dhaka">ঢাকা </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/divisions/chattogram">চট্টগ্রাম </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/divisions/barishal">বরিশাল </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/divisions/khulna">খুলনা </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/divisions/rajshahi">রাজশাহী</Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/divisions/sylhet">সিলেট </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/divisions/rangpur">রংপুর</Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/divisions/mymensingh">ময়মনসিংহ</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/politics">রাজনীতি</Link></li>
                                                <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/crime">অপরাধ </Link></li>

                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" to="/sports" onClick={scrollTop} id="navbarDropdown" role="button" data-bs-toggle="dropdown disable" aria-expanded="false">ক্রীড়াঙ্গন </Link>
                                                    <ul className="dropdown-menu DiplayInline" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/sports/football">ফুটবল </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/sports/cricket">ক্রিকেট </Link></li>
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/sports/sports-others">অন্যান্য </Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/entertainment">বিনোদন </Link></li>
                                              
                                                <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/trade">বাণিজ্য </Link></li>
                                            
                                                <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/migration">প্রবাস </Link></li>

                                              
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" onClick={scrollTop} to="/religion" id="navbarDropdown" role="button" data-bs-toggle="dropdown disable" aria-expanded="false">ধর্ম ও জীবন </Link>
                                                    <ul className="dropdown-menu DiplayInline" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/religion/islam">ইসলাম</Link></li>
                                                       
                                                        <li><Link className="dropdown-item" onClick={scrollTop} to="/religion/religion-others">অন্যান্য</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/opinion">মতামত </Link></li>
                                                <li className="nav-item"><Link className="nav-link" onClick={scrollTop} to="/video">ভিডিও </Link></li>
                                                <li className="nav-item dropdown has-megamenu">
                                                    <Link className="nav-link dropdown-toggle" onClick={scrollTop} to="#">অন্যান্য</Link>
                                                    <div className="dropdown-menu megamenu" role="menu">
                                                        <div className="row w-100 ">
                                                            <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                <ul className="nav flex-column">
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/court-law">আইন ও বিচার</Link></li>
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/education">শিক্ষা</Link></li>
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/motivation">অনুপ্রেরণা</Link></li>


                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                <ul className="nav flex-column">
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/jobs">চাকরি</Link></li>
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/health">স্বাস্থ্য</Link></li>

                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/photo-feature">ছবিঘর</Link></li>


                                                                </ul>
                                                            </div>


                                                            <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                <ul className="nav flex-column">
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/information-technology">তথ্য প্রযুক্তি</Link></li>
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/environment-and-climate">পরিবেশ ও জলবায়ু</Link></li>



                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                <ul className="nav flex-column">
                                                                  


                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/lifestyle">লাইফস্টাইল</Link></li>
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/agriculture">কৃষি</Link></li>


                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                <ul className="nav flex-column">
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/the-news-special">দ্য নিউজ স্পেশাল</Link></li>
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/reader-s-news">পাঠকের সংবাদ</Link></li>
                                                                    <li><Link className="dropdown-item" onClick={scrollTop} to="/archives">আর্কাইভ</Link></li>

                                                                </ul>
                                                            </div>


                                                        </div>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                        <a href="/" className="MBLogo" rel="home">
                                            <img src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="TheNews24 || দ্য নিউজ ২৪" title="TheNews24 || দ্য নিউজ ২৪" className="img-fluid img100" />
                                        </a>
                                        <div className="d-flex justify-content-end SearchArea" >
                                            <div className="search">
                                                <i onClick={mobileHeaderSearch} className="fas fa-search" aria-hidden="true"></i>
                                                <div className="search-box" id="mobileSearchBar" style={{ display: 'none' }} >
                                                    <form onSubmit={handelSubmit}>
                                                        <div className="searchArea">
                                                            <input name="q" type="text" placeholder="এখানে লিখুন..." aria-describedby="button-addon3" />
                                                         
                                                            <button id="button-addon3" className='search-btn' type="submit" aria-label="submit">খুঁজুন</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>



                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="MobileMenu MobileShow  d-print-none" id="myHeader2" >
                    <div className="container TopMenu">
                        <div className="row">
                            <div className="col-2 d-flex align-items-center justify-content-start">
                                <div className="mr-auto menu-left" onClick={mobileHeader}>
                                    <span id="menuBTN1" className="menu-button fas fa-bars show"></span>
                                    <span><i className="fa-solid fa-xmark hide" id="closeBTN1"></i></span>
                                </div>

                            </div>
                            <div className="col-8 d-flex align-items-center justify-content-center">
                                <div className="mobLogo">
                                    <Link to="/" onClick={scrollTop}>
                                        <img src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="TheNews24 || দ্য নিউজ ২৪" title="TheNews24 || দ্য নিউজ ২৪" className="img-fluid img100" />
                                    </Link>

                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center justify-content-end">
                                <div className="menu-search" onClick={mobileHeaderSearch}>
                                    <Link className="nav-link-search" to="#">
                                        <i className="fa fa-search"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search_block Hide" id="deskSearch">
                        <div className="container">
                            <div className="col-xl p-0">
                                <form onSubmit={handelSubmit} action="/search" method="get">
                                    <div className="search_logo display-flex" style={{ textAlign: 'center' }}>
                                        <input type="text" name="q" placeholder="নিউজ খুঁজতে এখানে লিখুন" className="form-control" />
                                        <button type="submit" aria-label="submit" ><i className="fa fa-search"></i></button>
                                        <button onClick={mobileHeaderSearch} className="close-search" aria-label="close search"><i className="fa fa-times"></i></button>
                                    </div>
                                </form>
                             
                            </div>
                        </div>
                    </div>
                    <div className="container MobileMenu hide" id="mobile-nav">
                        <div className="row LiveViewMenu">
                            <div className="col-xl">
                                <div className="MobileMenuTop">
                                    <div className="row pb-4">
                                        <div className="col-xl p-0">
                                            <div className="container extended d-flex justify-content-center align-items-center">
                                                <div className="social-links ">
                                                    <a href="https://www.facebook.com/thenews24digital/" target="_blank" rel="noreferrer" ><i className="fab fa-facebook-f fb icon"></i></a>
                                                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in linkedin icon" ></i></a>
                                                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter twitter icon"></i></a>
                                                    <a href="https://www.youtube.com/@thenewsdhaka/" target="_blank" rel="noreferrer"><i className="fab fa-youtube youtube icon"></i></a>
                                                    <a href="#" target="_blank" rel="noreferrer" ><i class="fab fa-instagram instra"></i></a>
                                                    <a href="#" target="_blank" rel="noreferrer" ><i class="fab fa-whatsapp whatsapp"></i></a>

                                                </div>


                                            </div>

                                        </div>
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className="SportsButton d-flex justify-content-center">
                                                <a href='/namaj'>নামাজের সময়</a>
                                                <a href="/todays-sports">আজকের খেলা</a>
                                                <a href="/horoscope">রাশিফল</a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <ul>
                                                <li className="nav-item" onClick={mobileHeader}><Link className="nav-link" to="/national" onClick={scrollTop}>জাতীয়</Link></li>
                                              
                                                <div className='MobileMenu-Heading '  >
                                                    <li className="mr-auto d-flex justify-content-between" >
                                                        <h3 onClick={mobileHeader}><Link onClick={scrollTop} to="/international" className=' nav-link parent'>আন্তর্জাতিক</Link></h3>
                                                        <h3 onClick={() => setShowSubCat1(!showSubCat1)}>{showSubCat1 ? <i className=" fa-solid fa-xmark  rotate"></i> : <i className="fas fa-plus open-menu  "></i>}</h3>
                                                    </li>
                                                    {showSubCat1 &&
                                                        <ul className='SubMenuM'>
                                                            <li onClick={mobileHeader}><Link to="/international/asia" onClick={scrollTop}>এশিয়া</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/international/south-asia" onClick={scrollTop}>দক্ষিণ এশিয়া</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/international/middle-east" onClick={scrollTop}>মধ্যপ্রাচ্য</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/international/europe" onClick={scrollTop}>ইউরোপ</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/international/usa" onClick={scrollTop}>যুক্তরাষ্ট্র</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/international/russia" onClick={scrollTop}>রাশিয়া</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/international/feature-international" onClick={scrollTop}>ফিচার</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/international/international-extra" onClick={scrollTop}>অন্যান্য</Link></li>
                                                        </ul>
                                                    }
                                                </div>
                                                <div className='MobileMenu-Heading '  >
                                                    <li className="mr-auto d-flex justify-content-between" >
                                                        <h3 onClick={mobileHeader}><Link onClick={scrollTop} to="/country" className=' nav-link parent'>স্বদেশ </Link></h3>
                                                        <h3 onClick={() => setShowSubCat7(!showSubCat7)}>{showSubCat7 ? <i className=" fa-solid fa-xmark  rotate"></i> : <i className="fas fa-plus open-menu  "></i>}</h3>
                                                    </li>
                                                    {showSubCat7 &&
                                                        <ul className='SubMenuM'>
                                                            <li onClick={mobileHeader}><Link to="/divisions/dhaka" onClick={scrollTop}>ঢাকা</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/divisions/chattogram" onClick={scrollTop}>চট্টগ্রাম</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/divisions/barishal" onClick={scrollTop}>বরিশাল</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/divisions/khulna" onClick={scrollTop}>খুলনা</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/divisions/rajshahi" onClick={scrollTop}>রাজশাহী</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/divisions/sylhet" onClick={scrollTop}>সিলেট</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/divisions/rangpur" onClick={scrollTop}>রংপুর</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/divisions/mymensingh" onClick={scrollTop}>ময়মনসিংহ</Link></li>
                                                        </ul>
                                                    }
                                                </div>
                                                
                                                <li className="nav-item" onClick={mobileHeader}><Link className="nav-link" to="/politics" onClick={scrollTop}>রাজনীতি</Link></li>
                                                <li className="nav-item" onClick={mobileHeader}><Link className="nav-link" to="/crime" onClick={scrollTop}>অপরাধ</Link></li>
                                                <div className='MobileMenu-Heading  '>
                                                    <li className="mr-auto d-flex  justify-content-between">
                                                        <h3 onClick={mobileHeader}><Link onClick={scrollTop} to="/sports" className='nav-link parent'>ক্রীড়াঙ্গন</Link></h3>
                                                        <h3 onClick={() => setShowSubCat2(!showSubCat2)}>{showSubCat2 ? <i className=" fa-solid fa-xmark  rotate"></i> : <i className="fas fa-plus open-menu  "></i>}</h3>
                                                    </li>
                                                    {showSubCat2 &&
                                                        <ul className='SubMenuM'>
                                                            <li onClick={mobileHeader}><Link to="/sports/football" onClick={scrollTop}>ফুটবল</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/sports/cricket" onClick={scrollTop}>ক্রিকেট</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/sports/sports-others" onClick={scrollTop}>অন্যান্য</Link></li>
                                                        </ul>
                                                    }
                                                </div>
                                                <li className="nav-item" onClick={mobileHeader}><Link className="nav-link" to="/entertainment" onClick={scrollTop}>বিনোদন</Link></li>
                                                <li className="nav-item" onClick={mobileHeader}><Link className="nav-link" to="/trade" onClick={scrollTop}>বাণিজ্য</Link></li>
                                                <li className="nav-item" onClick={mobileHeader}><Link className="nav-link" to="/migration" onClick={scrollTop}>প্রবাস</Link></li>
                                                <div className='MobileMenu-Heading '>
                                                    <li className="mr-auto d-flex  justify-content-between">
                                                        <h3 onClick={mobileHeader}><Link onClick={scrollTop} to="/religion" className='nav-link parent'>ধর্ম ও জীবন</Link></h3>
                                                        <h3 onClick={() => setShowSubCat6(!showSubCat6)}>{showSubCat6 ? <i className=" fa-solid fa-xmark  rotate"></i> : <i className="fas fa-plus open-menu  "></i>}</h3>
                                                    </li>
                                                    {showSubCat6 &&
                                                        <ul className='SubMenuM'>
                                                            <li onClick={mobileHeader}><Link to="/religion/islam" onClick={scrollTop}>ইসলাম</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/religion/religion-others" onClick={scrollTop}>অন্যান্য</Link></li>

                                                        </ul>
                                                    }
                                                </div>
                                                <li className="nav-item" onClick={mobileHeader}><Link className="nav-link" to="/opinion" onClick={scrollTop}>মতামত</Link></li>
                                                <div className='MobileMenu-Heading'>
                                                    <li className="mr-auto d-flex justify-content-between">
                                                        <h3 onClick={mobileHeader}><Link onClick={scrollTop} to="/others" className='nav-link parent'>অন্যান্য</Link></h3>
                                                        <h3 onClick={() => setShowSubCat(!showSubCat)}>{showSubCat ? <i className=" fa-solid fa-xmark  rotate"></i> : <i className="fas fa-plus open-menu  "></i>}</h3>
                                                    </li>
                                                    {showSubCat &&
                                                        <ul className='SubMenuM'>
                                                            <li onClick={mobileHeader}><Link to="/court-law" onClick={scrollTop}>আইন ও বিচার </Link></li>
                                                            <li onClick={mobileHeader}><Link to="/education" onClick={scrollTop}>শিক্ষা</Link></li>
                                                    
                                                            <li onClick={mobileHeader}><Link to="/health" onClick={scrollTop}>স্বাস্থ্য</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/information-technology" onClick={scrollTop}>তথ্য প্রযুক্তি</Link></li>
                                                            
                                                            <li onClick={mobileHeader}><Link to="/the-news-special" onClick={scrollTop}>দ্য নিউজ স্পেশাল</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/reader-s-news" onClick={scrollTop}>পাঠকের সংবাদ</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/motivation" onClick={scrollTop}>অনুপ্রেরণা</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/jobs" onClick={scrollTop}>চাকরি</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/photo-feature" onClick={scrollTop}>ছবিঘর</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/video" onClick={scrollTop}>ভিডিও</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/agriculture" onClick={scrollTop}>কৃষি</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/environment-and-climate" onClick={scrollTop}>পরিবেশ ও জলবায়ু</Link></li>
                                                            <li onClick={mobileHeader}><Link to="/archives" onClick={scrollTop}>আর্কাইভ</Link></li>
                                                        </ul>
                                                    }
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
            <header>
                <div class="DHeaderTop2 MobileHide">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="DHomeAdd970X90 d-flex justify-content-center mt-1">
                                    <img src={"media/Advertisement/145142-1683193093.jpeg"}
                                        alt="Advertisement " title="advertisement" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div class="DLogoArea">
                            <div class="row">
                                <div class="col-4 col-md-3 d-flex align-items-center justify-content-start">
                                    <div class="DLogo">
                                        <a href="/"><img class="img-fluid" src={"media/common/logo.png"}
                                            alt="NewsTime.net" title="NewsTime.net" /></a>
                                    </div>
                                </div>
                                <div class="col-4 col-md-6 d-flex align-items-center justify-content-center">
                                    <div class="DHomeAdd d-flex justify-content-center mb-2">
                                        <img src={"media/Advertisement/Advertisement(728X90).png"} alt="advertisement"
                                            title="advertisement" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-4 col-md-3">
                                    <div class="serach-social-sec">
                                        <div class="row">
                                            <div class="col-lg-7">
                                                <div class="search">
                                                    <input onSubmit={handelSubmit} type="text" class="searchTerm" placeholder="এখানে লিখুন..." />
                                                    <button type="submit" class="searchButton">
                                                        <i class="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-lg-5 d-flex justify-content-end ps-0">
                                                <div class="social-icon">
                                                    <div class="DSocialLink">
                                                        <ul>
                                                            <li><a href="" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                                            </li>
                                                            <li><a href="" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                                            <li><a href="" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                                            <li><a href="" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                                            <li><a href="" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="DateTime d-flex align-items-center justify-content-end">
                                        <div class="DateTimeBn">
                                            <p className="date">
                                                <i className="fa-sharp fa-solid fa-calendar-days"></i>&nbsp;{banglaDateConvetar(currentDay)}, {banglaDateConvetar(currentDate)}, {BNDATEs}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="myHeader" class="MobileHide">
                        <div class="DHeaderNav">
                            <div class="container">
                                <nav class="navbar navbar-expand-lg navbar-light">
                                    <a href="/" class="StickyLogo" rel="home">
                                        <img src={"media/common/logoSM.png"}
                                            title="NewsTime.net" alt="NewsTime.net"
                                            class="img-fluid img100 mobile-hide" />
                                        <img src={"media/common/logo.png"} title="NewsTime.net"
                                            alt="NewsTime.net" class="img-fluid img100 pc-hide" />
                                    </a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav justify-content-center">
                                            <li class="nav-item"><a class="nav-link" href="index.php">হোম </a></li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    বাংলাদেশ </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#"> জাতীয়</a></li>
                                                    <li><a class="dropdown-item" href="#"> রাজধানী </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">দেশ </a></li>
                                                    <li><a class="dropdown-item" href="#">অনুসন্ধান </a></li>
                                                    <li><a class="dropdown-item" href="#">নিউজটাইম স্পেশাল </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">রাজনীতি </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">আইন-অপরাধ </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">ইভেন্ট </a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    অর্থ-বাণিজ্য </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#"> অর্থনীতি </a></li>
                                                    <li><a class="dropdown-item" href="#">বাণিজ্য</a></li>
                                                    <li><a class="dropdown-item" href="#">অন্যান্য</a></li>

                                                </ul>
                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="#">আন্তর্জাতিক</a></li>
                                           
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    খেলা </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">ক্রিকেট</a></li>
                                                    <li><a class="dropdown-item" href="#"> ফুটবল</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">অন্যান্য</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    বিনোদন </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">শোবিজ </a></li>
                                                    <li><a class="dropdown-item" href="#"> মিউজিক</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">অন্যান্য</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    শিক্ষা</a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">ক্যাম্পাস </a></li>
                                                    <li><a class="dropdown-item" href="#"> পরীক্ষা </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">শিক্ষক </a></li>
                                                    <li><a class="dropdown-item" href="#">অন্যান্য</a></li>

                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    স্বাস্থ্য </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">শারীরিক স্বাস্থ্য</a></li>
                                                    <li><a class="dropdown-item" href="#">মানসিক স্বাস্থ্য</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">প্রজনন</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">অন্যান্য</a></li>

                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    জীবনযাপন </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">ঐতিহ্য </a></li>
                                                    <li><a class="dropdown-item" href="#">সাহিত্য</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">শিল্প </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">উৎসব</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">ধর্ম</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">ট্রেন্ড </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">রূপচর্চা </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">টিপস </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">ফুড অ্যান্ড ট্রাভেল </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">সোশ্যাল মিডিয়া </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">বিচিত্র</a></li>

                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    তারুণ্য </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">চাকরি-ক্যারিয়ার</a></li>
                                                    <li><a class="dropdown-item" href="#">উদ্যোগ</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">অন্যান্য</a></li>

                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    বিজ্ঞান-প্রযুক্তি</a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">বিজ্ঞান</a></li>
                                                    <li><a class="dropdown-item" href="#">প্রযুক্তি</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">পরিবেশ</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">অন্যান্য</a></li>

                                                </ul>
                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="#">ফ্যাক্টচেক</a></li>

                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="category.php" data-bs-toggle="dropdown">
                                                    রেস-জেন্ডার </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">নারী </a></li>
                                                    <li><a class="dropdown-item" href="#">পুরুষ </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">ট্রান্সজেন্ডার</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">রেস </a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">অন্যান্য</a></li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- <li class="nav-item menu-search">
                            <a class="nav-link nav-link-search" href="#">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </li> --> */}
                                </nav>
                                {/* <div class="search-block-bottom">
                        <div class="search_block Hide">
                            <div class="container">
                                <div class="col-lg p-0">
                                    <form action="" method="get">
                                        <div class="search_logo display-flex">
                                            <input type="text" name="title" placeholder="এখানে খুঁজুন...">
                                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                            <a href="" class="close-search"><i class="fa-solid fa-xmark"></i></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  */}
                            </div>
                        </div>

                    </div>
                </div >
            </header >
        </>
    )
}
