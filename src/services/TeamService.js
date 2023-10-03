import axios from 'axios';
import { getApiImageUrl } from '../utils';

export default class TeamService {
  static API_URL = process.env.REACT_APP_API_BASE + 'team/';

  static async getAll() {
    try {
      const response = await axios.get(TeamService.API_URL + 'get-members');
      return response.data
        .sort((a, b) => a.priorityId - b.priorityId)
        .map((item) => ({
          id: item.id,
          name: item.name,
          role: item.role,
          contact: item.telegram,
          profilePhotoUrl: getApiImageUrl(item.profilePhotoUrl),
          tagColor: item.tagColor,
        }));
    } catch (e) {
      console.log(e);
    }
  }
}
