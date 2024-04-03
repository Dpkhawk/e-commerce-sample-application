import { useNavigate } from "react-router";
import Carouseal2 from "../../assests/carouseal2.jpeg";
import Cart from "../../assests/carouseal1.jpeg";
import Carouseal3 from "../../assests/carouseal3.png";

const DashBoard = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/products");
  };
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={Carouseal2} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleClick}
            >
              View Products
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Cart} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleClick}
            >
              View Products
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Carouseal3} alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleClick}
            >
              View Products
            </button>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span classN="sr-only">Next</span>
      </a>
    </div>
  );
};
export default DashBoard;
