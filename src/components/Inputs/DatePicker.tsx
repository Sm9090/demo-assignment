import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerProps } from "../../utils/type";

function YearPickerInput({
  title,
  onChange,
}: DatePickerProps) {
  const [selectedYear, setSelectedYear] = React.useState<Date | null>(null);
  const handleChangeEvent = (date: Date | null) => {
    console.log(date)
    onChange(date as unknown as string);
    setSelectedYear(date);
  };
  return (
    <div className="text-[12px] font-light space-y-2">
      <label>{title} </label>
      <div className="w-full">
        <DatePicker
          selected={selectedYear}
          onChange={handleChangeEvent}
          showYearPicker
          dateFormat="yyyy"
          className="!w-full border rounded text-sm p-2 focus:outline-none focus:border-[#731054]"
          placeholderText="Select Year"
        />
      </div>
    </div>
  );
}

export default YearPickerInput;
