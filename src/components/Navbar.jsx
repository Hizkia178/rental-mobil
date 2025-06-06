import { useState, useEffect } from 'react';

const menuItems = [
  { id: 'hero', label: 'Home', icon: 'bx-home' },
  { id: 'kendaraan', label: 'Kendaraan', icon: 'bx-car' },
  { id: 'paket-promo', label: 'Paket & Promo', icon: 'bx-tag' },
  { id: 'cara-booking', label: 'Cara Booking', icon: 'bx-book' },
  { id: 'testimoni', label: 'Testimoni', icon: 'bx-comment-detail' },
  { id: 'faq', label: 'FAQ', icon: 'bx-help-circle' },
  { id: 'kontak', label: 'Kontak', icon: 'bx-phone' },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('hero');
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClickMenu = (id) => {
    setActiveMenu(id);
    scrollToSection(id);
    setShowOffcanvas(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';
      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = id;
        }
      });
      setActiveMenu(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow py-3" data-aos="fade-down" data-aos-duration="1000">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center fw-bold" onClick={() => handleClickMenu('hero')}>
            <i className="bx bx-car me-2 text-danger"></i>
            Rental <span className="text-danger">Mobil</span>
          </a>

          <button className="navbar-toggler border-0" type="button" onClick={() => setShowOffcanvas(true)} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-1">
              {menuItems.map(({ id, label, icon }) => (
                <li className="nav-item" key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link d-flex align-items-center ${activeMenu === id ? 'bg-danger text-white shadow rounded' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickMenu(id);
                    }}
                    style={{ padding: '8px 12px' }}
                  >
                    <i className={`bx ${icon} me-2`}></i>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas Mobile */}
      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`}
        style={{ visibility: showOffcanvas ? 'visible' : 'hidden', width: '65vw' }}
        tabIndex="-1"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold d-flex align-items-center">
            <i className="bx bx-car me-2 text-danger"></i>
            Rental <span className="text-danger">Mobil</span>
          </h5>
          <button type="button" className="btn-close" onClick={() => setShowOffcanvas(false)} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="navbar-nav">
            {menuItems.map(({ id, label, icon }) => (
              <li className="nav-item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link d-flex align-items-center px-4 py-3 border-bottom ${activeMenu === id ? 'bg-danger text-white shadow rounded' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickMenu(id);
                  }}
                >
                  <i className={`bx ${icon} me-3`}></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {showOffcanvas && <div className="offcanvas-backdrop fade show" onClick={() => setShowOffcanvas(false)} />}
    </>
  );
};

export default Navbar;
