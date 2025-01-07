import { ToggleButtonProps } from "../../utils/type";

function ToggleButton({
  title,
  required,
}: ToggleButtonProps) {
  return (
    <div className="flex w-full justify-between text-[14px] font-extralight ">
      <label>
        {title} {required && <span className="text-[#F3404F]">*</span>}
      </label>
      <div className="relative inline-block w-10 h-6">
        <input
          id={title}
          type="checkbox"
          className="peer appearance-none w-10 h-6 bg-[#707070] rounded-full checked:bg-[#731054] cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor={title}
          className="absolute top-[1px] left-0 w-[22px] h-[22px] bg-[#fff] rounded-full border border-[#707070] shadow-sm transition-transform duration-300 peer-checked:translate-x-[16px] peer-checked:border-[#731054] cursor-pointer"
        ></label>
      </div>
    </div>
  );
}

export default ToggleButton;
