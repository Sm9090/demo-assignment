import { StatusTabsProps } from "../../utils/type";

function StatusTabs({
  statuses,
  clients,
  selectTable,
  onSelectTable,
}: StatusTabsProps) {
  return (
    <div className="flex bg-brand-white rounded-[16px] w-full p-[4px]">
      {statuses.map((status) => {
        const count = clients.filter(
          (client) => client.status === status.key
        ).length;
        return (
          <div
            key={status.key}
            className={`flex-1 text-[14px] font-medium  text-center cursor-pointer p-[5.5px]  ${
              selectTable === status.key ?
              "shadow-[0px_0px_2px_1px_rgba(0,0,0,0.1)] rounded-[16px] text-[#040404]" : "text-[#8f8f8f]"
            }`}
            onClick={() => onSelectTable(status.key)}
          >
            {status.label} ({count})
          </div>
        );
      })}
    </div>
  );
}

export default StatusTabs;
