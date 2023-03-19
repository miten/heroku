import React, {useState} from 'react';
import './App.css';
import {PhoneIcon, ScaleIcon} from "@heroicons/react/20/solid";
import {patientStub} from "./stubs/patient.stub";
import {consultationStub} from "./stubs/consultation.stub";
import Card from "./Card";

function App() {

    const patient = patientStub();
    const consultations = [consultationStub(), consultationStub('completed')]

    const cards = [
        { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
        { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
        { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
    ]
    const [hidden, setHidden] = useState(true);

    return (
        <div className="App h-screen w-screen flex justify-center">
            <div className="w-full max-w-screen-sm bg-gray-300 gap-3 flex flex-col">
                {
                    consultations.map((consultation: any, idx: number) =>
                        <Card key={idx} consultation={consultation}/>
                    )
                }
            </div>
        </div>
    )
}

export default App;
