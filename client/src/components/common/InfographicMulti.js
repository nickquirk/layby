import { MdOutlineLocalGasStation, MdOutlineWaterDrop } from 'react-icons/md'
import { BiPound, BiEuro } from 'react-icons/bi'
import { GrRestroom } from 'react-icons/gr'
import { TbParking, TbCurrencyDirham } from 'react-icons/tb'
import { RiParkingBoxFill } from 'react-icons/ri'

const InfographicMulti = ({ location }) => {
  const style = { fontSize: '1em' }

  return (
    <div className='widget-container-multi'>
      {location.currency === '£' ?
        <div className='ifg' id='pound-ifg'><BiPound style={style} /></div>
        :
        <></>}
      {location.currency === '€' ?
        <div className='ifg' id='euro-ifg'><BiEuro style={style} /></div>
        :
        <></>}
      {location.currency === 'DH' ?
        <div className='ifg' id='dirham-ifg'><TbCurrencyDirham style={style} /></div>
        :
        <></>}
      {location.water === true ?
        <div className='ifg' id='water-ifg'><MdOutlineWaterDrop style={style} /></div>
        :
        <></>}
      {location.toilets === true ?
        <div className='ifg' id='restroom-ifg'><GrRestroom style={style} /></div>
        :
        <></>}
      {location.freeparking === true ?
        <div className='ifg' id='restroom-ifg'><TbParking style={style} /></div>
        :
        <></>}
      {location.parking === true ?
        <div className='ifg' id='restroom-ifg'><RiParkingBoxFill style={style} /></div>
        :
        <></>}
      <div className='ifg' id='gas-ifg'><MdOutlineLocalGasStation style={style} /></div>
    </div>
  )
}

export default InfographicMulti