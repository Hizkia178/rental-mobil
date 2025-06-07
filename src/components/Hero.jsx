const services = [
    {
        icon: 'bx bxs-car',
        title: 'Armada Terawat'
    },
    {
        icon: 'bx bxs-wallet',
        title: 'Harga Terjangkau'
    },
    {
        icon: 'bx bx-map',
        title: 'Antar Jemput'
    },
    {
        icon: 'bx bx-time-five',
        title: 'Layanan 24 Jam'
    }
];


const images = [
    '/images/car3.jpg',
    '/images/car4.jpg',
    '/images/car3.jpg',
    '/images/car4.jpg'
];



const Hero = () => {
    return (
        <section className="py-5 bg-white overflow-hidden" id="hero">
            <div className="container" style={{ paddingTop: 60 }}>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0" data-aos-duration="1000" data-aos="fade-down">
                        <div className="d-flex flex-wrap gap-2" data-aos-delay="600" data-aos="fade-down">
                            <span className="badge bg-danger mb-2 shadow px-3 rounded py-2 fs-6">
                                <i className="bx bx-crown me-1"></i>
                                #1 Rental Mobil Pilihan Warga
                            </span>
                        </div>


                        <h1 className="display-4 fw-bold mb-3" data-aos-delay="500" data-aos="fade-down">
                            Rental Mobil <span className="text-danger d-block">Terbaik</span>
                        </h1>
                        <p className="lead text-muted mb-4" data-aos-delay="400" data-aos="fade-down">
                            Nikmati layanan rental mobil terbaik dengan armada bersih, harga terjangkau, dan proses pemesanan super mudah.
                        </p>

                        <div className="row mt-5">
                            {services.map((service, index) => (
                                <div className="col-md-6 col-6 col-lg-3 mb-4" key={index} data-aos-delay="600" data-aos="fade-down">
                                    <div className="card h-100 border-0 shadow rounded text-center p-3">
                                        <div className="d-flex align-items-center justify-content-center bg-white text-danger fs-3 mb-3 p-3 rounded-circle shadow mx-auto">
                                            <i className={service.icon}></i>
                                        </div>
                                        <h6 className="fw-bold mt-2">{service.title}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="d-flex flex-wrap gap-3">
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <button className="btn btn-danger shadow d-flex align-items-center btn-lg">
                                    <i className="bx bxl-whatsapp fs-5 me-1"></i>
                                    Hubungi via WhatsApp
                                </button>
                            </a>
                            <a href="#harga" className="text-decoration-none">
                                <button className="btn btn-outline-danger shadow d-flex align-items-center btn-lg">
                                    <i className="bx bx-money fs-5 me-1"></i>
                                    Lihat Harga
                                </button>
                            </a>
                        </div>


                    </div>

                    <div className="col-md-6" data-aos-delay="600" data-aos="fade-left">
                        <div id="carouselHero" className="carousel slide shadow rounded-4 overflow-hidden" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {images.map((src, idx) => (
                                    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                                        <img src={src} className="d-block w-100 img-fluid" style={{ height: 'max-content' }} alt={`Mobil ${idx + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHero" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselHero" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>


                </div>

                <div className="card mt-5 shadow border-0 rounded p-4" data-aos-duration="1000" data-aos="fade-down">
                    <div className="text-md-start mb-4">
                        <span className="badge bg-danger mb-2 px-3 py-2 fs-6 shadow rounded">
                            <i className="bx bx-search-alt me-1"></i>
                            Cari Mobil Sekarang
                        </span>
                        <h4 className="fw-bold">Form Pencarian Rental Mobil</h4>
                    </div>

                    <form>
                        <div className="row justify-content-center g-3">
                            <div className="col-12 col-md-4">
                                <input
                                    type="text"
                                    className="form-control shadow"
                                    placeholder="Lokasi Penjemputan"
                                />
                            </div>
                            <div className="col-6 col-md-3">
                                <input type="date" className="form-control shadow" />
                            </div>
                            <div className="col-6 col-md-3">
                                <select className="form-select shadow">
                                    <option value="">Tipe Mobil</option>
                                    <option value="matic">Matic</option>
                                    <option value="manual">Manual</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-2">
                                <button type="submit" className="btn btn-danger w-100 d-flex align-items-center justify-content-center shadow">
                                    <i className="bx bx-search-alt fs-5 me-1"></i>
                                    Cari
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Hero;