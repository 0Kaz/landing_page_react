import "./Button.css"

const linkWebsite = () =>{
  window.location.href = "https://www.lewagon.com/casablanca";
}

const Button = () => {
  return <button type="button" onClick={() => {linkWebsite()}}>Click here</button>;
}

export default Button;
