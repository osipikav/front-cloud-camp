import './Button.scss';

type PropsType = {
  label: string;
  ID: string;
};

const Button = (props: PropsType) => {
  return <button id={props.ID}>{props.label}</button>;
};

export default Button;
