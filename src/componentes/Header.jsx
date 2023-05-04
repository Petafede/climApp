function Header(props) {
  return (
    <div>
      <span className="ubicacion">{props.ubicacion}</span>
      <h3 className="temperatura">{props.temperatura}</h3>
      <h4 className="cielo">{props.cielo}</h4>
      <h5 className="maxYmin">{props.maxYmin}</h5>
    </div>
  );
}

export default Header;
