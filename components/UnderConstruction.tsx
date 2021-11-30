import Image from 'next/image'
import ConstructionBarImage from '../assets/images/construction_bar.gif'
import UnderConstructionImage from '../assets/images/under_construction.gif'

const ConstructionBar = () => (
  <Image src={ConstructionBarImage} alt="Construction Bar" unoptimized={true} />
)

const UnderConstruction = () => (
  <div className="text-center">
    <ConstructionBar />
    <h1 className="mb-0">Under Construction</h1>
    <p className="mb-4">
      Whoops, This page isn&apos;t available yet :(
    </p>
    <ConstructionBar />
    <div className="my-4">
      <Image src={UnderConstructionImage} alt="Under Construction" unoptimized={true} />
    </div>
  </div>
)

export default UnderConstruction
