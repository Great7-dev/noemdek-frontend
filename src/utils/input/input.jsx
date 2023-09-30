import { StyleInput } from "../../components/Register/registerStyle";

export const InputField = ({ ...props }) => {
  return (
    <div>
      <div className="input-label">{props.label}</div>

      <StyleInput
        name={props.name}
        type={props.type}
        value={props.value}
        className={props.class}
        placeholder={props.placeholder}
        onChange={props.change}
      />
    </div>
  );
};
