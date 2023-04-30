import Reminder from "../types/reminder";

interface RemiderListProps {
  items: Reminder[];
}

const ReminderList = ({ items }: RemiderListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ReminderList;
