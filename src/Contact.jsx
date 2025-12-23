import React from 'react'

function Contact() {
    return (
        <div>
            <div className="overflow-hidden">
                <div className="container-fluid color py-1">
                    <div className="row align-items-center">
                        {/* LEFT SIDE TEXT */}
                        <div className="col-lg-6 col-md-6 col-12 slide-right">
                            <h1 className="m-3 text-white ">Contact</h1>
                            <p className="m-3 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                perferendis id et saepe reiciendis corporis soluta quia doloremque
                                eligendi natus praesentium ipsum labore esse tempora voluptatibus.
                            </p>
                            <button className="m-3 btn-home">Submit</button>
                            <button className="m-3 btn1-home ">Submit</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center slide-right ">
                            <img src="src/assets/classic-tufted-sofa-isolated-white-background-digital-illustration-3d-rendering_154979-1039-removebg-preview.png" className="img-fluid" alt="sofa" />
                        </div>
                    </div>
                </div>

            </div>


            <div className="container-fluid py-1 p-3 m-0">

                {/* ============== CONTACT INFO ============== */}
                <div className='back '>
                    <div className="row justify-content-center text-center mb-3 ">
                        <div className="col-12 col-md-10 d-flex flex-wrap justify-content-center gap-4">

                            <div className="d-flex align-items-center gap-2 m-3">
                                <button className="btn" style={{ backgroundColor: "#3C5D51", color: "white" }}>
                                    <i className="bi bi-send-fill"></i>
                                </button>
                                <p className="mb-0">Main Road, Tamilnadu</p>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <button className="btn" style={{ backgroundColor: "#3C5D51", color: "white" }}>
                                    <i className="bi bi-envelope"></i>
                                </button>
                                <p className="mb-0">Furni2345@gmail.com</p>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <button className="btn" style={{ backgroundColor: "#3C5D51", color: "white" }}>
                                    <i className="bi bi-telephone-fill"></i>
                                </button>
                                <p className="mb-0">789654325</p>
                            </div>

                        </div>
                    </div>

                    {/* ============== FORM SECTION ============== */}
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">

                            <div className="row">
                                <div className="col-12 col-md-6 mb-3">
                                    <h5>First Name</h5>
                                    <input type="text" className="form-control" placeholder="Enter your first name" />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <h5>Last Name</h5>
                                    <input type="text" className="form-control" placeholder="Enter your last name" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <h5>Email</h5>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>

                            <div className="mb-3">
                                <h5>Message</h5>
                                <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
                            </div>

                            <div className="text-center">
                                <button className="btn btn-dark px-4">Explore</button>
                            </div>
                            <br />
                        </div>
                       



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
        </div>
    )
}

export default Contact