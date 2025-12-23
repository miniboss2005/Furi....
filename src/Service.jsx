import React from "react";

function Service() {
  return (
    <div className="overflow-hidden">
      {/* ================= FIRST SECTION ================= */}
      <div className="container-fluid color py-4">
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div className="col-lg-6 col-md-6 col-12 slide-right">
            <h1 className="m-3 text-white">Service</h1>
            <p className="m-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              perferendis id et saepe reiciendis corporis soluta quia doloremque
              eligendi natus praesentium ipsum labore esse tempora voluptatibus.
            </p>
            <button className="m-3 btn-home">Submit</button>
            <button className="m-3 btn1-home">Submit</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center slide-right">
            <img
              src="src/assets/classic-tufted-sofa-isolated-white-background-digital-illustration-3d-rendering_154979-1039-removebg-preview.png" className="img-fluid"alt="sofa"/>
          </div>
        </div>
      </div>


      {/* ================= WHY CHOOSE US ================= */}
      <div className="container-fluid back py-4 slide-right">
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div className="col-lg-6 col-md-12 col-12 mb-4">
            <h1 className="m-3">Why Choose us?</h1>
            <p className="m-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
              excepturi perferendis suscipit in id quod ullam sit assumenda.
            </p>

            {/* FEATURES BOXES */}
            <div className="flex-wrap py-3 ">
              <div className="d-flex flex-wrap">
                {/* CARD 1 */}
                <div className="feature-box">
                  <div className=" card p-3 h-100">
                    <i className="bi bi-truck fs-4"></i>
                    <h5 className="mt-2">Fast & Free Shipping</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="feature-box">
                  <div className="card p-3 h-100">
                    <i className="bi bi-bag-check fs-4"></i>
                    <h5 className="mt-2">Easy to Buy</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="feature-box">
                  <div className="card p-3 h-100">
                    <i className="bi bi-globe-americas fs-4"></i>
                    <h5 className="mt-2">24/7 Support</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>

                {/* CARD 4 */}
                <div className="feature-box">
                  <div className="card p-3 h-100">
                    <i className="bi bi-arrow-left-right fs-4"></i>
                    <h5 className="mt-2">Easy Return</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid py-4 background">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <h5 className="mb-3 fs-3">
                  <i className="bi bi-envelope me-2"></i> Subscribe to Newsletter
                </h5>
                <div className="d-flex flex-wrap gap-3">
                  <input type="text" className="form-control w-auto" placeholder="Enter your name" />
                  <input type="text" className="form-control w-auto" placeholder="Enter your email" />
                  <button className="btn" style={{ backgroundColor: "#3C5D51", color: "white" }}>
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-center">
                <img src="src/assets/costa-live-qRlGiaxZ8SI-unsplash-removebg-preview.png" alt="" className="img-fluid mt-4" style={{ maxWidth: "350px" }} />
              </div>
            </div>


            <div className="row py-1">
              <div className="col-lg-4 col-md-12 mb-4">
                <h1 style={{ color: "#3C5D51" }}>Furni...</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae aperiam facere eveniet temporibus architecto explicabo.
                </p>
              </div>

              {/* LINK COLUMNS */}
              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <h6>About Us</h6>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact Us</p>
              </div>

              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <h6>Support</h6>
                <p>Knowledge</p>
                <p>Live Chat</p>
              </div>

              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <h6>Jobs</h6>
                <p>Our Team</p>
                <p>Leadership</p>
                <p>Privacy Policy</p>
              </div>

              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <h6>Navbar Access</h6>
                <p>Know About Access</p>
                <p>Important Chat</p>
                <p>Privacy Policy</p>
              </div>

            </div>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="d-flex gap-4 fs-6 m-4 py-3 icon">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
            </div>

            <hr />

            {/* ================= COPYRIGHT ================= */}
            <div className="text-center">
              <p className="m-0 fs-6">Copyright © All Rights Reserved | Designed With Love</p>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default Service;
