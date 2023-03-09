import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App h-screen flex-col flex-wrap items-center p-10">
            <div className="w-3/12 flex gap-4">
                {
                    ['thomas', 'arnaud', 'fabien', 'sophie', 'lucien', 'laura', 'nicolas', 'fabius'].map(name =>
                        <div className="shadow-md p-10 w-full bg-black gap-4">
                            <p className="text-3xl font-bold uppercase italic text-white">{name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App;
