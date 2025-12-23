import React, { useState } from "react";

const initialProducts = [
  { id: 1, name: "Sofa", category: "Furniture", price: 20000, image: "classic-tufted-sofa-isolated-white-background-digital-illustration-3d-rendering_154979-1039-removebg-preview.png", desc: "Comfortable sofa" },
  { id: 2, name: "Chair", category: "Furniture", price: 5000, image: "src/assets/chair.png", desc: "Stylish chair" },
  { id: 3, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 4, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 5, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 6, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 7, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 8, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 9, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },

  { id: 10, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 11, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 12, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
  { id: 13, name: "TV", category: "Electronics", price: 30000, image: "src/assets/tv.png", desc: "Smart TV" },
];

function Shop() {
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [products] = useState(initialProducts);
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [cart, setCart] = useState([]);

  

  // FILTER SAFE ARRAY
  const safeProducts = Array.isArray(products) ? products : [];

  // FILTER LOGIC
  const filtered = safeProducts.filter((p) => {
    const byName = p.name.toLowerCase().includes(search.toLowerCase());
    const byCategory = category === "All" ? true : p.category === category;
    const byPrice = p.price <= Number(maxPrice);
    return byName && byCategory && byPrice;
  });

  // UNIQUE CATEGORIES
  const categories = ["All", ...new Set(safeProducts.map((p) => p.category))];

  // CART FUNCTIONS
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const grandTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="overflow-hidden">

      {/* HEADER SECTION */}
      <div className="container-fluid color py-1">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 slide-right">
            <h1 className="m-3 text-white">Contact</h1>
            <p className="m-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="m-3 btn-home">Submit</button>
            <button className="m-3 btn1-home">Submit</button>
          </div>

          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center slide-right">
            <img
              src="src\assets\classic-tufted-sofa-isolated-white-background-digital-illustration-3d-rendering_154979-1039-removebg-preview.png"
              className="img-fluid"
              alt="sofa"
            />
          </div>
        </div>
      </div>

      {/* CART BUTTON */}
      <div className="d-flex justify-content-end my-4 mx-4">
        <button
          className="btn btn-dark position-relative"
          onClick={() => setShowCart(true)}
        >
          <i className="bi bi-cart m-2"></i> Cart
          {cart.length > 0 && (
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {cart.reduce((a, b) => a + b.qty, 0)}
            </span>
          )}
        </button>
      </div>

      {/* FILTER UI */}
      <div className="container mb-4 p-3 border rounded">
        <h3>Filter Products</h3>

        <div className="d-flex gap-3 mt-3">

          {/* Search */}
          <input
            className="form-control"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category */}
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Max Price */}
          <div className="d-flex flex-column">
            <input type="range" min="0" max="50000" value={maxPrice}  onChange={(e) => setMaxPrice(e.target.value)} />
            <small>Max Price ₹{maxPrice}</small>
          </div>

        </div>
      </div>

      {/* PRODUCT LIST */}
      <div className="row g-4 px-4">
        {filtered.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src={p.image}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5>{p.name}</h5>
                <p className="text-muted">{p.desc}</p>
                <h6 className="fw-bold">₹ {p.price}</h6>

                <button
                  className="btn btn-dark w-100 mt-2"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CART MODAL */}
      {showCart && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Your Cart</h5>
                <button className="btn-close" onClick={() => setShowCart(false)}></button>
              </div>

              <div className="modal-body">
                {cart.length === 0 ? (
                  <p className="text-muted">No items added.</p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
                    >
                      <img src={item.image} width="60" />
                      <div className="ms-3 flex-grow-1">
                        <h6>{item.name}</h6>
                        <p className="text-muted m-0">₹ {item.price}</p>

                        <div className="d-flex align-items-center gap-2 mt-2">
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={() => decreaseQty(item.id)}
                          >
                            -
                          </button>
                          <span>{item.qty}</span>
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="modal-footer d-flex justify-content-between">
                <h5>Total: ₹ {grandTotal}</h5>
                <button className="btn btn-success">Proceed</button>
              </div>

            </div>
          </div>
        </div>
      )}
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
          
  );
}

export default Shop;
