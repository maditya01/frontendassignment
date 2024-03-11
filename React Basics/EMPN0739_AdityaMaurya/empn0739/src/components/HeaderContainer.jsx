import React , {useState} from "react";
import logo from '../assets/Images/logo.png';
import user from '../assets/Images/user.png';

export const HeaderContainer = () => {
  const [query, setQuery] = useState("");

  const search = () => {
    if (query.trim() === "") {
      alert("Search Query cannot be Empty!");
    } else {
      window.open(`https://www.bing.com/search?q=${query}`);
      setQuery("");
    }
  };

  const validate = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  return (
    <div className="carousel-container container-fluid">
      <div className="nav">
        <i
          className="fa fa-bars mobile"
          style={{ color: "white", fontSize: "x-large", margin: "0 14px" }}
        ></i>
        <nav>
          <img src={logo} alt="" />
          <a href="#" className="no-mobile active">
            Home
          </a>
          <a href="#" className="no-mobile">
            About Us
          </a>
          <a href="#" className="no-mobile">
            Services
          </a>
          <a href="#" className="no-mobile">
            Contact Us
          </a>
        </nav>

        <div className="input-group no-mobile">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={validate}
            />
          </div>
          <button className="btn btn-primary" onClick={search}>
            <i className="fa fa-search"></i>
          </button>
        </div>

        <i
          className="fa fa-search mobile"
          style={{ color: "white", fontSize: "large", margin: "0 14px" }}
        ></i>

        <div className="profile no-mobile">
          <img src={user} alt="" />

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Danial
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-interval="false"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="wrapper w-100">
              <h1>Carousel 1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet ultrices erat.
              </p>
              <button>Explore</button>
            </div>
          </div>
          <div className="carousel-item">
            <div className="wrapper w-100">
              <h1>Carousel 2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet ultrices erat.
              </p>
              <button>Explore</button>
            </div>
          </div>
          <div className="carousel-item">
            <div className="wrapper w-100">
              <h1>Carousel 3</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet ultrices erat.
              </p>
              <button>Explore</button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
