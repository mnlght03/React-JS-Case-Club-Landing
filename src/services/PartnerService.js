import axios from 'axios';

export default class PartnerService {
  static API_URL = process.env.REACT_APP_API_BASE + 'partner/';

  static async getAll() {
    try {
      const response = await axios.get(PartnerService.API_URL + 'get-all');
      return response.data.map((item) => ({
        id: item.id,
        description: item.cooperationInfo,
        participants: item.attendee,
        logoSrc: process.env.REACT_APP_API_BASE + 'img/' + item.logoImageUrl,
      }));
    } catch (e) {
      console.log(e);
    }
  }
}
