import React from 'react'

function Blog() {
    return (
        <div>
            <div className="overflow-hidden">
                <div className="container-fluid color py-1">
                    <div className="row align-items-center">
                        {/* LEFT SIDE TEXT */}
                        <div className="col-lg-6 col-md-6 col-12 slide-right">
                            <h1 className="m-3 text-white ">Blog</h1>
                            <p className="m-3 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                perferendis id et saepe reiciendis corporis soluta quia doloremque
                                eligendi natus praesentium ipsum labore esse tempora voluptatibus.
                            </p>
                            <button className="m-3 btn-home">Submit</button>
                            <button className="m-3 btn1-home ">Submit</button>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center slide-right ">
                            <img src="src/assets/classic-tufted-sofa-isolated-white-background-digital-illustration-3d-rendering_154979-1039-removebg-preview.png" className="img-fluid" alt="sofa" />
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-3 back">
                    <h1 className="text-center">Recent Blog</h1>

                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px", width: "450px", height: "300px" }}>
                                <img src="src/assets/view-futuristic-lighting-lamp-design.jpg" className="img-fluid" style={{ borderRadius: "20px" }} alt="" />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px" }}>
                                <img
                                    src="src/assets/3d-rendering-mock-up-wood-decor-living-room-with-leather-sofa.jpg"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px" }}
                                    alt=""
                                />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px" }}>
                                <img
                                    src="src/assets/modern-living-room-with-dark-decor-comfortable-seating.jpg"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px" }}
                                    alt=""
                                />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px" }}>
                                <img
                                    src="src\assets\3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv.jpg"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px", width: "450px", height: "300px" }}
                                    alt=""
                                />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px" }}>
                                <img
                                    src="src\assets\small-juvenile-bedroom-arrangement.jpg"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px", width: "450px", height: "300px" }}
                                    alt=""
                                />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px" }}>
                                <img
                                    src="src\assets\3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table.jpg"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px", width: "450px", height: "300px" }}
                                    alt=""
                                />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px", width: "450px", height: "300px" }}>
                                <img
                                    src="src\assets\pexels-jvdm-1454806.jpg"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px", width: "450px", height: "300px" }}
                                    alt=""
                                />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px", width: "450px", height: "300px" }}>
                                <img
                                    src="src\assets\pexels-pixabay-262048.jpg"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px" }}
                                    alt=""
                                />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card h-100 text-center" style={{ borderRadius: "20px", width: "450px", height: "300px" }}>
                                <img
                                    src="src\assets\pexels-itsterrymag-2631746.jpg"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px" }}
                                    alt=""
                                />
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque, at!
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container-fluid background">
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
                        <div className="d-flex gap-4 fs-6 m- py-3 icon">
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

    )
}

export default Blog