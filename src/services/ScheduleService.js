import axios from 'axios';

export default class ScheduleService {
  static API_URL = process.env.REACT_APP_API_BASE + 'schedule/';

  static async getAll() {
    try {
      const response = await axios.get(ScheduleService.API_URL + 'get-all');
      return response.data.map((item) => ({
        id: item.id,
        name: item.name,
        date: item.date,
        description: item.description,
        registrationLink: item.registrationLink,
        firstTag: item.firstTag,
        secondTag: item.secondTag,
        tagColor: item.tagColor,
      }));
    } catch (e) {
      console.log(e);
    }
  }
}
