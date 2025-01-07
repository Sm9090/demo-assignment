import Input from "../../components/Inputs/Search-Input";
import { FiltersProps } from "../../utils/type";

function Filters({
  clientNames,
  clinicianNames,
  setClientNameQuery,
  setClinicianNameQuery,
}: FiltersProps) {
  return (
    <div className="flex flex-1 space-x-2 text-[14px] font-medium">
      <Input
        title="Client name"
        data={clientNames}
        setSearchQuery={setClientNameQuery}
      />
      <Input
        title="Clinician name"
        data={clinicianNames}
        setSearchQuery={setClinicianNameQuery}
      />
    </div>
  );
}

export default Filters;
