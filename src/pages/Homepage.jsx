import Picture from "../components/Picture";
import "./homepage.css";

const Homepage = ({ data }) => {
  return (
    <>
        <div style={{textAlign:"center"}}>
            <h1>Image Gallery</h1>
        </div>
      <div className="container">
        

        {data.map((item, i) => (
          <Picture
            key={i}
            photographer={item.photographer}
            img={item.src.large}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
