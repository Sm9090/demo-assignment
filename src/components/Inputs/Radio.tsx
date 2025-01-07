import { getBadgeColor } from "../../utils/helper";
import { RadioProps } from "../../utils/type";

function Radio({ title, bgColor, clientType, onChange }: RadioProps) {
  return (
    <div className="inline-flex items-center ">
      <label
        className="relative flex items-center cursor-pointer"
        htmlFor={title}
      >
        <input
          name={title}
          checked={clientType === title}
          type="radio"
          onChange={() => onChange(title)}
          className="peer h-4 w-4  cursor-pointer appearance-none rounded-full border border-[#8F8F8F] checked:border-brand-primary transition-all"
          id={title}
        />
        <span className="absolute bg-brand-primary w-[6px] h-[6px] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label
        className={`ml-2 cursor-pointer "text-[12px]"  p-[4px] rounded ${
          bgColor ? getBadgeColor(title) : "text-[14px] font-light"
        }`}
        htmlFor={title}
      >
        {title}
      </label>
    </div>
  );
}

export default Radio;
