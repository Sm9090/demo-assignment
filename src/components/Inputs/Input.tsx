import { InputProps } from "../../utils/type";

function Input({ title, placeholder, required, onChange }: InputProps) {
  return (
    <div className="text-[12px] font-light space-y-2">
      <label>
        {title} {required && <span className="text-[#F3404F]">*</span>}
      </label>
      <input
        required={required}
        name={title}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="w-full border rounded text-sm p-2 focus:outline-none focus:border-[#731054]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
