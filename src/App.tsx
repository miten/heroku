import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App h-screen flex-col flex-wrap items-center p-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                {
                    ['thomas', 'arnaud', 'fabien', 'sophie', 'lucien', 'laura', 'nicolas', 'fabius'].map((name, idx) =>
                        <div className={`shadow-md p-10 w-full gap-4 ${idx%2 === 0 ? `bg-black` : `bg-white`}`}>
                            <p className={`text-3xl font-bold uppercase italic ${idx%2 !== 0 ? `text-black` : `text-white`}`}>{name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App;
