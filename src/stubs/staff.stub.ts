export const staffStub = (status?: string): any => {
  return {
    _id: '61114c94a69d4672e79257f3',
    name: 'Didier',
    surname: 'Raoult',
    cps: '12347',
    email: 'test@1promotal.com',
    status: status ? status : 'MEDECIN',
    city: "Paris",
    street: "Rue de la paix",
    cp: 75001,
    active: true,
    etablissement: '1234567893464f14678934ca',
    stripe: '',
    consultations: [],
    etablissements: ['1234567893464f14678934ca'],
    phone: "+33751111111",
    slots: [],
    contacts: [
      {
        contact: '1234567893464f14678934ca',
        requestBy: '61114c94a69d4672e79257f3',
        status: 'accepted'
      },
      {
        contact: '1234567893464f14678934ca',
        requestBy: '61114c94a69d4672e79257f3',
        status: 'pending'
      },
      {
        contact: '1234567893464f14678934ca',
        requestBy: '61114c94a69d4672e79257f3',
        status: 'pending'
      }
    ],
    orders: [],
    bulkOrders: [],
    externalAccounts: new Map([]),
  }
}
