import axios from 'axios'



const UploadImage = ({ imageFormData, setFormData }) => {

  const handleChange = async (event) => {
    try {
      // Create a new form data object
      const formData = new FormData()
      // Add file field on new object
      formData.append('file', event.target.files[0])
      // Add upload preset
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
      // Send data as Axios reqest to cloudinary API
      const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
      // Add profile image to form data
      setFormData({ ...imageFormData, image: data.secure_url })
      console.log(data)
    } catch (err) {
      console.log(err)
    }
    
  }

  return (
    <div className='field'>
      <input
        className="input"
        name="image"
        type='file'
        onChange={handleChange}
      />
    </div>
  )
}

export default UploadImage