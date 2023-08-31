import { DataItem } from '../types';
import './Row.css';

interface RowProps {
  data: DataItem;
  onDelete: () => void;
}

const Row: React.FC<RowProps> = ({ data, onDelete }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.body}</td>
      <td>
        <button className="delete-button" onClick={onDelete}>
          Delete Row
        </button>
      </td>
    </tr>
  );
};

export default Row;
