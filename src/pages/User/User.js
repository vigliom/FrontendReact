import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function User() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/user/all");
        setUsers(result.data);
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <h1 className='p-4'>Lista de usuarios</h1>
                <table className="table table-hover shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>username</th>
                            <th>email</th>
                            <th>rol</th>
                            <th>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr className="articulo my-1" >
                                    <td key={index}>{index+1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.roles}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>
                                            Ver
                                        </button>
                                        <button className='btn btn-outline-primary mx-2'>
                                            Editar
                                        </button>
                                        <button className='btn btn-outline-danger mx-2'>
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
