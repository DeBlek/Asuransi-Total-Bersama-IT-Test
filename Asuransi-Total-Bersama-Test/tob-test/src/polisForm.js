//Import Library
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from "moment/moment";

//Import File
import './style.css';

const PolisForm = ({ addPolis, selectedPolis }) => {
    const [nomorPolis, setNomorPolis] = useState('');
    const [namaTertanggung, setnamaTertanggung] = useState('');
    const [tanggalEfektif, settanggalEfektif] = useState('');
    const [tanggalExpired, settanggalExpired] = useState('');
    const [merekKendaraan, setmerekKendaraan] = useState('');
    const [tipeKendaraan, settipeKendaraan] = useState('');
    const [tahunKendaraan, settahunKendaraan] = useState(0);
    const [hargaKendaraan, sethargaKendaraan] = useState(0);
    const [ratePremi, setratePremi] = useState(0);

    const history = useHistory();

    useEffect(() => {
        if(selectedPolis) {
            setNomorPolis(selectedPolis.nomorPolis);
            setnamaTertanggung(selectedPolis.namaTertanggung);
            settanggalEfektif(selectedPolis.namaTertanggung);
            settanggalExpired(selectedPolis.tanggalExpired);
            setmerekKendaraan(selectedPolis.merekKendaraan);
            settipeKendaraan(selectedPolis.tipeKendaraan);
            settahunKendaraan(selectedPolis.tahunKendaraan);
            sethargaKendaraan(selectedPolis.hargaKendaraan);
            setratePremi(selectedPolis.ratePremi);
        }
    }, [selectedPolis]);

    const handleSubmit = (e) =>{

        //Memasukkan Nomor Polis
        const generatedNomorPolis = moment().format('DDMMYYYY') + '-' + Math.floor(Math.random() * 1000);
        setNomorPolis(generatedNomorPolis);

        //Menghitung Harga Premi
        const hargaPremi = hargaKendaraan * (ratePremi / 100);

        //Membentuk Polis Baru
        const newPolis = {
            nomorPolis: generatedNomorPolis,
            namaTertanggung,
            tanggalEfektif,
            tanggalExpired,
            merekKendaraan,
            tipeKendaraan,
            tahunKendaraan,
            hargaKendaraan,
            ratePremi,
            hargaPremi,
        };

        //Menambahkan Polis ke Daftar Polis
        addPolis(newPolis);

        //Mengulang Form
        setnamaTertanggung('');
        settanggalEfektif('');
        settanggalExpired('');
        setmerekKendaraan('');
        settipeKendaraan('');
        settahunKendaraan(0);
        sethargaKendaraan(0);
        setratePremi(0);

        history.push('/daftarPolis');
    };  

    return(
        <div className='formContainer'>
            <div className='titlePage'>
                <p>Tambah Polis</p>
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
                        <button type='submit'>Tambah Polis</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PolisForm;