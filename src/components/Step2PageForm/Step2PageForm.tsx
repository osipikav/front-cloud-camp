import './Step2PageForm.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import Button from 'components/Button/Button';
// import Advantages from 'components/Advantages/Advantages';
// import CheckboxGroup from 'components/CheckboxGroup/CheckboxGroup';
import RadioGroup from 'components/RadioGroup/RadioGroup';

export const Step2PageForm = () => {
  const warningMessages = {
    radio: 'Проверьте отметку',
    // checkbox: 'Проверьте отметку',
  };

  const schema = yup.object().shape({
    radio: yup.string().required(`${warningMessages.radio}`),
    // checkbox: yup.string().required(`${warningMessages.checkbox}`),
    // radio: yup.string().required(`${warningMessages.radio}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div className="input-item">
        <label className="label" htmlFor="advantages">
          Advantages
        </label>
        <Advantages />
       <div className="error">{errors.nickname ? String(errors.nickname?.message) : 'Tip'}</div>
       </div> */}
      {/* <div className="input-item">
        <label className="label" htmlFor="checbox-group">
          Checkbox group
        </label>
        <CheckboxGroup />
        <div className="error">{errors.checkbox ? String(errors.checkbox?.message) : 'Tip'}</div>
      </div> */}
      <div className="input-item">
        <label className="label" htmlFor="radio-group">
          Radio group
        </label>
        <RadioGroup register={register} />
        <div className="error">{errors.radio ? String(errors.radio?.message) : 'Tip'}</div>
      </div>
      <button type="submit">submit</button>

      {/* <div className="button-container">
        <Button label="Назад" id="button-back" />
        <Button label="Далее" id="button-next" />
      </div> */}
    </form>
  );
};
