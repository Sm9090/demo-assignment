import { ActionBarProps } from "../../utils/type";
import archive from "../../assets/archive.png";
import profile from "../../assets/profile-add.png";
import React from "react";
import Modal from "../../components/Modal/Modal";
import add from "../../assets/add.png"

function ActionBar({ selectedClients, selectTable ,addNewClient }: ActionBarProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
    <div className="flex flex-1 space-x-2 items-end">
      <div className="border-[1px] flex-1 h-[1px] mb-[18px]"></div>
      {selectedClients.length > 0 && (
        <div className="flex items-center gap-2 mb-[10px]">
          <img
            src={selectTable === "In treatment" ? archive : profile}
            alt="archive"
            width={16}
          />
          <button className="text-brand-primary text-[14px]">
            {selectTable === "In treatment" ? "Deactivate" : "Reactivate"}
          </button>
        </div>
      )}
      {selectTable === "In treatment" && (
        <button className="flex items-center font-normal text-[16px] border border-brand-primary text-brand-primary px-[30.70px] py-2 rounded-[4px]" onClick={toggleModal}>
          <img src={add} alt="add" width={16} className="mr-2" /> Add new Client
        </button>
      )}
    </div>
    <Modal  isOpen={isModalOpen}
        onClose={toggleModal} addClient={addNewClient}/>
    </>
  );
}

export default ActionBar;
