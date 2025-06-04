import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewLetterBox from "../components/NewLetterBox"
import Policy from "../components/Policy"



const Home = () => {
  return (
    <div className="px-4  md:px-[6vw] lg:px-[8vw]">
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewLetterBox />
    </div>
  )
}

export default Home
