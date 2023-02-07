// 'use client';
// import Link from 'next/link'
// import Layout from '../components/Layout'
import WithSubnavigation from '../components/header'
import SplitScreen from '../components/hero';
import SplitWithImage from '../components/features';
import CallToAction from '../components/calltoaction';
import CoreCourses from '../components/corecourses';
import Courses from '../components/courses';
import Special from '../components/special';
import Achive from '../components/achive';
import Feedback from '../components/feedback';
import Footer from '../components/footer';


const IndexPage = () => (
  <>
    <WithSubnavigation />
    <SplitScreen />
    <SplitWithImage />
    <CallToAction />
    <Courses />
    <CoreCourses />
    <Special />
    <Achive />
    <Feedback />
    <Footer />
  </>
)

export default IndexPage
