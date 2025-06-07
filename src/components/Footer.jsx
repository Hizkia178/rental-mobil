const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light pt-5 pb-3 mt-5 overflow-hidden" data-aos-duration="1000" data-aos="fade-down">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-3">
                            <h5 className="fw-bold">
                                Rental <span className="text-danger">Mobil</span>
                            </h5>
                            <p className="text-light small">
                                Layanan rental mobil terpercaya dengan armada terbaik, harga terjangkau, dan layanan profesional.
                            </p>
                            <div className="d-flex gap-3 mt-3">
                                {[
                                    { icon: "bxl-facebook", href: "https://facebook.com" },
                                    { icon: "bxl-twitter", href: "https://twitter.com" },
                                    { icon: "bxl-instagram", href: "https://instagram.com" },
                                    { icon: "bxl-youtube", href: "https://youtube.com" }
                                ].map(({ icon, href }, idx) => (
                                    <a
                                        key={idx}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="d-flex align-items-center text-decoration-none shadow justify-content-center rounded-circle bg-white text-dark"
                                        style={{ width: "36px", height: "36px" }}
                                    >
                                        <i className={`bx ${icon} fs-5`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>


                        <div className="col-md-2">
                            <h6 className="fw-bold mb-3 pb-2 border-bottom border-3 border-danger d-inline-block">
                                <i className="bx bx-navigation me-2"></i> Navigasi
                            </h6>

                            <ul className="list-unstyled">
                                {[
                                    { label: "Beranda", href: "#hero", icon: "bx bx-home" },
                                    { label: "Harga", href: "#harga", icon: "bx bx-money" },
                                    { label: "Testimoni", href: "#testimoni", icon: "bx bx-star" },
                                    { label: "Kontak", href: "#kontak", icon: "bx bx-phone-call" }
                                ].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-decoration-none text-light d-flex align-items-center mb-2"
                                        >
                                            <i className={`${item.icon} me-2`}></i>{item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <h6 className="fw-bold mb-3 pb-2 border-bottom border-3 border-danger d-inline-block">
                                <i className="bx bx-trophy me-2"></i> Fitur Unggulan
                            </h6>

                            <ul className="list-unstyled">
                                {[
                                    { label: "Sopir Profesional", icon: "bx bx-user-check" },
                                    { label: "Armada Terbaru", icon: "bx bx-car" },
                                    { label: "Layanan 24 Jam", icon: "bx bx-time-five" },
                                    { label: "Antar Jemput", icon: "bx bx-map-pin" }
                                ].map((item, index) => (
                                    <li key={index} className="mb-2 d-flex align-items-center">
                                        <i className={`${item.icon} me-2`}></i>{item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <h6 className="fw-bold mb-3 pb-2 border-bottom border-danger  border-3 d-inline-block">
                                <i className="bx bx-phone me-2"></i> Hubungi Kami
                            </h6>

                            {[
                                { icon: "bx bx-phone", text: "+62 812-3456-7890" },
                                { icon: "bx bx-envelope", text: "rentalmobil@email.com" },
                                { icon: "bx bx-map", text: "Jl. Utama No. 123, Jakarta" }
                            ].map((item, index) => (
                                <p className={`mb-${index === 2 ? "0" : "1"}`} key={index}>
                                    <i className={`${item.icon} me-2`}></i>{item.text}
                                </p>
                            ))}
                        </div>

                        <div className="col-md-3">
                            <h6 className="fw-bold mb-3 pb-2 border-bottom border-3 border-danger d-inline-block">
                                <i className="bx bx-mail-send me-2"></i> Newsletter
                            </h6>
                            <div className="card text-light shadow" style={{ background: "rgba(0,0,0,0.5)" }}>
                                <div className="card-body">
                                    <p className="small">
                                        Dapatkan info promo dan penawaran menarik langsung ke email Anda.
                                    </p>
                                    <form className="d-flex flex-column gap-2">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email kamu"
                                            required
                                        />
                                        <button type="submit" className="btn btn-danger shadow w-100">
                                            <i className="bx bx-send me-1"></i>
                                            Berlangganan
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    <hr className="my-4 border-secondary" />

                    <div className="text-center text-light small">
                        &copy; {new Date().getFullYear()} RentalMobilKu. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
