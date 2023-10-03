import axios from 'axios';
import { getApiImageUrl } from '../utils';

export default class EventService {
  static API_URL = process.env.REACT_APP_API_BASE + 'event/';

  static async getAll() {
    try {
      const response = await axios.get(EventService.API_URL + 'get-all');
      return response.data
        .sort((a, b) => a.priorityId - b.priorityId)
        .map((item) => ({
          id: item.id,
          name: item.name,
          photos: item.photoUrlList.map((url) => getApiImageUrl(url)),
        }));
    } catch (e) {
      console.log(e);
    }
  }
}
