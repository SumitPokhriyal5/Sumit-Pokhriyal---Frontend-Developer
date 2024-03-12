import Banner from "../components/Banner"
import FAQSection from "../components/FAQSection"
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
        <FAQSection />
    </div>
  )
}

export default Home