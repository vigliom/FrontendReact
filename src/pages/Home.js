import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="offcanvas offcanvas-start bg-dark" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Empresa1</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                
                    <a href="/inicio" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span >Empresa1</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li>
                            <a href="/inicio" className="nav-link text-white">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/producto" className="nav-link text-white">
                                Productos
                            </a>
                        </li>
                        <li>
                            <a href="/terceros/clientes" className="nav-link text-white">
                                Clientes
                            </a>
                        </li>
                        <li>
                            <a href="/terceros/proveedores" className="nav-link text-white">
                                Proveedores
                            </a>
                        </li>
                        <li>
                            <a href="/terceros" className="nav-link text-white">
                                Terceross
                            </a>
                        </li>
                        <li>
                            <a href="/ventas" className="nav-link text-white">
                                Ventas
                            </a>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        </div>
    )
}
