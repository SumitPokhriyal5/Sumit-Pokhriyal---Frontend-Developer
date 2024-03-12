import Banner from "../components/Banner"
import IDOEventSection from "../components/IDOEventSection"
import IntroSection from "../components/IntroSection"
import Navbar from "../components/Navbar"
import TokenomicSection from "../components/TokenomicSection"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <IntroSection />
        <IDOEventSection />
        <TokenomicSection />
    </div>
  )
}

export default Home