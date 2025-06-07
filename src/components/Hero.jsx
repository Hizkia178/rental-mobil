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