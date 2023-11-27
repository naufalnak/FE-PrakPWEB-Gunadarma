import React from "react";

const NavbarComponent = () =>{
    return(
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="/" className="text-white font-bold text-lg">Logo</a>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-white">Homepage</a></li>
                        <li><a href="/tambah_data" className="text-white">Tambah Data Mahasiswa</a></li>
                        <li><a href="/edit_data" className="text-white">Edit Data Mahasiswa</a></li>
                        <li><a href="/data_mhs" className="text-white">Data Mahasiswa</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;
