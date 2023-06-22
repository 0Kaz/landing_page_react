
//Possible d'écrire du CSS sur notre composant JS sans faire de css

const styleCard = {
  height: "359px",
  width: "280px",
  boxShadow: "3px 3px 5px 6px #ccc",
  textAlign: "center",
  borderRadius: "5px",
  backgroundColor: "white",
};

const styleSideCard = {
  padding: "10px",
};

const styledImg = {
  width: "264px",
  height: "215px",
  margin: "8px",
};

//Réception des props en rajoutant le paramétre dans la fonction fléché
//Chaque props doit respecter le nom de l'attribut venant du composant parent CitiesSection
const Card = (props) => {
  return (
    <div style={styleCard}>
      <img src={props.image} alt="" style={styledImg} />
      <div style={styleSideCard}>
        <h2>{props.title}</h2>
        <p> {props.text}</p>
      </div>
    </div>
  );
};

export default Card;
