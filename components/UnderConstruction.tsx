import Image from 'next/image'
import ConstructionBarImage from '../assets/images/construction_bar.gif'
import UnderConstructionImage from '../assets/images/under_construction.gif'

const ConstructionBar = () => (
  <Image src={ConstructionBarImage} alt="Construction Bar" />
)

const UnderConstruction = () => (
  <div className="text-center">
    <ConstructionBar />
    <h1 className="mb-0">Under Construction</h1>
    <p className="mb-4">
      Whoops, This page isn't available yet :(
    </p>
    <ConstructionBar />
    <div className="my-4">
      <Image src={UnderConstructionImage} />
    </div>
  </div>
)

export default UnderConstruction
