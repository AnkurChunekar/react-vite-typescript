import axios from "axios";
import Reminder from "../types/reminder";

class RemiderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>("/todos");
    return response;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete("/todos/" + id);
    return response;
  }

  async addReminders(title: string) {
    const response = await this.http.post<Reminder>("/todos", { title });
    return response;
  }
}

// exporting a new instance every time so that we do not have to call the new operator every time
export default new RemiderService();
