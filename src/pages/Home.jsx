import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewLetterBox from "../components/NewLetterBox"
import Policy from "../components/Policy"



const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewLetterBox />
    </div>
  )
}

export default Home
