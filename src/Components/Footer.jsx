import React from 'react'
// import axios from 'axios'


const { toBengaliNumber } = require('bengali-number');

const years = new Date().getFullYear()
export default function Footer() {
    // const [scroll, setScroll] = useState([])
    // const [breaking, setBreaking] = useState([])
    // const [ticker, setTicker] = useState(false)
    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_API_URL}active-breaking`)
    //         .then(({ data }) => {
    //             setBreaking(data.breaking);
    //             if (data.breaking.length <= 0) {
    //                 axios
    //                     .get(`${process.env.REACT_APP_API_URL}json/file/generateActiveScroll.json`)
    //                     .then(({ data }) => {
    //                         setScroll(data.data);
    //                         if (data.data.length > 0) {
    //                             setTicker(true)
    //                         }
    //                     });
    //             }
    //             else {
    //                 setTicker(true)
    //             }
    //         });
    // }, [])
    return (
<footer class="footer-area">
    <div class="container">
        <div class="liner"></div>
        <div class="DFooterLogo">
            <a href="/"><img  src={"media/common/logo.png"}
                    alt="NewsTime.net" title="NewsTime.net" class="img-fluid img100" /></a>
        </div>
        <div class="footerTopSection">
            <div class="row">
                <div class="col-lg-3 border-right-inner">
                    <div class="footer-content">
                        <p><a href="#"><strong> সম্পাদক :</strong> নাদিরা কিরণ</a> </p>
                        <p><a href="#"> <strong> প্রকাশক : </strong>কাওসার আহমেদ অপু</a> </p>
                        <p>ই-মেইল: <a href="mailto:info@gmail.com">info@gmail.com</a>
                        </p>
                        <p>ফোন : <a href="tel:৫৫০২৯৮৩২-৩৮">৫৫০২৯৮৩২-৩৮</a></p>
                        <p>
                        <address><a href="#">৪২/১/ক, সেগুনবাগিচা ঢাকা ১০০০, বাংলাদেশ</a></address>
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 border-right-inner">
                    <div class="footer-content">
                        <p><a href="">আমাদের সম্পর্কে</a></p>
                        <p><a href="">যোগাযোগ</a></p>
                        <p><a href="">গোপনীয়তা নীতি</a></p>
                        <p><a href="">বিজ্ঞাপন</a></p>
                    </div>
                </div>
                <div class="col-lg-3 border-right-inner">
                    <div class="footer-content">
                        <p><a href="">APPS</a></p>
                        <p><a href="">NEWSLETTER</a></p>
                        <p><a href="">SMS SUBSCRIPTION</a></p>
                        <p><a href="">ADVERTISEMENT</a></p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-content">
                        <div class="DFooterSocialIcon">
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul class="social-network social-circle">
                                        <li><a href="" target="_blank"><i class="fa-brands fa-facebook-f"></i>
                                                <span>Facebook</span>
                                            </a></li>
                                        <li><a href="#" target="_blank"><i class="fa-brands fa-twitter"></i>
                                                <span>Twitter</span></a></li>
                                        <li><a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i>
                                                <span>Linkedin</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul class="social-network social-circle">
                                        <li><a href="#" target="_blank"><i
                                                    class="fa-brands fa-youtube"></i><span>Youtube</span></a>
                                        </li>
                                        <li><a href="#" target="_blank"><i
                                                    class="fa-brands fa-instagram"></i><span>Instagram</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="DFooterBottomBg">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <p style={{ fontFamily:" SolaimanLipi" }}>&copy; {toBengaliNumber(years)} | <a href="/">নিউজটাইম ডটনেট </a> কর্তৃক সর্বসত্ব ® সংরক্ষিত</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}
