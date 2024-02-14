import element from "./form-element.module.scss";

interface FormElementProps {
  id?: string;
  placeholder: string;
  type: string;
}

const FormElement = (props: FormElementProps) => {
  return (
    <div className={element.elementWrap}>
      <input
        id={props.id}
        className={element.elementInput}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormElement;
