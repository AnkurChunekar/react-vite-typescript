import Reminder from "../types/reminder";

interface RemiderListProps {
  items: Reminder[];
}

const ReminderList = ({ items }: RemiderListProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
