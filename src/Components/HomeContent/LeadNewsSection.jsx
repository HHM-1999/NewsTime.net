import React from 'react'

import LeadNews from './LeadNews';
import ElectionSection from './ElectionSection';
import SelectedVideo from './SelectedVideo'

export default function LeadNewsSection() {

    return (
        <>
            <div className="col-lg-3 col-12 order-lg-first">
                <ElectionSection />
            </div>
            <div className='col-lg-6 border-right-inner  mt-3'>
                <LeadNews />
            </div>
            <div className='col-lg-3 col-12 mt-3'>
                <SelectedVideo />
            </div>

        </>

    )
}
