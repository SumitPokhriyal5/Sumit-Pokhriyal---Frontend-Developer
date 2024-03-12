import Banner from "../components/Banner"
import IDOEventSection from "../components/IDOEventSection"
import IntroSection from "../components/IntroSection"
import Navbar from "../components/Navbar"
import RoadMapSection from "../components/RoadMapSection"
import TokenomicSection from "../components/TokenomicSection"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <IntroSection />
        <IDOEventSection />
        <TokenomicSection />
        <RoadMapSection />
    </div>
  )
}

export default Home