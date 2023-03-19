import {staffStub} from "./staff.stub";

export const consultationStub = (status?: string): any => {
  return {
    _id: '6114e58aed0b0bbbdd4a19d7',
    slot: "slot?",
    status: status ? status : 'scheduled',
    type: 'classic',
    mesures: [
      {label: 'Tension', value: null, unit: 'mmHg', order: 1},
      {label: 'Saturation O2', value: null, unit: '%', order: 2},
      {label: 'Pulsations', value: null, unit: 'bpm', order: 3},
      {label: 'Temperature', value: null, unit: '°C', order: 4},
      {label: 'Poids', value: null, unit: 'kg', order: 5},
      {label: 'Taille', value: null, unit: 'cm', order: 6},
      {label: 'Glycemie capillaire', value: null, unit: 'mg/dL', order: 7},
      {label: 'Glycémie capillaire', value: null, unit: 'mg/dL', order: 8},
    ],
    biologicals: [],
    shutdown: false,
    price: 0,
    paid: false,
    files: [
      {
        filename: 'airplane/png',
        key: 'consultation/6114e58aed0b0bbbdd4a19d7/airplane.png',
        objectType: 'consultation',
      },
    ],
    pds: '614b0630fb00037f57a99eef',
    patient: '6140c3a25db7dc67042f1404',
    medecin: staffStub(),
    participants: { specialists: [], parents: [] },
    startDate: new Date('2021-08-10T08:00:00.000Z'),
    notification: 15,
    createdBy: '61114cbba69d4672e79257ff',
    etablissement: '6150f68096b14be4fc2e462b',
    chatRoom: chatRoomStub()._id,
  };
};

export const chatMessageStub = () => {
  return {
    content: 'test',
    author: staffStub()._id.toString(),
    date: new Date('2021-08-10T08:00:00.000Z'),
    read: [staffStub()._id.toString()],
  }
};


export const chatRoomStub = () => {
  return {
    _id: '6114e58aed0b0bbbdd4a19d8',
    users: [staffStub()],
    messages: [chatMessageStub()],
  }
}
