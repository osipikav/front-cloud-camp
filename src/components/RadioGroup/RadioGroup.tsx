import './RadioGroup.scss';
import { FC, useState } from 'react';

interface RadioInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any; // Замените any на нужный тип
  // error: string | undefined;
}

const RadioGroup: FC<RadioInputProps> = ({ register }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleRadioChange = (value: string) => {
    debugger;
    setSelectedValue(value);
  };
  const radioOptions = [
    { id: 'field-radio-group-option-1', value: '1', label: '1' },
    { id: 'field-radio-group-option-2', value: '2', label: '2' },
    { id: 'field-radio-group-option-3', value: '3', label: '3' },
  ];

  return (
    <div className="radio-group">
      {radioOptions.map((option) => (
        <div key={option.id} className="radio">
          <input
            className="radio-input"
            type="radio"
            id={option.id}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleRadioChange(option.value)}
            {...register('radio')}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};
export default RadioGroup;
