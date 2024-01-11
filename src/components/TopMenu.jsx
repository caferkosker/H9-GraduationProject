import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Meram Belediyesi Satış Mağazası
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                İşlemler
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/account/signin">
                    Giriş Yap
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/signup">
                    Kaydol
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    Ödeme Sayfası
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    İletişim
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Konyaya Özgü Ürünler
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Moda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Süpermarket
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Elektronik
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Mobilya
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Bahçe Ürünleri
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
