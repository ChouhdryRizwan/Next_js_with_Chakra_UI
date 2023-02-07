// 'use client';

import WithSubnavigation from '../components/header'
import MetaverseTitle from '../components/metaverse/title'
import CoreCourses from '../components/corecourses'
import Desc from '../components/metaverse/description'
import Footer from '../components/footer'



const Metaverse = () => (
    <>
        <WithSubnavigation />
        <MetaverseTitle />
        <CoreCourses />
        <Desc />
        <Footer />
    </>
)

export default Metaverse
