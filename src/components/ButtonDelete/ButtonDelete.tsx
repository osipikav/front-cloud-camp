// import './ButtonDelete.scss';

import DeleteIcon from 'assets/icons/DeleteIcon/DeleteIcon';

type PropsType = {
  id: string;
};

const ButtonDelete = (props: PropsType) => {
  return (
    <div className="delete-icon" id={props.id}>
      <DeleteIcon />
    </div>
  );
};

export default ButtonDelete;
