function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100 bg-primary-99 position-fixed top-0 start-0 d-lg-flex justify-content-between">
        <div className="nav-box container d-lg-none d-flex flex-row justify-content-between align-items-center">
          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand m-0 d-inline" href="#">
            <img
              src="src/images/logo/Logo-Type-sm.svg"
              alt="logo"
              className=""
            />
          </a>
        </div>
        <div className="container-lg px-0 px-lg-3">
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <a className="m-0 d-none d-lg-inline" href="index.html">
              <img src="src/images/logo/Logo-Type.svg" alt="logo-lg" />
            </a>
            <ul className="navbar-nav text-center gap-lg-10 bg-primary-99 align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link nav-link-bg px-0 py-4 fs-h6 fw-bold"
                  href="search.html"
                >
                  找遊戲
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-bg px-0 py-4 fs-h6 fw-bold"
                  href="#"
                >
                  揪團去
                </a>
              </li>
              <li className="auth-button">
                <button
                  id="auth-btn"
                  type="button"
                  className="btn w-100 nav-link-bg px-0 py-4 fs-h6 fw-bold border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#login-modal"
                >
                  登入
                </button>
              </li>
              <li className="auth-button">
                <button
                  id="auth-btn"
                  type="button"
                  className="btn w-100 nav-link-bg px-0 py-4 fs-h6 fw-bold border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#login-modal"
                >
                  註冊
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
    </>
  );
}
export default Header;
