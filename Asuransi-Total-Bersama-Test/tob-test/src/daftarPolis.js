//Import Library
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//Import File
import './style.css';

const DaftarPolis = ({ daftarPolis, deletePolis}) => {
    if(daftarPolis.length === 0){
        return(
            <div className="empty">
                <p>Tidak Ada Polis</p>
            </div>
        );
    };

  return(
    <div className="daftarPolis">
        <table>
            <div className="ketTabel">
                <tbody>
                    {daftarPolis.map((polis) => (
                        <tr key={polis.nomorPolis}>
                            <td className="tabel">
                                Nomor Polis<br />
                                {polis.nomorPolis}
                            </td>
                            <td className="tabel">
                                Nama Tertanggung<br />
                                {polis.namaTertanggung}
                            </td>
                            <td className="tabel">
                                Periode<br />
                                {polis.tanggalEfektif} - {polis.tanggalExpired}
                            </td>
                            <td className="tabel">
                                Nama Item<br />
                                {polis.merekKendaraan} - {polis.tipeKendaraan}
                            </td>
                            <td className="tabel">
                                Harga Pertanggungan<br />
                                {polis.hargaKendaraan}
                            </td>
                            <td className="tabel">
                                Harga Premi<br />
                                {polis.hargaPremi}
                            </td>
                            <td className="tabelBtn">
                                <button onClick={() => deletePolis(polis.nomorPolis)}>Hapus</button>
                                <Link to={`/editPolis/${polis.nomorPolis}`} className="editBtn">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </div>
        </table>
    </div>
  );
};

export default DaftarPolis;