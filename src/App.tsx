import React, {useState} from 'react';
import './App.css';

function App() {


    const [hidden, setHidden] = useState(true);

    return (
        <div className="App h-screen flex flex-col justify-between items-center p-10">
{/*            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                {
                    ['thomas', 'arnaud', 'fabien', 'sophie', 'lucien', 'laura', 'nicolas', 'fabius'].map((name, idx) =>
                        <div className={`rotate-45  shadow-md p-10 w-full gap-4 ${idx%2 === 0 ? `bg-black` : `bg-white`}`}>
                            <p className={`text-3xl font-bold uppercase italic ${idx%2 !== 0 ? `text-black` : `text-white`}`}>{name}</p>
                        </div>
                    )
                }
            </div>*/}

            <div className={`rotate-35  shadow-md p-10 w-full gap-4 bg-black`}>
                <p className="text-4xl font-bold uppercase italic text-white">Linna Linny 😈</p>
            </div>

            <div onClick={() => setHidden(false)} className={`rotate-35  shadow-lg p-10 w-full gap-4 bg-white`}>
                <p className="text-4xl font-bold uppercase italic text-black">My onlyfans 😘</p>
            </div>


            <div hidden={hidden} className={`shadow-md`}>
                <img className="h-full z-8 blur-sm" src={'https://image.noelshack.com/fichiers/2023/10/4/1678400961-zefef.jpg'}/>
                <div onClick={() => setHidden(false)} className={`-mt-10 z-10 shadow-lg p-10 w-full gap-4 bg-white`}>
                    <p className="text-4xl font-bold uppercase italic text-black">My Paypal 💵</p>
                </div>
            </div>

        </div>
    )
}

export default App;
