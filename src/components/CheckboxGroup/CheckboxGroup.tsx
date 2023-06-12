import './CheckboxGroup.scss';
import { useState } from 'react';

const CheckboxGroup = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const checkboxOptions = [
    { id: 'field-checkbox-group-option-1', value: '1', label: '1' },
    { id: 'field-checkbox-group-option-2', value: '2', label: '2' },
    { id: 'field-checkbox-group-option-3', value: '3', label: '3' },
  ];

  // const handleFormSubmit = () => {
  //   console.log(selectedValues);
  // };

  return (
    <div className="checkbox-group">
      {checkboxOptions.map((option) => (
        <div key={option.id} className="checkbox">
          <input
            className="checkbox-input"
            type="checkbox"
            id={option.id}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
      {/* <button onClick={handleFormSubmit}>Submit</button> */}
    </div>
  );
};
export default CheckboxGroup;
