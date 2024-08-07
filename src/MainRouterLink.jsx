import React from 'react';
import { Route, Routes } from "react-router-dom";
import Archives from './Components/Archives';
import Category from './Components/Category/Category';
import SubCategory from './Components/Category/SubCategory';
import DivisionSlug from './Components/Country/DivisionSlug';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import SearchResult from './Components/SearchResult';


export default function MainRouterLink() {
    return (
        <div className="main-site">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:searchSlug" element={<SearchResult />} />
                <Route path="/:catSlug" element={<Category />} />
                <Route path="/:catSlug/:subCatSlug" element={<SubCategory />} />
                <Route path="/divisions/:divisionSlug" element={<DivisionSlug />} />
                <Route path="/archives" element={<Archives />} />
                <Route path="/search/:searchSlug" element={<SearchResult />} />
                <Route path="/*" element={<ErrorPage />} />
                {/* <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />

                <Route path="/live" element={<Live />} />
                <Route path="/pollresult" element={<OnlinePollDetails />} />
                
                <Route path="/:catSlug" element={<Category />} />
                <Route path="/:catSlug/:subCatSlug" element={<SubCategory />} />
                <Route path="/:catSlug/news/:id" element={<Details />} />
                <Route path="/tags/:TagTitle" element={<TagPage />} />
                <Route path="/all_tags" element={<AllTagList />} />
                <Route path="/writers/:WriterSlug" element={<WritersPage />} />
                <Route path="/all_writers" element={<AllWriters />} />
                <Route path="/video" element={<VideoGallery />} />
                <Route path="/video/cat/:vdoSlug" element={<VideoCategory />} />
                <Route path="/video/show/:vdoID" element={<VideoDetails />} />
                <Route path="/divisions/:divisionSlug/:dristrictSlug" element={<DistrictSlug />} />
                <Route path="/photo-feature" element={<CategoryPhotoFeature />} />
                <Route path="/photo-feature/news/:photoID" element={<DetailsPhotoFeature />} />
               
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-service" element={<Terms />} />
                <Route path="/advertise" element={<AdvertisementPage />} />
                <Route path="/namaj" element={<DPrayerTime />} />

                <Route path="/*" element={<ErrorPage />} /> */}

            </Routes>
            <Footer />
        </div>


    )
}