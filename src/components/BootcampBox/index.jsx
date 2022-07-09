import { Link } from "react-router-dom";
import "./style.css";

function BootcampBox({bootcamp , empresa , tecnologias ,  button, styleComponent,thumbNail}) {
  return (
    <div>
      <div className="row d-flex bootcamp" style={styleComponent}>
        <div className="col-lg-3  p-2 py-4  ">
          
            {thumbNail}
          
        </div>

        <div className="d-flex justify-content-center align-items-center  col-lg-7 col-md-7 py-4 ">
          <div>
            <h4>{bootcamp}</h4>
            <p>{bootcamp}, {empresa}, {tecnologias}</p>
            <Link to='/DetalheBootcamp' className="link"><button className="mx-auto d-block">{button}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootcampBox;
