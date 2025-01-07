import { clients } from "../../utils/mockdata";
import { Client } from "../../utils/type";
import Table from "../../components/Table/Table";
import React from "react";
import StatusTabs from "./StatusTabs";
import Filters from "./Filters";
import ActionBar from "./Action-Bar";

function ClientSection() {
  const [selectTable, setSelectTable] = React.useState<string>("In treatment");
  const [selectedClients, setSelectedClients] = React.useState<number[]>([]);
  const [clientNameQuery, setClientNameQuery] = React.useState<string>("");
  const [clinicianNameQuery, setClinicianNameQuery] =
    React.useState<string>("");
  const [clientss, setClients] = React.useState(clients);

  const filteredClients = React.useMemo(() => {
    return clientss.filter((client) => {
      const matchesStatus = client.status === selectTable;
      const matchesClientName =
        clientNameQuery === "" ||
        client.clientName.toLowerCase().includes(clientNameQuery.toLowerCase());
      const matchesClinicianName =
        clinicianNameQuery === "" ||
        client.clinicianName
          .toLowerCase()
          .includes(clinicianNameQuery.toLowerCase());

      return matchesStatus && matchesClientName && matchesClinicianName;
    });
  }, [clientss, selectTable, clientNameQuery, clinicianNameQuery]);
  const handleRowSelect = (clientId: number, isChecked: boolean) => {
    setSelectedClients((prevSelected) =>
      isChecked
        ? [...prevSelected, clientId]
        : prevSelected.filter((id) => id !== clientId)
    );
  };

  const clientNames = React.useMemo(
    () =>
      Array.from(new Set(filteredClients.map((client) => client.clientName))),
    [filteredClients]
  );

  const clinicianNames = React.useMemo(
    () =>
      Array.from(
        new Set(filteredClients.map((client) => client.clinicianName))
      ),
    [filteredClients]
  );

  const statuses = [
    { label: "In treatment", key: "In treatment" },
    { label: "Deactivated", key: "Deactivated" },
  ];

  const addNewClient = (newClient: Client) => {
    setClients((prevClients) => [
      ...prevClients,
      {
        ...newClient,
        id: prevClients.length + 1,
        status: "In treatment",
        lastSession:
          newClient.lastSession instanceof Date
            ? newClient.lastSession.toISOString()
            : newClient.lastSession,
      },
    ]);
  };
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
          <Table clients={filteredClients} onRowSelect={handleRowSelect} />
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
