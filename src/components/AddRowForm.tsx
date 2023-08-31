import { useDispatch } from 'react-redux';
import { addRow } from '../actions/dataActions';
import { DataItem } from '../types';
import { useForm, UseFormReturn } from 'react-hook-form'; // Import UseFormReturn
import './AddRowForm.css';

const AddRowForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset }: UseFormReturn<DataItem> = useForm(); // Use UseFormReturn<DataItem>

  const onSubmit = (formData: DataItem) => {
    const newRow: DataItem = {
      id: Date.now(),
      title: formData.title,
      body: formData.body,
    };
    dispatch(addRow(newRow));
    reset(); // Reset the form
  };

  return (
    <tr>
      <td colSpan={4}>
        <div className="add-row-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('title')} placeholder="Title" />
            <input type="text" {...register('body')} placeholder="Description" />
            <button type="submit">Add Row</button>
          </form>
        </div>
      </td>
    </tr>
  );
};

export default AddRowForm;
