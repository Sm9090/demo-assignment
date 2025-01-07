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
    <div className="bg-[#fff] rounded-lg ">
      <table className="w-full border-collapse text-[14px] ssms:text-[12px]">
        <thead>
          <tr className="space-x-2 text-left">
            <th className="p-2 w-[10px]">
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={someChecked}
                onChange={(e) => onSelectAll(e.target.checked)}
              />
            </th>
            <th className="py-[9.5px] pl-[16px] md:pl-[5px]">Client name</th>
            <th className="py-[9.5px] pl-[16px] md:pl-[5px]">Clinician name</th>
            <th className="py-[9.5px] pl-[16px] md:pl-[5px]">Client type</th>
            <th className="py-[9.5px] pl-[16px] md:pl-[5px]">Last session</th>
            <th className="py-[9.5px] pl-[16px] md:pl-[5px]">Unsaved notes</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className="border-t border-[#EBEBEB]">
              <td className="p-2 w-[10px]">
                <Checkbox
                  isChecked={selectedClients.includes(client.id)}
                  onChange={(e) => onRowSelect(client.id, e.target.checked)}
                />
              </td>
              <td className="py-[9.5px] pl-[16px] md:pl-[5px]">
                {client.clientName}
              </td>
              <td className="py-[9.5px] pl-[16px] md:pl-[5px]">
                {client.clinicianName}
              </td>
              <td className="py-[9.5px] pl-[16px] md:pl-[5px]">
                <span
                  className={`px-2 py-1 rounded-[4px] text-xs  ${getBadgeColor(
                    client.clientType
                  )}`}
                >
                  {client.clientType}
                </span>
              </td>
              <td className="py-[9.5px] pl-[16px] md:pl-[5px]">
                {formatDate(client.lastSession)}
              </td>
              <td className="py-[9.5px] pl-[16px] md:pl-[5px]">
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
