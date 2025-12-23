import React from 'react'


function Home() {
    return (
        <div className="overflow-hidden">
            <div className="container-fluid color py-1">
                <div className="row align-items-center">

                    {/* LEFT SIDE TEXT */}
                    <div className="col-lg-6 col-md-6 col-12 slide-right">
                        <h1 className="m-3 text-white ">Modern Interior Designer Studio</h1>
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
            <div className='back .slide-left'>
                <div className="container-fluid py-5 slide-right">
                    <div className="row align-items-center">

                        {/* LEFT TEXT SIDE */}
                        <div className="col-lg-6 col-md-12 col-12 mb-5">
                            <h1 className='m-3'>Crafted with excellent material.</h1>
                            <p className='m-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui omnis, illo fugiat corporis alias, commodi asperiores numquam recusandae eaque nisi velit debitis suscipit dolores adipisci repellendus eius quaerat accusamus voluptatem tempora dolorum quam reprehenderit architecto totam id. Unde minus reprehenderit a dignissimos, vero perferendis, temporibus, qui praesentium mollitia sint ex!</p>
                            <button className='btn btn-dark ig m-3' >Explore</button>
                        </div>

                        {/* RIGHT SIDE CARDS */}
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="row g-4">

                                {/* CARD 1 */}
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="card">
                                        <img src="src/assets/pexels-bayram-yalcin-86843184-15897464-removebg-preview.png" className="card-img-top img-fluid" alt="..." width={"150px"} height={"100px"} />
                                        <div className="card-body">
                                            <h5 className="card-title">CHAIR</h5>
                                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, magni.</p>
                                            <a href="#" className="btn btn-dark">Add</a>
                                        </div>
                                    </div>
                                </div>

                                {/* CARD 2 */}
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className='card'>
                                        <img src="src/assets/free-photo-of-close-up-of-ornamented-chair-removebg-preview.png" className="card-img-top img-fluid" alt="..." width={"150px"} height={"100px"} />
                                        <div className="card-body">
                                            <h5 className="card-title">DINING CHAIR</h5>
                                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, sit.</p>
                                            <a href="#" className="btn btn-dark">ADD</a>
                                        </div>
                                    </div>
                                </div>

                                {/* CARD 3 */}
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className='card'>
                                        <img src="src\assets\pexels-lysenkow-2258083-removebg-preview.png" className="card-img-top img-fluid" alt="..." width={"150px"} height={"100px"} />
                                        <div className="card-body">
                                            <h5 className="card-title">STEEL CHAIR</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, debitis!</p>
                                            <a href="#" className="btn btn-dark">ADD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid m-3 py-5 slide-right">
                    <div className="row align-items-center">

                        {/* LEFT SIDE TEXT + CARDS */}
                        <div className="col-lg-6 col-md-12 col-12 mb-4">

                            <h1 className='m-3'>Why Choose us?</h1>
                            <p className='m-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                                excepturi perferendis suscipit in id quod ullam sit assumenda, animi
                                iste, accusantium sint necessitatibus?
                            </p>

                            {/* ROW 1 */}
                            <div className="row g-3">

                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="card p-3 h-100">
                                        <i className="bi bi-truck fs-4"></i>
                                        <h5 className="mt-2">Fast & Free Shipping</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="card p-3 h-100">
                                        <i className="bi bi-bag-check fs-4"></i>
                                        <h5 className="mt-2">Easy to Buy</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                            </div>

                            {/* ROW 2 */}
                            <div className="row g-3 mt-2">

                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="card p-3 h-100">
                                        <i className="bi bi-globe-americas-fill fs-4"></i>
                                        <h5 className="mt-2">24/7 Support</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="card p-3 h-100">
                                        <i className="bi bi-arrow-left-right fs-4"></i>
                                        <h5 className="mt-2">Easy Return</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="col-lg-6 col-md-12 col-12 text-center">
                            <img src="src/assets/sofa-green-living-room-with-copy-space.jpg" className="img-fluid rounded" alt="Why Choose Us" width={"500px"} height={"500px"} />
                        </div>
                    </div>
                    <div className="container-fluid py-4 ">
                        <div className="row align-items-center">

                            {/* LEFT SIDE IMAGES */}
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="row g-3">

                                    <div className="col-6">
                                        <img
                                            src="/src/assets/beautiful-shot-stylish-grey-chair-isolated-white-background.jpg" className="img-fluid rounded" alt="chair" width={"300px"} height={"200px"} />
                                    </div>

                                    <div className="col-6">
                                        <img src="/src/assets/pexels-maksgelatin-4352247.jpg" className="img-fluid rounded" alt="chair 2" width={"300px"} height={"200px"} />
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT TEXT BLOCK */}
                            <div className="col-lg-6 col-md-12 col-12 mt-4 mt-lg-0">
                                <h2>We help you Make Modern Interior Design</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ea
                                    explicabo. Officia molestiae doloremque asperiores quod mollitia saepe,
                                    deserunt, minus tempore praesentium perspiciatis repellat sit beatae
                                    quis rerum commodi?
                                </p>
                                <button className="btn btn-dark">Explore</button>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid py-4 slide-right">
                        <div className="row g-4">

                            {/** CARD 1 */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card marquee h-100">
                                    <div className="card-body d-flex align-items-center gap-3 flex-wrap">
                                        <img src="/src/assets/pexels-bayram-yalcin-86843184-15897464-removebg-preview.png" className="img-fluid" style={{ width: "120px" }} />
                                        <div>
                                            <h4>Chair Sofa</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                            <a href="#" className="btn btn-dark">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/** CARD 2 */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card marquee h-100">
                                    <div className="card-body d-flex align-items-center gap-3 flex-wrap">
                                        <img src="/src/assets/download-removebg-preview (10).png" className="img-fluid" style={{ width: "120px" }} />
                                        <div>
                                            <h4>Main Chair</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                            <a href="#" className="btn btn-dark">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="carouselExampleIndicators" className="carousel slide my-5 " data-bs-ride="carousel" data-bs-interval="2000" style={{ width: "22rem", margin: "auto" }}>

                                {/* Indicators */}
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                                </div>

                                {/* Slides */}
                                <div className="carousel-inner">

                                    {/* CARD 1 */}
                                    <div className="carousel-item active">
                                        <div className="card" style={{ width: "100%" }}>
                                            <h1 className='m-2 text-center'>Testimonials</h1>
                                            <p className='m-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque vel rerum eum quis placeat omnis maiores ullam harum rem voluptatem, autem ab quasi numquam quidem, amet minima provident labore!</p>
                                            <div className="card-body">
                                                <img className='align-items-center m-3' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEBUSEBMVFRIQFxcVFRUVFxUXFRUVFRgWFhUYFRUYHSggGBolHRcVITEiJSkrLjAuGB8zODMsNygtLisBCgoKDg0OGhAQGy0lICUtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMMBAwMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgIDBAUHAf/EAEIQAAIBAgIGBwQHBwIHAAAAAAABAgMRBCEFBhIxQVETIjJhcYGRB0KhsVJicsHR4fAUI0OCksLxU6IVM2Nzg7PD/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAIDAQQFBv/EADQRAQACAgAEAwYEBwADAQAAAAABAgMRBBIhMQVBURMyYXGRsSKBodEUI0LB4fDxQ1KCBv/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaXTWtOEwl1VqrbX8OHWn5pdnzsbGLhcuX3Y6evknXHa3aEL0n7UZu6w1BRXCVVtv8Aoha39TOjj8Kj+u30/f8Awl7LSOYzXjSNT+O4LlTjCKXnba+JvU4Dh6/07+cyrtSWprabxku1isQ//NUt6bRs1wYY7Ur9IUWpPqtLSuKW7E4heFaqv7i2MOH/ANK/SP2U2x29Z+rLw2tWkKfZxdb+eXSf+xMhbg+Gt3pH5dPtpHWSO0y3uj/abjqf/NjSrLjeLhN/zRyX9JqZPCOHt7szH6x/v5pxlyR36pfof2lYOtaNZSoSf0utTv8Abju8ZJHMzeE5qdafij4d/p+211csT36JjQrwqRU6coyjLNSi04tdzWTOZas1nUxqVq4YAAAAAAAAAAAAAAAAAAAAAAAAA12mtNUMHT268rX7MVnOb5Rjx+S4luLDfLOqwsxYr5J1WHL9YdecTibxpN0KXKD68l9aa3eCt5nYwcFjx9bdZ/T6Olj4OtO/WUU2Tf2nailoltVONh4/HQpb2nLlfd4/gc7ifEoxzy443P6Ne+oaqWnpN2jGPkm38X9xoz4jxE+cR+SiZhjzx1X/AFV4dW/yyIfx/Ef+8/p+yM1hkYHSU7pTzv4fBrJl2LxPNSfxTzQxyRLdUZxmrr8zuYeKpljdJY9kubBdzsexZ+h9L4jCT2sPUlC++O+EvtQeT8d/JlObFjzRq8b+/wBSMcx2dP1W1+o4lqniEqNZ5J3/AHc39VvsvufdZs4XFeHXxfip1j9YZ1KZnOYAAAAAAAAAAAAAAAAAAAAAAI7rZrVTwUdmNp15K8YcIr6U+Ue7e/VrZ4fhpyzvybnC8HbPO+1fX9nI9I42riKjqVpOc5cXwXBJbku5Hbx0rSOWsdHcrirSvLWNQxWizbE1UVJKKbk7JZtkMuaMVJtKnJqkblosbpiUrxp9SK3zv1vXg+5epw83HZMnSJ1DmZMtrdujT1akI5vN/E1Ya86Wqla0c0rPhF7/ABMorLxVuzFd/wDjgzLG1GGxDjLuk81380YkhtaOKlTakn3Ncv1yJ48lsduas9Ut6SjBV1UjdeaPQcNxcZa/FsUiLL+wbXMn7NS4GYsjONN9TNd5UHGhi5OVHdGo85U+SlxlD4rvW7m8XwMX/Hj7+nr/AJU3w+cOpwmpJOLTTV01mmnuafFHDmNNdUAAAAAAAAAAAAAAAAAAAGj1s1hjgqN8nVndU4Pi+MpfVV18FxL8GGclvg3OC4S3EX15R3n/AHzcdxVedWcqlSTlObvKT3t/rgdqsRWNQ9PXHFKxWsaiFmxOJYmryxLaE1aXTNZyTjuhF5vjKS5dyfx8jg8fxU3tyR2j9XI4nJz25Y7QjFSteSiuytyNWI6bc+Z66VSpNtJ+83l3Lf6sz2RmJmdN5ovU2VVbTlZPhY1L8XqekNqvCdOspdoz2e0tm8s5Fc8ReeyfsKV7tRrNqk8P1ti64NfgTx553qyF8Ma3VC8XWutm3i+fibkNSV7Q2mXRkoyzi2k+7Mvw5Zx22ljvyynaR3ovvq60U3G3jiSizE41DiSiyE4009n+tToSWGry/czdqcn/AApPg/qN+j7r20ON4bnj2le/n8f8tXPw+45o7uqHGaAAAAAAAAAAAAAAAAAAWcZioUacqlR2hTTlJ9y+8zETM6hPHjtktFK95cU05pSeLryrT97KMfoQXZiv1vbOvipFK6h7Ph+GrgxxSv5/GWvsXxK3TxolEoTDx5Zvcs35GL35azKrJPLWZQzH4zaTzPMViZncvNXt0abDpud/H5Mvns1o7tjGr16a5/h+Nyu3uysp78OqauLqLI5cx1dKZ6Jdg2ZiVVmNpqG2rSV0yvJM7WYohxrXzQ/QT6SHZnvXJm/wmXmjllq8Xj5fxQiMKmy0++78ORvNHbq9JpxTW5pNeDWR262jUaelpWJrEw9cScWZmilxJRZCaLcokosrmjq3s61geIpdBVd6tBKze+dPcn3tZJ/yvicjjcHJbmr2n7uTxeDktzR2lMDSagAAAAAAAAAAAAAAAAgHtN0t2MLB8qlT+yPqnLyibXDV/qeh8E4Xvnn5R/ef7fVADeiXoNPGiyJY5VurLZV7Xe5Lm3uX64JmL5OWGvnyezruI3M9Ij1lgaUozdKTnNpNWUIJJPucndv4Ghxc2iu72/KHK4ymSK/zL9Z/pjshOKi0aFXEv0Wn1HHh71u7/BLuh202uiZfvILo3UcbuKTs/jvKcnu99NjF0nttP9F61UaTUKtKpSf1kak4J7xO2x7TrqY0lc9Lwp0+lzcVnkrsoje9LJjo19PWHFYp2p0adKmv4lZtt/ZgvvLpin9U7+SqItE9Gg1u0fOrh6qm4TcIOcZU7rOOdnF7t3B+hDDaK5ImqzLE2xzEuUYnDbCg7pqpFS45Xvk/Q61bb38HLtXWp9XSdXp7WFou9+ok/GOT+R1MNvwQ9Nwf4sFZ+DPaLeZsTVS0TiyE0UOJOLK5oytD6Qlha8K0N9N5r6UXlKPmr+djGSsZKTWWvmwxes1l3PD141IRnB3jNKUXzUldP0OFMTE6l520TWdSuGGAAAAAAAAAAAAAAFM5qKbbskrt8kt4ZiJmdQ4jpXGPEVqlZ76knJd0d0V5RSXkb9Okae/4fBGHFXHHlH/f1YbRdErtPLE4lHSxjpKGxPJqDbd3b3JevH1NbNeY1dxuNtaJrl8omft0RzS2lpTdnZcou9l5cfM5mSbXtuzi5c1r23bu00Vee1LN3yT+/u7jPaGv3lehRi25NbTebbay7kiMylyx3eaPw1WpVvT2lsu14K7S7rEbWrEdUq1tM9E4oatVp4Z9LXm3G8rzglFRSvZJ5335/AonJXfSF0UtHe20o1UwqqYHZn2r7N+PE1cnvbXRvo0NbUirKrepKrKzecZ2jJXurq915epsRlisdIVTSLTuZbajoJYWhKMpSk3Fp7bvk+Bq3vNrL6R0cx1zwKpVaUbpp0I7uDUpq/nvOlw1t1n5tDiK6tHyXNUsfOh1KiapVH1W/dk0n6NNM3sWXknU9m54fxE4Z5b+7P6Jq0bsWeimqlonFkJqokicSrmqhosiVc1dR9mmkekwrpSfWw8rL7E7yj8dtfyo5vGU1fm9XA8RxcmTm9ful5qOeAAAAAAAAAAAAAA0eumK6LA1Wt80qa/nai/9rkSr3dHwrF7Ti6RPl1+nX7uRtG1WXudKWWRLGntOOZK09NKs8fg1Pn0YmPptxtbae0nbns9ZLzaS82VZ77rEQ5viN4vStKRvrvt6fdCMdVcqkpT7Tefd3HOm02nbzVp5rTaWBUrWvb14mdK9rW3JK93mZR6p57P6sacrP3rM0OJiZl0cERyp5rTjoxwrs0nNqK788ynH1ktGmJqvprDU8NJSqxTi8+SfiZvWWdJXS0grK63q6fBrmmRi2o6o+z32RzW/ScYUZzd2oxbaW9pcERrXnvqFsz7OkzLkWnNKRxeIdRRlGGzGMVKzlaK3ZZczqYqTjrpzcl4yW2kWjHTrU5RWd9hppN2exFct6cTarMWiYdvheTLjmmvT7fvDb4CMlTip9pXXknl8LGxjmYr1dTh6WjFEX7r7RbErZqoaJxKuaqGi2JVzVKPZti+jxuxfKvCUbfWj118FP1KeLjePfo5XimLeHm9J+/8AsOqnMeeAAAAAAAAAAAAAAQ32mVbUKUPpVHL+mLX9yMxOne8ApvNe3pH3n/DnUi6tnrIUstizLxE9k13pj4yM5dWFRU1FdaVk3mr5X3cMynJM2nvpxuLm2XJMVtyxG4mfP/iB46koyajLaTSbfiv16Gi8zaIjs1cYva3Xv8SyeyiN7ZWPhaDX0bL9fAhSdysyRqNNxq/WexGS3rLzWRRmjrps4LfhiUi0hpqnNRjVbVlbNNp35d5VSkx1hZa0TPVtdXNJ4Kj2KUtt73s5yXKy3Eb0vPdZWkeSR19MRrJRhTqK2V5RcVHzZTakx3Z1NZRnXepsYSe07uWzH1kr/C5Lhq7yQhxFv5cub9GpQbjvXyOlvUtDW46JBqXVcZypSTTttRd+CdmreJdjnq6/g9tZJpPzTFl8Wel0paJxKOlLRZEoTChosiUJhn6t1ujxtCX/AFYLym9h/CTM5OuOY+DS42nNgvHwn9OrtZynjwAAAAAAAAAAAAAEE9pzzw6/7v8A8yNp09J/+f8A/J/8/wB0FkjMWelhQ0WxdJQycXS20em8WrTUc3JRT5Rs3m3wyfwKMlonby3iGakzeK9d6/LSL7EZJqN8kmpP3mrbVu63yKdzvq4+omOiuNWMLPJye58FwV3+A1Mm4q1uk5NSavvzfPa4/rvLaQpyd1/VzH7E9iXZlmnyZDNTcbT4fJqeWUujSU8ufE1NzDd7pbofReJcUv2iGz3xblbxuVzlj0XRe0N1VpKlCzd+817TNpPi5Vr3pd1qrpK6hQed/em1f0SdvNnQ4XHyxzerR4i/NPL6NHgKO1HKzbey4+9nmnbjfd4+JsWQpWZjp9Ek0VQl+005OMk1DZqX3KaVo2f1kr/5JR3dbgsdv4mszExqOvz10+sJYWxL04TiWNKWiyJQmFDRbEoTC7gHatTfKpB+kkWb/DLXzx/Lt8p+zuZy3hgAAAAAAAAAAAAAEI9pdPKg+XSL12H9zKM0609F4Bbrkj5f3QSSIRd6WJW2iyLpRKhonF04lYxNJSi1ZO6e8TbbX4nFW+K0ajrCDY5OM5LJtN3a3Lwv5kIjbxV45ZmJYEpqTeW63pZpkuyqerDxju8/zLKqrvMBH94vMX90x+8lGFxE6e7Ncn93I051LehusJrTVjaEINu+Svn4biucVe8rItKVYR1akdqvbafurdHxfFmne0dqroj1c+1j0enjnGUlCNRdJtPdlGz8ez8TpcNbeP5NPJji2XUzqJ82Xq5o/pXCrKChGko7KSzqSirbbb93jbi/AumXS8O4b2tq5JjUV1r4zHn8v7pTGklfvd/wMxL0FcUR9VZKJWhOJAtrLEqGi2JQmF/RsNqvSX0qtNes4ot3+GWtxHTFefhP2dvOc8IAAAAAAAAAAAAAAi/tBobWGjL/AE6ib8JJx+bia/E+5t2PBMnLxE19Y/y51KJpxd6yJW3EnF04lblEl7RKJUtGfaM7RjTGj6ruox2nUm5vZUsnayV7WtYti8PM8ZwmabTEV3uZnpv/AIjsMFJTUeLdvPkyyZ6ORFJi2lnE6Ol0my1stu2eSV+fcSreNI3wzz6lVhdHOnWkpOMtjK8HeL4uzMXvurMYZx5JiZidenZvYUdrJbzVmdNmISPQWjow61k5Pjy8DVy3mei+saSinG0ShJqNP6EhiIpTW7c1vT7mW48tqTuEL0reNSsxp1YJJQU9myyybXcuDN2nEY7TqYW/xnF44jltGo8phvtIau1qUurFzi+Ktdd0lz8MjZnHaOzocN41w+Wv8yeWfj2/KWuq4SpDtQnHxi0vUx1ju6OPisOT3LxP5wsE4lcFsSPGXVlGW11Sw/SY6iuUtvw2E5fNInedUlz/ABK/Jwt5+Gvr0dfNN4oAAAAAAAAAAAAABgadwnTYapTWblF7P2o9aPxSK8teakw2eEy+yz1v6T+nm5NKJxIu9xErcokudKJW5RJc6cSocTPOltS4mednbHxGhYV83F7S3TWTXLPibGH2tvcj9nK8Q/g465p1Pw97/fmjOmYNylFvalFuDk4pPqtrgXe7OpcLJknLPNvfxnv+arRuhpWvLJfMrvlRrTTY0MA1ONtzyZVa/RZWqT08DKC3ZGvPVbtmYecbLakiOiV2piqX0vRMaR6snQeG6atHZT2abU5NppdV3SV+bt5Jm3wuLmyb9GtxeTlx685TCdM623I0tbBnZpi19G0qnbpxbfG2fqszGobOLjOIxe5eY/P+zRaxauxpQ6SgnaPbjdvLmr55GHf8M8Xvkyeyzz37T26+k/NFydZeiTD2bYO9apWe6nHYXjN3foo/7jOS3TTgePZdY64/Wd/T/v6OhlLzAAAAAAAAAAAAAAABy/WXR/QYmcUrRk9uP2ZZ28ndeRwOKp7PLMfm9j4fxHtsFZ846T+TUuJRzN+JW5RM86USyMDourXdqccuMnlFef4F+HFky+7H5+TX4njsPDx/Mnr6eaSYHVSnGzqtzfLdH03s6eLgq1626/Z57ifHM2Tpijlj6z/htP8AhVH6CS7rm9FpjpDiWmbTue6K616pwhL9opLJ26Ti09yl4PK/5mlxVJ9+G9wmWPcn8mijo+++T8sjR232y0bo+nF5q/iRsztl6RjKUdmJCGYNHUtiCi4p24kkZlmKMeEVfwzv3IlEbnUITOo3KS6KwvRU+t25Zy7uS8vnc62HH7OunJzZPaW2yJFqpb2cjIUVvfLcAlms+JgiXO9OYHoK0orsvrR+y+HlmjMPd+G8V/E4ItPeOk/P/LpGp+jv2fCQTVp1P3k/GVrJ+EdleRi07l5fxPiPb8RaY7R0j8v8t2Rc8AAAAAAAAAAAAAAA0GuGjOmo7cV16N34x95fC/l3mh4hgnJj5o7x9vN0/C+J9ll5Z7W+/k57KJ5+LPUxK9o+ipVY7SvFO8lzSzNrg6e1zVrPbza3HZ5xcPa1Z1PaPnKe0oxiko22bZW3W4WPT610h4qZm07nuuBhTKLA8hVW6W5jQ1GP1YhJ7VCSi37r7Pk+HxNTJwsT1r0buLjJjpbq1UtDYiDzpt98bS+RqW4fJHk2q8RjnzFhav8Apz/pl+BX7K/pKz2lPWGRR0ZXlug13y6vzzJ14fJbyV24jHXzbjR+i40utN7VThyj4fib+HBGPr5tDNxE5OkdmezYa7yYBrICndEClAY1XQscTVpue6jLaf1o/R82l5Jhu8Jxt+Hretf6o18p9fptKCLVAAAAAAAAAAAAAAAAADn+tGhugqbcF+6qPL6st7j4cV+R5rj+F9jfmr7s/pPp+z1Hh3Ge2py296P1j1/drdHw7T7kvV/kbPg9d3tb0j7/APFHjOT8Faes7+n/AFv9F4iWw4PfDNfZ5eX3noJh5uWZHF23mNDKpYhPczGhcaTA8ULbgK1Jge9IwKJVGBTFcWB7vAMAzAoq7jIpSbaS3sDdYajsRtx4+JFKF0MgAAAAAAAAAAAAAAAABZxeGjVg4TV4yVmvvXJleTHXJWaW7SnjyWx2i1Z6whtTQ8sPPYecZSvGXNLnyZrcBws8PzRPXr0+Tb47io4jlmPKOvzXVaE0+/Pw4nSc5mV6dnZowwtxw9807AZdBSW/NGJZZJEDIoYHlgPQPUgPbGBTKIFupnZGRtMFhdnN9r5EZlKIZQZAAAAAAAAAAAAAAAAAAAAorUozWzJXT/WQEY07o+VKnOa6yasmt8U99/xLKztCYVVMTt7Ozxin6q40w9hiIXs5wvyugM2CIyyrA8YHgHjAICpGB6BbqU5SVodrh+fcNstjhMJs5ys5/BeA2zEMowyAAAAAAAAAAAAAAAAAAAAAAANNpfQSqwcaMuik+S6tuKt7uXL0JczGmqo6GVDJ08l72TT9PvJRLE7bKla2RGUVwMhgeAeNmQTAqgr7szAyqWDb7WXzCWmZTpqKskYZVAAAAAAAAAAAAAAAAAAAAAAAAAAAAszwsHw9MvkNsaWpYFcG/PMzs0tvAP6S9BtjSn9gl9JfEbNKlo7nL0Q2aXYYGC33fi/wMbZ0yYxS3KwZegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==" alt="" />
                                                <p className='fs-3 b-1 text-center '>Sara</p>
                                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CARD 2 */}
                                    <div className="carousel-item active">
                                        <div className="card" style={{ width: "100%" }}>
                                            <h1 className='m-2 text-center'>Testimonials</h1>
                                            <p className='m-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque vel rerum eum quis placeat omnis maiores ullam harum rem voluptatem, autem ab quasi numquam quidem, amet minima provident labore!</p>
                                            <div className="card-body">
                                                <img className='align-items-center m-3' src="data:image/jpeg;base64,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" alt="" />
                                                <p className='fs-3 b-1 text-center '>Lara</p>
                                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur.</p>
                                            </div>
                                        </div>
                                    </div>


                                    {/* CARD 3 */}
                                    <div className="carousel-item active">
                                        <div className="card" style={{ width: "100%" }}>
                                            <h1 className='m-2 text-center'>Testimonials</h1>
                                            <p className='m-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque vel rerum eum quis placeat omnis maiores ullam harum rem voluptatem, autem ab quasi numquam quidem, amet minima provident labore!</p>
                                            <div className="card-body">
                                                <img className='align-items-center m-3 ' src="data:image/jpeg;base64,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" alt="" />
                                                <p className='fs-3 b-1 text-center '>Mad</p>
                                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Arrows */}
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-3">
                        <h1 className="text-center">Recent Blog</h1>

                        <div className="row g-4 mt-3">

                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card h-100 text-center" style={{ borderRadius: "20px" }}>
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
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 background">
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
    )
}

export default Home