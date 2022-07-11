import icon from './icon.jpg';

function navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={icon} className="p-2 vw-25"/>
                <span className="navbar-brand">
                    Key Saver
                </span>
            </div>
        </nav>
    );
}

export default navbar;