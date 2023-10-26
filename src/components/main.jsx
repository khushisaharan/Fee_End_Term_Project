import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/img2.jpeg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Discover the latest and trendiest products of this
               season. From fashion to electronics, we
                have a wide range of new arrivals to cater to all 
                your needs. Explore our collection and 
                stay ahead in style and technology!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;