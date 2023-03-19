import React from 'react';
import './App.css';
import dayjs from 'dayjs';
import * as feather from 'react-feather';
export type CardProps = {
    consultation: any
}
require('dayjs/locale/fr')

dayjs.locale('fr')


function Card(props: CardProps) {
    const { consultation } = props
    return (
        <div className="shadow bg-white p-3 gap-3 flex flex-col rounded-lg">
            <div className="head border-b-1 flex flex-col gap-y-2 py-3">
                <p className="text-blue-900 capitalize font-bold text-lg">{consultation.medecin.name} {consultation.medecin.surname}</p>
                <p className="text-zinc-400 text-xs capitalize">Médecin généraliste</p>
            </div>
            <div className="infos gap-1 flex flex-row">
                <div className="p-1 gap-1 flex flex-row">
                    <feather.Calendar className="text-zinc-400" size={15}/>
                    <p className="text-zinc-400 text-xs capitalize">
                        {
                            `${dayjs(consultation.startDate).format('ddd')},
                             ${dayjs(consultation.startDate).format('MMM')}
                             ${dayjs(consultation.startDate).format('YY')}`
                        }
                    </p>
                </div>
                <div className="p-1 gap-1 flex flex-row">
                    <feather.Clock className="text-zinc-400" size={15}/>
                    <p className="text-zinc-400 text-xs">
                        {
                            dayjs(consultation.startDate).format('HH:MM')
                        }
                    </p>
                </div>
                <div className="p-1 gap-1 flex-row">
                    <p className="text-zinc-400 text-xs capitalize">
                        {
                            consultation.status
                        }
                    </p>
                </div>
            </div>
            <div className="actions gap-1 flex flex-row justify-between">
                <button className="bg-indigo-100 hover:bg-indigo-200 text-gray-800 font-bold py-2 px-4 rounded-full">
                    Cancel
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Reschedule
                </button>
            </div>
        </div>
    )
}

export default Card;
