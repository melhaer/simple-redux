import React, { useState } from 'react';
import { DataItem } from '../types';
import './Row.css';

interface RowProps {
  data: DataItem;
  onDelete: () => void;
}

const Row: React.FC<RowProps> = ({ data, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    // Simulate a delay (you can replace this with your actual delete logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // After the delay, call the onDelete callback
    onDelete();

    setIsDeleting(false);
  };

  return (
    <tr className={`table-row ${isDeleting ? 'deleting' : ''}`}>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.body}</td>
      <td>
        {isDeleting ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Deleting...</span>
          </div>
        ) : (
          <button
            className="btn btn-danger delete-button"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            Delete Row
          </button>
        )}
      </td>
    </tr>
  );
};

export default Row;
