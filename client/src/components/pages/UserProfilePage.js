import Card from 'react-bootstrap/Card'


const UserProfilePage = () => {
  return (
    <div className="profile-main">
      <h1>User Profile Page</h1>
      <div className='user-details'>
        <img src="https://tinyurl.com/2p8e3n27"></img>
        <h3>Username</h3>
        <p>User info will go here...</p>
      </div>
      <div className='user-content'>
        <div className='user-reviews'>
          <h3>User Reviews</h3>
          <Card className='review-card'>
            <Card.Body>
              <Card.Img variant='top' src='https://tinyurl.com/5atpj5f8'/>
              <Card.Title>Location Name</Card.Title>
              <Card.Text>Review text here...</Card.Text>
            </Card.Body>
          </Card>
        </div>  
        <div className='user-favourites'>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage