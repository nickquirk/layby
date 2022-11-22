export const ReviewDisplay = ({ location }) => {
  console.log('Review Display Location', location.reviews)
  return (
    <>
      <h1 className='community-reviews'>Community Reviews:</h1>
      {/*  */}
      <div className='review-display'>
        <h4>Username</h4>
        <span>Star Rating</span>
        <p>Review Tesxt</p>
      </div>
    </>
  )
}

export default ReviewDisplay