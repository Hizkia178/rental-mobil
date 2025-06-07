import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#dc3545",
            border: "none",
            borderRadius: "50%",
            width: "55px",
            height: "55px",
            color: "white",
            cursor: "pointer",
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          aria-label="Scroll to top"
          className="shadow"
        >
          <i className="bx bx-up-arrow-alt"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
