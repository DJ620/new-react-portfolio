import React, { useEffect } from 'react';
import About from '../../Pages/About/About';
import "./Main.css";

function Main({page}) {
    useEffect(() => {

    }, [page]);

    return (
        <main>
            <div className="block">
                {page}
            </div>
        </main>
    )
}

export default Main;
