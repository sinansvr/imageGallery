import "./picture.css"

const Picture = ({img,photographer}) => {
  return (
    <>
    <div className="pictureContainer" >
        <img src={img} alt="img" />
        <h3>{photographer}</h3>
    </div>
    </>
  )
}

  

export default Picture