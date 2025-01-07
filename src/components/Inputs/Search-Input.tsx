import React from "react";
import dropdown from "../../assets/chevron arrow-down (1).png"
import { SearchInputProps } from "../../utils/type";




function Input({ title , data ,setSearchQuery}: SearchInputProps) {
  const label: string = title.trim();
  const [inputValue, setInputValue] = React.useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  console.log(data , "data")


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value)
    setInputValue(value);
    if (value.trim() === "") {
      setFilteredSuggestions([]);
      setIsDropdownOpen(false);
    } else {
      const filtered = data.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
  
      setIsDropdownOpen(true);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col space-y-2 w-full text-[12px] ">
      <label htmlFor={label} className="font-medium ">{title}</label>
      <div className="relative w-full">
        <input
          type="text"
          placeholder={label === 'Client name' ? 'Select client' : 'Select clinician' }
          name={label}
          value={inputValue}
          onChange={handleInputChange}
          className="px-2 py-[12px] border font-light rounded-lg w-full focus:outline-none focus:border-[#731054] text-[14px]"
          autoComplete="off"
        />
        <img
          src={dropdown}
          alt="dropdown"
          width={16}
          className="absolute top-[18px] right-2 cursor-pointer"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        />
        {isDropdownOpen && filteredSuggestions.length > 0 && (
          <ul className="absolute top-[40px] left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-2 py-1 cursor-pointer hover:bg-gray-100"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Input;
