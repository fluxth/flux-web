import Image from 'next/legacy/image'
import ConstructionBarImage from '../assets/images/construction_bar.gif'
import UnderConstructionImage from '../assets/images/under_construction.gif'
import UnderConstructionImage2 from '../assets/images/f_unco.png'

const ConstructionBar = () => (
  <Image src={ConstructionBarImage} alt="Construction Bar" unoptimized={true} />
)

const UnderConstruction = () => (
  <div className="text-center">
    <ConstructionBar />
    <h1 className="mb-0">Under Construction</h1>
    <p className="mb-4">
      Whoops, This page isn&apos;t available yet :(
      <br />
      <i>Please check back later!</i>
    </p>
    <ConstructionBar />
    <div className="my-4">
      <Image src={UnderConstructionImage} alt="Under Construction" unoptimized={true} />
      <div className="mb-3"></div>
      <Image src={UnderConstructionImage2} alt="Under Construction" unoptimized={true} />
    </div>
  </div>
)

export default UnderConstruction
