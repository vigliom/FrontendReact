import React from 'react'

export default function Navbar() {

var logo = 'https://github.com/vigliom.png';

    return (
        <div>
            <div className="px-3 py-2 text-bg-dark w-100">
                <div className="d-flex flex-wrap align-content-lg-between justify-content-between">
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Menu</button>
                    <a className="text-white page-link" href="/home"><h1>ERPSolved</h1></a>
                    <div className="dropdown" id="myDropdown">
                        <button id="myInput" onClick="myFunction" href="#" className="dropdownbtn  d-flex align-items-center text-white text-decoration-none dropdown-toggle bg-dark" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={logo} alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>vigliom</strong>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="/user">Usuarios</a></li>
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><form action="@{/logout}" method="post"><button className="dropdown-item" type="submit">Desconectar</button></form></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
