import { useRef } from "react";

interface AddReminderFormProps {
  addNewReminder: (title: string) => void;
}

const AddReminderForm = ({
  addNewReminder,
}: AddReminderFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currValue = inputRef.current?.value;
    if (typeof currValue === "string" && currValue) {
      addNewReminder(currValue);
    } else alert("please add a valid value");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Title:
        <input ref={inputRef} type="text" className="form-control" />
      </label>
      <button type="submit" className="btn btn-primary my-3">
        Add Reminder
      </button>
    </form>
  );
};

export default AddReminderForm;
