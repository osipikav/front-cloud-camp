import './Step1PageForm.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'components/Button/Button';
import Select from 'react-select';

// interface IMainPageForm {
//   phone: number;
//   nickname: string;
// }

export const Step1PageForm = () => {
  const SEX = [
    { id: 'field-sex-option-man', value: 'man', label: 'man' },
    { id: 'field-sex-option-woman', value: 'woman', label: 'woman' },
  ];

  const warningMessages = {
    nickname: 'Проверьте введенный никнейм',
    name: 'Проверьте введенное имя',
    sername: 'Проверьте введенную фамилию',
    sex: 'Укажите пол',
  };

  const schema = yup.object().shape({
    nickname: yup
      .string()
      .matches(/^[a-zA-Z0-9]+$/, `${warningMessages.nickname}`)
      .required(`${warningMessages.nickname}`),
    name: yup
      .string()
      .matches(/^[a-zA-Z]+$/, `${warningMessages.name}`)
      .required(`${warningMessages.name}`),
    sername: yup
      .string()
      .matches(/^[a-zA-Z]+$/, `${warningMessages.sername}`)
      .required(`${warningMessages.sername}`),
    sex: yup
      .string()
      .oneOf(['man', 'woman'], `${warningMessages.sex}`)
      .required(`${warningMessages.sex}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-item">
        <label className="label" htmlFor="nickname">
          Nickname
        </label>
        <input
          className="input"
          type="text"
          id="field-nickname"
          placeholder="Placeholder"
          maxLength={30}
          {...register('nickname')}
        />
        <div className="error">{errors.nickname ? String(errors.nickname?.message) : 'Tip'}</div>
      </div>
      <div className="input-item">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          className="input"
          type="text"
          id="field-name"
          placeholder="Placeholder"
          maxLength={50}
          {...register('name')}
        />
        <div className="error">{errors.name ? String(errors.name?.message) : 'Tip'}</div>
      </div>
      <div className="input-item">
        <label className="label" htmlFor="sername">
          Sername
        </label>
        <input
          className="input"
          type="text"
          id="field-sername"
          placeholder="Placeholder"
          maxLength={50}
          {...register('sername')}
        />
        <div className="error">{errors.sername ? String(errors.sername?.message) : 'Tip'}</div>
      </div>
      <div className="input-item">
        <label className="label" htmlFor="sex">
          Sex
        </label>
        <Select
          classNamePrefix="custom-select"
          options={SEX}
          placeholder="Placeholder"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#5558fa',
              primary: '#5558fa',
            },
          })}
          {...register('sex')}
          onChange={(selectedOption) => setValue('sex', selectedOption?.value)}
          value={SEX.find((option) => option.value === '')}
        />
        <div className="error">{errors.sex ? String(errors.sex?.message) : 'Tip'}</div>
      </div>
      <div className="button-container">
        <Button label="Назад" id="button-back" />
        <Button label="Далее" id="button-next" />
      </div>
    </form>
  );
};
