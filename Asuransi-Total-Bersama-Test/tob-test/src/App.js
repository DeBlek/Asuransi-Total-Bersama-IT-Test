//Import Library
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";

//Import File
import PolisForm from "./polisForm";
import DaftarPolis from "./daftarPolis";
import EditPolis from "./editPolis";
import './style.css';

const App = () => {
    const history = useHistory();
    const [daftarPolis, setdaftarPolis] = useState('');

    const addPolis = (newPolis) => {
        setdaftarPolis([...daftarPolis, newPolis]);
    };

    const deletePolis = (nomorPolis) => {
        const updatedList = daftarPolis.filter((polis) => polis.nomorPolis !== nomorPolis);
        setdaftarPolis(updatedList);
    };  

    const updatePolis = (updatedPolis) => {
        const updatedList = daftarPolis.map((polis) => {
            if (polis.nomorPolis === updatedPolis.nomorPolis){
                return updatedPolis;
            }
            return polis;
        });
        setdaftarPolis(updatedList);
    };

    return(
        <Router>
            <div>
                <div className="navigation">
                    <div className="logo">
                        <p>Penghitung Premi</p>
                    </div>
                    <div className="navBtn">
                        <Link className="link" to="/">Tambah Polis</Link>
                        <Link className="link" to="/daftarPolis">Daftar Polis</Link>
                    </div>
                </div>            

                <Switch>
                    <Route exact path="/">
                        <PolisForm addPolis={addPolis}/>
                    </Route>
                    <Route path="/daftarPolis">
                        <DaftarPolis daftarPolis={daftarPolis} deletePolis={deletePolis}/>
                    </Route>
                    <Route path="/editPolis/:nomorPolis">
                        <EditPolis daftarPolis={daftarPolis} updatePolis={updatePolis}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;