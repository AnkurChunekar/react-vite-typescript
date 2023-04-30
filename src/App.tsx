import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import ReminderList from "./components/ReminderList";
import "./App.css";
import Reminder from "./types/reminder";
import reminderService from "./services/reminderService";
import Loader from "./components/Loader";
import AddReminderForm from "./components/AddReminderForm";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        setLoader(true);
        const response = await reminderService.getReminders();
        setReminders(response.data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong!");
      } finally {
        setLoader(false);
      }
    };

    fetchReminders();
  }, []);

  const onDeleteReminder = async (id: number) => {
    try {
      setLoader(true);
      await reminderService.removeReminder(id);
      setReminders((prevReminders) =>
        prevReminders.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoader(false);
    }
  };

  const onAddReminder = async (title: string) => {
    try {
      setLoader(true);
      await reminderService.addReminders(title);
      setReminders((prevReminders) =>
        prevReminders.concat({ title, id: 12122122121 })
      );
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="App">
      {loader && <Loader />}
      <AddReminderForm addNewReminder={onAddReminder} />
      <ReminderList items={reminders} onDelete={onDeleteReminder} />
    </div>
  );
}

export default App;
