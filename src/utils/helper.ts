import { Client } from "./type";

export const getBadgeColor = (type: string) => {
  switch (type) {
    case "Individual":
      return "bg-[#EFEAFD]";
    case "Couple":
      return "bg-[#E2F3FC]";
    case "Family":
      return "bg-[#FFEAD5]";
    case "Child":
      return "bg-[#D5F6DE]";
    case "Group":
      return "bg-[#FDF4C8] ";
    default:
      return "bg-gray-400";
  }
};

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const filterClients = (
  clients: Client[],
  status: string,
  clientNameQuery: string,
  clinicianNameQuery: string
): Client[] => {
  return clients.filter((client) => {
    const matchesStatus = client.status === status;
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
};

export const getUniqueValues = (
  clients: Client[],
  key: keyof Client
): string[] => {
  return Array.from(new Set(clients.map((client) => client[key] as string)));
};

export const addClient = (clients: Client[], newClient: Client): Client[] => {
  return [
    ...clients,
    {
      ...newClient,
    },
  ];
};
