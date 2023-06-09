import './MainPageForm.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'components/Button/Button';
import InputMask from 'react-input-mask';

// interface IMainPageForm {
//   phone: number;
//   email: string;
// }

export const MainPageForm = () => {
  const warningMessages = {
    phone: 'Проверьте введенный номер',
    email: 'Проверьте введенный email',
  };

  const schema = yup.object().shape({
    phone: yup
      .string()
      .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, `${warningMessages.phone}`)
      .required(`${warningMessages.phone}`),
    email: yup
      .string()
      .email(`${warningMessages.email}`)
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, `${warningMessages.email}`)
      .required(`${warningMessages.email}`),
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
      <div className="input-item">
        <label className="label" htmlFor="phone">
          Номер телефона
        </label>
        <InputMask
          mask="+7 (999) 999-99-99"
          maskChar=""
          className="input"
          type="text"
          id="phone"
          placeholder="+7 999 999-99-99"
          {...register('phone')}
        />
        {errors.phone && <div className="error">{String(errors.phone?.message)}</div>}
      </div>
      <div className="input-item">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          placeholder="tim.jennings@example.com"
          {...register('email')}
        />
        {errors.email && <div className="error">{String(errors.email?.message)}</div>}
      </div>
      <Button label="Начать" id="button-start" />
    </form>
  );
};
