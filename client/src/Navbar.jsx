import icon from './icon.jpg';

function navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={icon} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    &nbsp;Key Saver
                </a>
                <form className="d-flex">
                    <div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Welcome 'Nome'
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Settings</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default navbar;