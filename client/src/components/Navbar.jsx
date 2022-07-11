import icon from './../icon.jpg';

function navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className='d-flex justify-content-start align-items-center'>
                    <div className='w-25'>
                        <img src={icon} width="35" height="35"/>
                    </div>
                    <span className="navbar-brand ms-3 h1" style={{textAlign: 'center'}}> Key Saver </span>
                </div>
            </div>
        </nav>
    );
}

export default navbar;