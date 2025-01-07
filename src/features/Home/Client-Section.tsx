import { clientsData } from "../../utils/mockdata";
import { Client } from "../../utils/type";
import Table from "../../components/Table/Table";
import React from "react";
import StatusTabs from "./StatusTabs";
import Filters from "./Filters";
import ActionBar from "./Action-Bar";
import { addClient, filterClients, getUniqueValues } from "../../utils/helper";

function ClientSection() {
  const [selectTable, setSelectTable] = React.useState<string>("In treatment");
  const [selectedClients, setSelectedClients] = React.useState<number[]>([]);
  const [clientNameQuery, setClientNameQuery] = React.useState<string>("");
  const [clinicianNameQuery, setClinicianNameQuery] =
    React.useState<string>("");
  const [clients, setClients] = React.useState<Client[]>(clientsData);

  const filteredClients = React.useMemo(
    () =>
      filterClients(clients, selectTable, clientNameQuery, clinicianNameQuery),
    [clients, selectTable, clientNameQuery, clinicianNameQuery]
  );

  const handleRowSelect = (clientId: number, isChecked: boolean) => {
    setSelectedClients((prevSelected) =>
      isChecked
        ? [...prevSelected, clientId]
        : prevSelected.filter((id) => id !== clientId)
    );
  };

  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      const allClientIds = filteredClients.map((client) => client.id);
      setSelectedClients(allClientIds);
    } else {
      setSelectedClients([]);
    }
  };

  const clientNames = React.useMemo(
    () => getUniqueValues(filteredClients, "clientName"),
    [filteredClients]
  );

  const clinicianNames = React.useMemo(
    () => getUniqueValues(filteredClients, "clinicianName"),
    [filteredClients]
  );

  const statuses = [
    { label: "In treatment", key: "In treatment" },
    { label: "Deactivated", key: "Deactivated" },
  ];

  const addNewClient = (newClient: Client) => {
    setClients((prevClients) => addClient(prevClients, newClient));
  };

  React.useEffect(() => {
    setSelectedClients([]);
  }, [selectTable]);
  return (
    <>
      <div className="space-y-4">
        <h3 className="font-bold text-[20px]">Clients</h3>
        <StatusTabs
          statuses={statuses}
          clients={clients}
          selectTable={selectTable}
          onSelectTable={setSelectTable}
        />
        <div className="flex gap-[16px] md:flex-col">
          <Filters
            clientNames={clientNames}
            clinicianNames={clinicianNames}
            setClientNameQuery={setClientNameQuery}
            setClinicianNameQuery={setClinicianNameQuery}
          />
          <ActionBar
            selectedClients={selectedClients}
            selectTable={selectTable}
            addNewClient={addNewClient}
          />
        </div>
        {filteredClients.length > 0 ? (
          <Table
            clients={filteredClients}
            onRowSelect={handleRowSelect}
            onSelectAll={handleSelectAll}
            selectedClients={selectedClients}
          />
        ) : (
          <div className="text-center py-5  text-[14px]">
            🙁 Oops! No matches found. Please double-check your input.
          </div>
        )}
      </div>
    </>
  );
}

export default ClientSection;
