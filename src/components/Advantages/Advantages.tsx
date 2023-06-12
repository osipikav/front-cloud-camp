import './Advantages.scss';
import { useState } from 'react';
import DeleteIcon from 'assets/icons/DeleteIcon/DeleteIcon';

const Advantages = () => {
  const [advItems, setAdvItems] = useState<string[]>(['', '', '']);

  const handleAddAdvItem = () => {
    setAdvItems([...advItems, '']);
  };

  const handleDeleteAdvItem = (index: number) => {
    const updatedAdvItems = [...advItems];
    updatedAdvItems.splice(index, 1);
    setAdvItems(updatedAdvItems);
  };

  const handleInputChange = (value: string, index: number) => {
    const updatedAdvItems = [...advItems];
    updatedAdvItems[index] = value;
    setAdvItems(updatedAdvItems);
  };

  // const handleSubmit = () => {
  //   console.log(advItems);
  // };

  return (
    <div className="advantages">
      {advItems.map((advItem, index) => (
        <div key={`adv-${index}`} className="advantages-item">
          <input
            className="input"
            id={`field-advantages-${index}`}
            type="text"
            value={advItem}
            placeholder="Placeholder"
            onChange={(e) => handleInputChange(e.target.value, index)}
          />
          <div id={`button-remove-${index}`} onClick={() => handleDeleteAdvItem(index)}>
            <DeleteIcon />
          </div>
        </div>
      ))}
      <button id="button-add" onClick={handleAddAdvItem}>
        +
      </button>
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
};

export default Advantages;
