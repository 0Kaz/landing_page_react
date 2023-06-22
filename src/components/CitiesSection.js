import Card from "./Card"
import casablancaImg from "../images/casablanca.jpg"
import londonImg from "../images/london.jpg"
import shanghaiImg from "../images/shanghai.jpg"
import "./CitiesSection.css"



const CitiesSection = () => {



  const cities_details = [
    {
      image: casablancaImg,
      title: "Casablanca",
      text: "One of the most beautiful city in the world",
    },
    {
      image: londonImg,
      title: "Paris",
      text: "Cosmopolitan city of Joy division ",
    },
    {
      image: shanghaiImg,
      title: "Shanghai",
      text: "The most techie place ever ",
    },
  ];

  return (
    <div className="second-section">
      <div className="container-cards">
        {cities_details.map((e) => {
          return <Card image={e.image} title={e.title} text={e.text} />;
        })}
      </div>
    </div>
  );
}

export default CitiesSection;
