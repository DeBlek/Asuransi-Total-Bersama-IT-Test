//Import Library
import React, {useState, useEffect} from "react";
import { useHistory, useParams } from 'react-router-dom';

//Import File
import './style.css';

const EditPolis = ({ daftarPolis, updatePolis }) => {
    const { nomorPolis } = useParams();
    const history = useHistory();

    const [namaTertanggung, setnamaTertanggung] = useState('');
    const [tanggalEfektif, settanggalEfektif] = useState('');
    const [tanggalExpired, settanggalExpired] = useState('');
    const [merekKendaraan, setmerekKendaraan] = useState('');
    const [tipeKendaraan, settipeKendaraan] = useState('');
    const [tahunKendaraan, settahunKendaraan] = useState(0);
    const [hargaKendaraan, sethargaKendaraan] = useState(0);
    const [ratePremi, setratePremi] = useState(0);

    useEffect(() =>{
        const polis = daftarPolis.find((polis) => polis.nomorPolis === nomorPolis);
        if (polis) {
            setnamaTertanggung(polis.namaTertanggung);
            settanggalEfektif(polis.tanggalEfektif);
            settanggalExpired(polis.tanggalExpired);
            setmerekKendaraan(polis.merekKendaraan);
            settipeKendaraan(polis.tipeKendaraan);
            settahunKendaraan(polis.tahunKendaraan);
            sethargaKendaraan(polis.hargaKendaraan);
            setratePremi(polis.ratePremi);
        }
    }, [daftarPolis, nomorPolis]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedPolis = {
            nomorPolis,
            namaTertanggung,
            tanggalEfektif,
            tanggalExpired,
            merekKendaraan,
            tipeKendaraan,
            tahunKendaraan,
            hargaKendaraan,
            ratePremi,
            hargaPremi: hargaKendaraan * (ratePremi/100),
        };

        updatePolis(updatedPolis);
        history.push('/daftarPolis');
    }
    return(
        <div className='formContainer'>
            <div className='titlePage'>
                <p>Edit Polis</p>
            </div>
            <div className='formValue'>
                <form onSubmit={handleSubmit}>
                    <div className='value'>
                        <label>Nama Tertanggung : </label>
                        <input type='text' value={namaTertanggung} onChange={(e) => setnamaTertanggung(e.target.value)} required></input>
                    </div>
                    <div className='value'>
                        <label>Tanggal Efektif : </label>
                        <input type='date' value={tanggalEfektif} onChange={(e) => settanggalEfektif(e.target.value)} required></input>
                    </div>
                    <div className='value'>
                        <label>Tanggal Expired : </label>
                        <input type='date' value={tanggalExpired} onChange={(e) => settanggalExpired(e.target.value)} required></input>
                    </div>
                    <div className='value'>
                        <label>Merek Kendaraan : </label>
                        <input type='text' value={merekKendaraan} onChange={(e) => setmerekKendaraan(e.target.value)} required></input>
                    </div>
                    <div className='value'>
                        <label>Tipe Kendaraan : </label>
                        <input type='text' value={tipeKendaraan} onChange={(e) => settipeKendaraan(e.target.value)} required></input>
                    </div>
                    <div className='value'>
                        <label>Tahun Kendaraan : </label>
                        <input type='number' value={tahunKendaraan} onChange={(e) => settahunKendaraan(parseInt(e.target.value))} required></input>
                    </div>
                    <div className='value'>
                        <label>Harga Kendaraan : </label>
                        <input type='number' value={hargaKendaraan} onChange={(e) => sethargaKendaraan(parseInt(e.target.value))} required></input>
                    </div>
                    <div className='value'>
                        <label>Rate Premi : </label>
                        <input type='number' value={ratePremi} onChange={(e) => setratePremi(parseFloat(e.target.value))} required></input>
                    </div>
                    <div className='submitBtn'>
                        <button type='submit'>Edit Polis</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPolis;