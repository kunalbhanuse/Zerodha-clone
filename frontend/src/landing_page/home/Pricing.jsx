import React from "react";

function Pricing() {
  return (
    <div className="container mr-2">
      <div className="row">
        <div className="col-5">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-1"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 ">
              <img
                src="media/images/pricing0.svg"
                alt="price"
                style={{ width: "50%" }}
              />

              <p>Free account opening</p>
            </div>
            <div className="col p-3 ">
              <img
                src="media/images/pricing0.svg"
                alt="price"
                style={{ width: "50%" }}
              />
              <p>Intraday and F&O</p>
            </div>
            <div className="col p-3 ">
              <img
                src="media/images/other-trades.svg"
                alt="price"
                style={{ width: "50%" }}
              />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
