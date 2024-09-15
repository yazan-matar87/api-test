import  { useState } from 'react';

const Edit_Page_right_side = () => {
  const [inputs, setInputs] = useState([{ id: Date.now(), value1: '', value2: '' }]);

  const handleAddFields = () => {
    setInputs([...inputs, { id: Date.now(), value1: '', value2: '' }]);
  };

  const handleRemoveFields = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  const handleInputChange = (id, event) => {
    const newInputs = inputs.map(input => {
      if (input.id === id) {
        return { ...input, [event.target.name]: event.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  return (
    <>
          <header>Action</header>
          <div>
            {inputs.map(input => (
              <div key={input.id} style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  name="value1"
                  value={input.value1}
                  onChange={event => handleInputChange(input.id, event)}
                  placeholder="Input 1"
                />
                <input
                  type="text"
                  name="value2"
                  value={input.value2}
                  onChange={event => handleInputChange(input.id, event)}
                  placeholder="Input 2"
                />
                <button onClick={() => handleRemoveFields(input.id)}>Delete</button>
              </div>
            ))}
            <div>
              <button onClick={handleAddFields}>Add Input Fields</button>
            </div>
          </div>
    </>
  );
};

export default Edit_Page_right_side;





