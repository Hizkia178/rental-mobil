import { useState, useEffect } from "react";

const navLinks = [
  { id: "hero", label: "Home", iconClass: "bx bx-home" },
  { id: "kendaraan", label: "Kendaraan", iconClass: "bx bx-car" },
  { id: "paket-promo", label: "Paket & Promo", iconClass: "bx bx-tag" },
  { id: "cara-booking", label: "Cara Booking", iconClass: "bx bx-book" },
  { id: "testimoni", label: "Testimoni", iconClass: "bx bx-comment-detail" },
  { id: "faq", label: "FAQ", iconClass: "bx bx-help-circle" },
  { id: "kontak", label: "Kontak", iconClass: "bx bx-phone" },
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [userClicked, setUserClicked] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setNavbarFixed(window.scrollY > 50);

      if (!userClicked) {
        let current = "hero";
        navLinks.forEach(({ id }) => {
          const section = document.getElementById(id);
          if (section) {
            const top = section.offsetTop - 80;
            if (window.scrollY >= top) {
              current = id;
            }
          }
        });
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [userClicked]);


  useEffect(() => {
    if (userClicked) {
      const timer = setTimeout(() => setUserClicked(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [userClicked]);


  useEffect(() => {
    document.body.style.overflow = offcanvasShow ? "hidden" : "";
  }, [offcanvasShow]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setUserClicked(true);
    }
    setOffcanvasShow(false); 
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-white py-3 shadow ${navbarFixed ? "fixed-top" : ""}`} data-aos-duration="1000" data-aos="fade-down">
        <div className="container">
          <a href="#" className="navbar-brand fw-bold" onClick={() => scrollToSection("hero")}>
            Rental <span className="text-danger">Mobil</span>
          </a>
          {/* Offcanvas toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOffcanvasShow(true)}
            aria-controls="offcanvasNavbar"
            aria-expanded={offcanvasShow}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop navbar */}
          <div className="d-none d-lg-block">
            <ul className="navbar-nav ms-auto">
              {navLinks.map(({ id, label, iconClass }) => (
                <li className="nav-item" key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link d-flex align-items-center gap-1 ${
                      active === id ? "bg-danger shadow text-white rounded" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                  >
                    <i className={iconClass} style={{ fontSize: "20px" }}></i>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas menu for mobile */}
      <div
        className={`offcanvas offcanvas-end ${offcanvasShow ? "show" : ""}`} data-aos-duration="1200"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{ visibility: offcanvasShow ? "visible" : "hidden", width: "75vw" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
            Rental <span className="text-danger">Mobil</span>
          </h5>
          <button type="button" className="btn-close text-reset" aria-label="Close" onClick={() => setOffcanvasShow(false)}></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {navLinks.map(({ id, label, iconClass }) => (
              <li className="nav-item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link d-flex align-items-center gap-2 ${
                    active === id ? "bg-danger shadow text-white rounded" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                >
                  <i className={iconClass} style={{ fontSize: "22px" }}></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {offcanvasShow && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={() => setOffcanvasShow(false)}
          style={{ cursor: "pointer" }}
        ></div>
      )}
    </>
  );
};

export default Navbar;
