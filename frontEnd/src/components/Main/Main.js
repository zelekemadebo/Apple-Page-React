import React from 'react'
import YouTubeVideos from '../YouTubeVideos/YouTubeVideos'
import FifthSection from './Fifth/FifthSection'
import FirstSection from './First/FirstSection'
import FourthSection from './Fourth/FourthSection'
import SecondSection from './Second/SecondSection'
import SixthSection from './Sixth/SixthSection'
import ThirdSection from './Third/ThirdSection'
import Alert from "../Header/Alert"


function Main() {
  return (
    <>
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <YouTubeVideos />
      
    </>
  )
}

export default Main
