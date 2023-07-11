import Picture from "../components/Picture"


const Homepage = ({data}) => {
    
    
  return (
    <div className="container">
        <h1>Image Gallery</h1>

       {data.map((item,i)=>(
        <Picture key={i} photographer={item.photographer} img={item.src.large}/>
        
       ))}
        
    </div>
  )
}

export default Homepage