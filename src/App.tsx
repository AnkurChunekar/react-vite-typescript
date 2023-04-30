import "bootstrap/dist/css/bootstrap.css";

import ReminderList from "./components/ReminderList";
import "./App.css";
import Reminder from "./types/reminder";

const reminders: Reminder[] = [{ id: 1, title: "First one" }];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
