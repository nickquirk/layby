/* eslint-disable comma-dangle */
/* eslint-disable prefer-const */
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import { MdOutlineWaterDrop } from 'react-icons/md'
// import { GrRestroom } from 'react-icons/gr'
// import { TbParking } from 'react-icons/tb'

// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'
// // import RandomCarousel from '../common/Carousel'

// const LocationCard = () => {
//  

//   return (
//     <>
//       <LocationCard locations={locations} />
//       <div className="display-top-rated text-center">
//         <h2 className="m-5">Discover Top Rated Spots</h2>
//       </div>
//       {locations.slice(0, 4).map((loc) => {
//         console.log('Hello')
//         const {
//           name,
//           flag,
//           countryCode,
//           description,
//           freeparking,
//           image,
//           toilets,
//           water,
//           id
//         } = loc
//         console.log(image)
//         return (
//           <Col key={id} sm="6" md="6" lg="3" xl="3" className="char-card mb-4">
//             <Link className="text-decoration-none" to={`/location/${id}`}>
//               <Card className="location-card">
//                 <div
//                   className="card-image"
//                   style={{ backgroundImage: `url(${image})` }}
//                 ></div>
//                 <Card.Body className="d-flex flex-column">
//                   <h4>
//                     <span>{name}</span>
//                   </h4>
//                   <span>{flag}</span>
//                   <p className="card-text">{description}</p>
//                   <span></span>
//                   <div className="icon-container d-flex justify-content-evenly">
//                     <div className="icon">
//                       {toilets === false ? (
//                         <></>
//                       ) : (
//                         <div className="ifg" id="restroom-ifg">
//                           <GrRestroom />
//                         </div>
//                       )}
//                     </div>
//                     <div className="icon">
//                       {freeparking === false ? (
//                         <></>
//                       ) : (
//                         <div className="ifg" id="parking-ifg">
//                           <TbParking />
//                         </div>
//                       )}
//                     </div>
//                     <div className="icon">
//                       {water === false ? (
//                         <></>
//                       ) : (
//                         <div className="ifg" id="water-ifg">
//                           <MdOutlineWaterDrop />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Link>
//           </Col>
//         )
//       })}
//     </>
//   )
// }

// export default LocationCard
