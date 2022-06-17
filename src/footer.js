import React,{ Fragment } from 'react';

const Footer = (props) => {
    return (
        <Fragment>
                <footer
                    id="footer"
                    className="text-center text-lg-start bg-light text-muted my-500"
                    >
                    {/* <!-- Section: Social media --> */}
                    <section
                        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                    >
                        {/* <!-- Left --> */}
                        <div className="me-5 d-none d-lg-block text-align-center">
                        <span>Get connected with us on social networks:</span>
                        </div>
                        {/* <!-- Left --> */}

                        {/* <!-- Right --> */}
                        <div>
                        <a style={{textDecoration: "none"}}
                            href="https://www.facebook.com/profile.php?id=100004977828705"
                            className="me-4 text-reset"
                        >
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a style={{textDecoration: "none"}} href="https://twitter.com/ItsAnkit5ingh" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a style={{textDecoration: "none"}} href="https://www.youtube.com/itsankitsingh" className="me-4 text-reset">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a style={{textDecoration: "none"}}
                            href="https://www.instagram.com?itssankitsingh"
                            className="me-4 text-reset"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a style={{textDecoration: "none"}}
                            href="https://www.linkedin.com/in/ankit-singh-422980227/"
                            className="me-4 text-reset"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a style={{textDecoration: "none"}} href="https://github.com/ankitsingh711" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                        </div>
                        {/* <!-- Right --> */}
                    </section>
                    {/* <!-- Section: Social media --> */}

                    {/* <!-- Section: Links  --> */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Zomato(Ankit)
                            </h6>
                            <p>
                                The best food delievering company in the world as your best and
                                tasty fresh foods at your door in just a few minutes when you
                                order something from zomato.
                            </p>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">Main Branches</h6>
                            <p>
                                <span className="text-reset form-control-sm">Chennai</span>
                            </p>
                            <p>
                                <span className="text-reset form-control-sm">Kolkata</span>
                            </p>
                            <p>
                                <span className="text-reset form-control-sm">Pune</span>
                            </p>
                            <p>
                                <span className="text-reset form-control-sm">Bengaluru</span>
                            </p>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New Delhi,India</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 91 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 91 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                        </div>
                    </section>
                    {/* <!-- Section: Links  -->

                    <!-- Copyright --> */}
                    <div
                        className="text-center p-4"
                        style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
                    >
                        © 2022 Copyright Ankit Developer:
                        <a className="text-reset fw-bold" href="https://zomato.com/">Zomato.com</a>
                    </div>
                    {/* <!-- Copyright --> */}
                    </footer>
        </Fragment>
    )
}

export default Footer;