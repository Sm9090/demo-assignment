import Checkbox from "../Inputs/Checkbox";
import { formatDate, getBadgeColor } from "../../utils/helper";
import { TableProps } from "../../utils/type";

const Table = ({
  clients,
  onRowSelect,
  onSelectAll,
  selectedClients,
}: TableProps) => {
  const allChecked =
    selectedClients.length === clients.length && clients.length > 0;
  const someChecked =
    selectedClients.length > 0 && selectedClients.length < clients.length;
  return (
    <div className=" overflow-x-scroll bg-brand-white rounded-lg ">
      <table className="w-full min-w-[768px] border-collapse text-[14px]">
        <thead>
          <tr className="space-x-2 text-left">
            <th className="p-2 w-[10px]">
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={someChecked}
                onChange={(e) => onSelectAll(e.target.checked)}
              />
            </th>
            <th className="py-[9.5px] pl-[16px]">Client name</th>
            <th className="py-[9.5px] pl-[16px]">Clinician name</th>
            <th className="py-[9.5px] pl-[16px]">Client type</th>
            <th className="py-[9.5px] pl-[16px]">Last session</th>
            <th className="py-[9.5px] pl-[16px]">Unsaved notes</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className="border-t border-brand-mercury">
              <td className="p-2 w-[10px]">
                <Checkbox
                  isChecked={selectedClients.includes(client.id)}
                  onChange={(e) => onRowSelect(client.id, e.target.checked)}
                />
              </td>
              <td className="py-[9.5px] pl-[16px]">
                {client.clientName}
              </td>
              <td className="py-[9.5px] pl-[16px]">
                {client.clinicianName}
              </td>
              <td className="py-[9.5px] pl-[16px]">
                <span
                  className={`px-2 py-1 rounded-[4px] text-xs  ${getBadgeColor(
                    client.clientType
                  )}`}
                >
                  {client.clientType}
                </span>
              </td>
              <td className="py-[9.5px] pl-[16px]">
                {formatDate(client.lastSession)}
              </td>
              <td className="py-[9.5px] pl-[16px]">
                {client.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
