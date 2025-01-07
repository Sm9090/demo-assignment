import React from "react";
import { ModalProps } from "../../utils/type";
import Close from "../../assets/Close.png";
import Radio from "../Inputs/Radio";
import Input from "../Inputs/Input";
import YearPickerInput from "../Inputs/DatePicker";
import SelectOption from "../Inputs/Select-Option";
import ToggleButton from "../Inputs/Toggle-Button";
import { formatDate } from "../../utils/helper";


function Modal({ isOpen, onClose ,addClient}: ModalProps) {
  const [clientType, setClientType] = React.useState<string>("Individual");
  const [pronoun, setPronoun] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [name2, setName2] = React.useState<string>("");
  const [yearOfBirth, setYearOfBirth] = React.useState<string>("");
  const [extraNotes, setExtraNotes] = React.useState<string>("");

  const handleClientTypeChange = (type: string) => {
    setClientType(type);
  };

  const handlePronounChange = (pronoun: string) => {
    setPronoun(pronoun);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newClient = {
      clientName: clientType === "Individual" ? name : `${name} & ${name2}`,
      clinicianName: name, 
      clientType,
      notes: extraNotes,
      yearOfBirth: yearOfBirth || "N/A",
      pronoun: clientType === "Individual" ? pronoun : "N/A",
      lastSession: formatDate(new Date()), 
      status: 'In treatment'
    };
    addClient(newClient);
    onClose();
  };

  return (
    <div>
      {" "}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={onClose}
        >
          <div
            className="bg-white rounded-[16px] p-6 max-w-[528px]  shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col justify-end gap-2">
              <div className="relative h-[40px]">
                <h2 className="text-[20px] font-bold pt-4 text-center">
                  Add new client
                </h2>
                <button className="absolute right-0 top-0" onClick={onClose}>
                  <img src={Close} width={24} alt="Close" />
                </button>
              </div>
              <div>
                <p className="text-center text-[14px] text-[#707070] font-light">
                  This client information is essential for generating detailed
                  clients documents
                </p>
              </div>
            </div>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="text-[12px] font-light space-y-2">
                <div>
                  Client type <span className="text-[#F3404F]">*</span>
                </div>
                <div className="space-x-4">
                  <Radio
                    title="Individual"
                    bgColor={true}
                    clientType={clientType}
                    onChange={handleClientTypeChange}
                  />
                  <Radio
                    title="Couple"
                    bgColor={true}
                    clientType={clientType}
                    onChange={handleClientTypeChange}
                  />
                </div>
              </div>
              <Input
                title="Name"
                placeholder="Enter your name"
                required={true}
                onChange={setName}
              />
              {clientType === "Individual" ? (
                <>
                  <div>
                    <div className="text-[12px] font-light space-y-2">
                      Pronouns <span className="text-[#F3404F]">*</span>
                    </div>
                    <div className="flex justify-between space-y-2">
                      <Radio
                        title="He/Him"
                        clientType={pronoun}
                        onChange={handlePronounChange}
                      />
                      <Radio
                        title="She/Her"
                        clientType={pronoun}
                        onChange={handlePronounChange}
                      />
                      <Radio
                        title="They/Them"
                        clientType={pronoun}
                        onChange={handlePronounChange}
                      />
                    </div>
                  </div>
                  <YearPickerInput title="Year of birth" onChange={setYearOfBirth} />
                </>
              ) : (
                <Input
                  title="Name 2"
                  placeholder="Enter your name"
                  required={true}
                  onChange={setName2}
                />
              )}
              <SelectOption
                title="Diagnosis"
                required={false}
              />
              <ToggleButton title="High risk client" required={false} />
              <Input
                title="Extra notes"
                placeholder="Extra information about your client"
                required={false}
                onChange={setExtraNotes}
              />

              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-[#731054] text-white px-4 py-2 rounded text-[14px] font-extralight"
                >
                  Add Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
