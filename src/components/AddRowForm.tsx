import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRow } from '../actions/dataActions';
import { useForm, UseFormReturn } from 'react-hook-form'; // Import UseFormReturn
import './AddRowForm.css';

interface DataItem {
  id: number;
  title: string;
  body: string;
}

const AddRowForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset }: UseFormReturn<DataItem> = useForm(); // Use UseFormReturn<DataItem>
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity
  const [title, setTitle] = useState(''); // State for title field
  const [body, setBody] = useState(''); // State for body field

  const onSubmit = (formData: DataItem) => {
    const newRow: DataItem = {
      id: Date.now(),
      title: formData.title,
      body: formData.body,
    };
    dispatch(addRow(newRow));
    reset(); // Reset the form
    setIsFormValid(false); // Reset form validity
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the title and body states
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else if (event.target.name === 'body') {
      setBody(event.target.value);
    }

    // Check if both title and description are filled
    setIsFormValid(!!title && !!body);
  };

  return (
    <tr>
      <td colSpan={4}>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  {...register('title')}
                  name="title" // Add name attribute to inputs
                  placeholder="Title"
                  value={title} // Bind value to title state
                  onChange={handleInputChange} // Handle input change
                />
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  {...register('body')}
                  name="body" // Add name attribute to inputs
                  placeholder="Description"
                  value={body} // Bind value to body state
                  onChange={handleInputChange} // Handle input change
                />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                  Add Row
                </button>
              </div>
            </div>
          </form>
        </div>
      </td>
    </tr>
  );
};

export default AddRowForm;
