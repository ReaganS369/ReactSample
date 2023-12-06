/** @format */
function LogoName(props) {
  return (
    <div className="Logo">
      <img className="img" src={props.url} alt={props.name} />
      <h3>{props.name}</h3>
      <h3>{props.source}</h3>
    </div>
  );
}

export default LogoName;
