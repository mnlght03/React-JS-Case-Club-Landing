import axios from 'axios';
import { getApiImageUrl } from '../utils';

export default class FaqService {
  static API_URL = process.env.REACT_APP_API_BASE + 'faq/';

  static async getAll() {
    try {
      const response = await axios.get(FaqService.API_URL + 'get-all');
      return response.data
        .sort((a, b) => a.priorityId - b.priorityId)
        .map((item) => ({
          id: item.id,
          question: item.question,
          answer: item.answer,
        }));
    } catch (e) {
      console.log(e);
    }
  }
}
