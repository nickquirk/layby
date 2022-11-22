import { MdOutlineLocalGasStation, MdOutlineWaterDrop } from 'react-icons/md'
import { BiPound, BiEuro } from 'react-icons/bi'
import { GrRestroom } from 'react-icons/gr'
import { TbParking, TbCurrencyDirham } from 'react-icons/tb'


const Infographic = ({ location }) => {
  console.log('shuffled->', location)
  return (
    <div className='widget-container'>
      {location.currency === '£' ?
        <div className='ifg' id='pound-ifg'><BiPound /></div>
        :
        <></>}
      {location.currency === '€' ?
        <div className='ifg' id='euro-ifg'><BiEuro /></div>
        :
        <></>}
      {location.currency === 'DH' ?
        <div className='ifg' id='dirham-ifg'><TbCurrencyDirham /></div>
        :
        <></>}
      {location.water === true ?
        <div className='ifg' id='water-ifg'><MdOutlineWaterDrop /></div>
        :
        <></>}
      {location.toilets === true ?
        <div className='ifg' id='restroom-ifg'><GrRestroom /></div>
        :
        <></>}
      {location.freeparking === true ?
        <div className='ifg' id='restroom-ifg'><TbParking /></div>
        :
        <></>}
      <div className='ifg' id='gas-ifg'><MdOutlineLocalGasStation /></div>
    </div>
  )
}

export default Infographic