import { fileStub } from "./files.stub";
import {staffStub} from "./staff.stub";

export const patientStub = (): any => {
  return {
    _id: '61114c94a69d4672e79257f3',
    name: "Victor",
    surname: "mouradian",
    email: "test@promotal.com",
    gender: "M",
    codeGestion: "121324",
    active: true,
    etablissement: '61114c94a69d4672e79257f3',
    consultations: [],
    phone: "+33751148330",
    height: 34,
    weight: 43,
    files: [
      {
        filename: fileStub().filename,
        key: fileStub().key,
        objectType: 'patient',
      },
    ],
    street: "32 rue de la république",
    cp: 75001 as Number,
    imc: { value: 76, indice: "Corpulence normale" },
    city: "Paris",
    secu: "190129307805145",
    codeRegime: "1",
    caisse: "1",
    vaccins: "",
    allergy: "",
    agreement: "ouii",
    notes: "",
    birthday: new Date("2001-9-11"),
    id: "eg",
    parents: [],
    attendingPhysician: { firstname: "jean", lastname: "dupont" },
    medecins: [staffStub('MEDECIN'), staffStub('MEDECIN')]
  };
};
