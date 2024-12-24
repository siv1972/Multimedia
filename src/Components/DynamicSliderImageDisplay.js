import Loading from "../media/images/Loading/Loading.gif"

const DynamicSliderImageDisplay = ({name,path}) => {
  
  return (
    <>
    <div className='slider-img-crop'>
        {
            <img src={require(`../media/images/${path}`)} alt={name} />
        &&
            <img src={Loading} alt={name} />
        }
    </div> 
    </>
  )
}

export default DynamicSliderImageDisplay