
function navbar() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <img src={icon} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    &nbsp;Key Saver
                </a>
                <form class="d-flex">
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Welcome 'Nome'
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Settings</a>
                                <a class="dropdown-item" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}