import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div class="px-3 py-2 text-bg-dark w-100">
                <div class="d-flex flex-wrap align-content-lg-between justify-content-between">
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Menu</button>
                    <a class="text-white page-link" href="/home"><h1>ERPSolved</h1></a>
                    <div class="dropdown" id="myDropdown">
                        <button id="myInput" onClick="myFunction" href="#" class="dropdownbtn  d-flex align-items-center text-white text-decoration-none dropdown-toggle bg-dark" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>vigliom</strong>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a class="dropdown-item" href="/user">Usuarios</a></li>
                            <li><a class="dropdown-item" href="/asdsd">Perfil</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><form action="@{/logout}" method="post"><button class="dropdown-item" type="submit">Desconectar</button></form></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
