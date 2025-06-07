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


const Hero = () => {
    return (
        <section className="py-5 bg-white overflow-hidden" id="hero">
            <div className="container" style={{ paddingTop: 60 }}>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="d-flex flex-wrap gap-2">
                            <span className="badge bg-danger mb-2 shadow px-3 rounded py-2 fs-6">
                                <i className="bx bx-crown me-1"></i>
                                #1 Rental Mobil Pilihan Warga
                            </span>
                        </div>


                        <h1 className="display-4 fw-bold mb-3">
                            Rental Mobil <span className="text-danger d-block">Terbaik</span>
                        </h1>
                        <p className="lead text-muted mb-4">
                            Nikmati layanan rental mobil terbaik dengan armada bersih, harga terjangkau, dan proses pemesanan super mudah.
                        </p>

                        <div className="row mt-5">
                            {services.map((service, index) => (
                                <div className="col-md-6 col-lg-3 mb-4" key={index}>
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
                                <button className="btn btn-outline-primary shadow d-flex align-items-center btn-lg">
                                    <i className="bx bx-money fs-5 me-1"></i>
                                    Lihat Harga
                                </button>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Hero;