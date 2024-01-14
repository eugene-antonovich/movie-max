import element from "./form-element.module.scss";

interface FormElementProps {
  placeholder: string,
  type: any
}

const FormElement = (props : FormElementProps) => {
  return (
    <div className={element.elementWrap}>
      <input className={element.elementInput} type={props.type} placeholder={props.placeholder}/>
    </div>
  )
};

export default FormElement;
