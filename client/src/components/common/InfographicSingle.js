import { MdOutlineLocalGasStation, MdOutlineWaterDrop } from 'react-icons/md'
import { BiPound, BiEuro } from 'react-icons/bi'
import { GrRestroom } from 'react-icons/gr'
import { TbParking, TbCurrencyDirham } from 'react-icons/tb'
import { RiParkingBoxFill } from 'react-icons/ri'

const InfographicSingle = ({ location }) => {
  const style = { fontSize: '1em' }

  return (
    <div className='widget-container'>
      {location.currency === '£' ?
        <div className='ifg' id='pound-ifg'><BiPound style={style} /><p className='widget-text'>British Pound</p></div>
        :
        <></>}
      {location.currency === '€' ?
        <div className='ifg' id='euro-ifg'><BiEuro style={style} /><p className='widget-text'>Euro</p></div>
        :
        <></>}
      {location.currency === 'DH' ?
        <div className='ifg' id='dirham-ifg'><TbCurrencyDirham style={style} /><p className='widget-text'>Moroccan Dirham</p></div>
        :
        <></>}
      {location.water === true ?
        <div className='ifg' id='water-ifg'><MdOutlineWaterDrop style={style} /><p className='widget-text'>Drinking Water Available</p></div>
        :
        <></>}
      {location.toilets === true ?
        <div className='ifg' id='restroom-ifg'><GrRestroom style={style} /><p className='widget-text'>Toilet Facilities Onsite</p></div>
        :
        <></>}
      {location.freeparking === true ?
        <div className='ifg' id='restroom-ifg'><TbParking style={style} /><p className='widget-text'>Free Parking on Site</p></div>
        :
        <></>}
      {location.parking === true ?
        <div className='ifg' id='restroom-ifg'><RiParkingBoxFill style={style} /><p className='widget-text'>Paid Parking on Site</p></div>
        :
        <></>}
      <div className='ifg' id='gas-ifg'><MdOutlineLocalGasStation style={style} /><p className='widget-text'>Nearest Fuel: {location.nearestFuel}km</p></div>
    </div>
  )
}

export default InfographicSingle