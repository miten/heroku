import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="w-3/12 flex-col flex-nowrap flex  gap-4">
                {
                    ['thomas', 'arnaud'].map(name =>
                        <div className="shadow-md p-10 w-full bg-black gap-4">
                            <p className="text-white">{name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App;
