import button from "./form-button.module.scss";

interface FormButtonProps {
  title: string;
}

const FormButton = (props: FormButtonProps) => {
  return <button className={button.buttonWrap}>{props.title}</button>;
};

export default FormButton;
