import React from "react";
import arrowDown from "../../assets/chevron arrow-down.png";
import { ToggleButtonProps } from "../../utils/type";

function SelectOption({
  title,
  required,
}: ToggleButtonProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(
    "F43.22 ,Adjustment disorder with anxiety"
  );
  const options = [
    "F43.22 ,Adjustment disorder with anxiety",
    "F42.54 ,Anxiety",
    "F21.276 ,Disorder",
  ];

  return (
    <div className="text-[12px] font-light space-y-2">
      <label>
        {title} {required && <span className="text-brand-required">*</span>}
      </label>
      <div
        className="w-full bg-brand-white border rounded text-sm p-2 focus:outline-none focus:border-brand-primary"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {!isDropdownOpen && (
          <div className="flex justify-between">
            <p>
              <span>{selectedOption.split(",")[0]}</span>
              {selectedOption.split(",")[1]}
            </p>
            <img src={arrowDown} alt="arrowDown" width={16} />
          </div>
        )}
        {isDropdownOpen && (
          <ul >
            {options.map((option) => (
              <li onClick={() => setSelectedOption(option)} className="hover:bg-[#bdb2b9] hover:bg-opacity-30 p-[4px] cursor-pointer rounded">
                <span className="bg-brand-mercury p-[4px] rounded text-[12px] mr-[10px]">
                  {option.split(",")[0]}
                </span>
                {option.split(",")[1]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SelectOption;
