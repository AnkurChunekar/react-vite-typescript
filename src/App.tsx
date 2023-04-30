import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import ReminderList from "./components/ReminderList";
import "./App.css";
import Reminder from "./types/reminder";
import reminderService from "./services/reminderService";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await reminderService.getReminders();
        setReminders(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
