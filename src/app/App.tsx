import React, {useEffect, useState} from 'react';
import {Shop} from "../pages/shop/Shop";
import {initApp} from "./initApp";
import {Loader} from "../components/Loader/Loader";

function App() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initApp().then(() => setInit(true));
    }, [])
    if (!init) {
        return <Loader/>
    }
    return (
        <div className="App">
            <Shop/>
        </div>
    );
}

export default App;
