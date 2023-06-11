import './Button.scss';

type PropsType = {
  label: string;
  id: string;
};

const Button = (props: PropsType) => {
  return <button id={props.id}>{props.label}</button>;
};

export default Button;
