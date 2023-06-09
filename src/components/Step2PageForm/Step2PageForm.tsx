import './Step2PageForm.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useState } from 'react';
import DeleteIcon from 'assets/icons/DeleteIcon/DeleteIcon';

export const Step2PageForm = () => {
  const [advItems, setAdvItems] = useState<string[]>(['', '', '']);

  const radioOptions = [
    { id: 'field-radio-group-option-1', value: '1', label: '1' },
    { id: 'field-radio-group-option-2', value: '2', label: '2' },
    { id: 'field-radio-group-option-3', value: '3', label: '3' },
  ];
  const checkboxOptions = [
    { id: 'field-checkbox-group-option-1', value: '1', label: '1' },
    { id: 'field-checkbox-group-option-2', value: '2', label: '2' },
    { id: 'field-checkbox-group-option-3', value: '3', label: '3' },
  ];

  const handleAddAdvItem = () => {
    setAdvItems([...advItems, '']);
  };

  const handleDeleteAdvItem = (index: number) => {
    const updatedAdvItems = [...advItems];
    updatedAdvItems.splice(index, 1);
    setAdvItems(updatedAdvItems);

    console.log('upd :>> ', updatedAdvItems);
  };

  const warningMessages = {
    radio: 'Проверьте отметку',
    checkbox: 'Проверьте отметку',
    advantages: 'Проверьте введенную информацию',
  };

  const schema = yup.object().shape({
    checkbox: yup
      .array(yup.string())
      .min(1, `${warningMessages.checkbox}`)
      .required(`${warningMessages.checkbox}`),
    radio: yup.string().required(`${warningMessages.radio}`),
    advantages: yup.array(yup.string().min(1)).required(`${warningMessages.advantages}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-item">
        <label className="label" htmlFor="advantages">
          Advantages
        </label>
        <div className="advantages">
          {advItems.map((advItem, index) => (
            <div key={`adv-${index}`} className="advantages-item">
              <input
                className="input"
                id={`field-advantages-${index}`}
                type="text"
                placeholder="Placeholder"
                // defaultValue={advItem}
                {...register(`advantages[${index}]`)}
              />
              <div id={`button-remove-${index}`} onClick={() => handleDeleteAdvItem(index)}>
                <DeleteIcon />
              </div>
            </div>
          ))}
          <button id="button-add" onClick={handleAddAdvItem}>
            +
          </button>
        </div>
        <div className="error">{errors.advantages ? warningMessages.advantages : 'Tip'}</div>
      </div>
      <div className="input-item">
        <label className="label" htmlFor="checbox-group">
          Checkbox group
        </label>
        <div className="checkbox-group">
          {checkboxOptions.map((option) => (
            <div key={option.id} className="checkbox">
              <input
                className="checkbox-input"
                type="checkbox"
                id={option.id}
                value={option.value}
                {...register('checkbox')}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>
        <div className="error">{errors.checkbox ? String(errors.checkbox?.message) : 'Tip'}</div>
      </div>
      <div className="input-item">
        <label className="label" htmlFor="radio-group">
          Radio group
        </label>
        <div className="radio-group">
          {radioOptions.map((option) => (
            <div key={option.id} className="radio">
              <input
                className="radio-input"
                type="radio"
                id={option.id}
                value={option.value}
                {...register('radio')}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>
        <div className="error">{errors.radio ? String(errors.radio?.message) : 'Tip'}</div>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
