function TheHeader() {
    return (
        <>
            <header className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f8f4ed" }}>
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <img src="src/assets/logo.svg" alt="logo" style={{ height: "100px" }} />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default TheHeader;