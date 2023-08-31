import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteRow } from '../actions/dataActions';
import { RootState } from '../store';
import { DataItem } from '../types';

import Row from './Row'; // Import your Row component
import AddRowForm from './AddRowForm'; // Import your AddRowForm component

import './Table.css';

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  const error = useSelector((state: RootState) => state.data.error);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  if (error) {
    return <p className="errorMessage">{error}</p>;
  }

  const handleDelete = (id: number) => {
    dispatch(deleteRow(id));
  };

  return (
    <table className="userTable">
      <thead>
        <AddRowForm />
        <tr>
          <th>No</th>
          <th>Title</th>
          <th colSpan={2}>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: DataItem) => (
          <Row
            key={item.id}
            data={item}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
