import Reminder from "../types/reminder";

interface RemiderListProps {
  items: Reminder[];
  onDelete: (id: number) => void;
}

const ReminderList = ({ items, onDelete }: RemiderListProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item d-flex justify-content-between"
          key={item.id}
        >
          <span>{item.title}</span>
          <button
            className="btn btn-outline-danger ml-auto"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
