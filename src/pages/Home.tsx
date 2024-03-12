import Banner from "../components/Banner"
import IDOEventSection from "../components/IDOEventSection"
import IntroSection from "../components/IntroSection"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <IntroSection />
        <IDOEventSection />
    </div>
  )
}

export default Home