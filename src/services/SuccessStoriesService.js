import axios from 'axios';
import { getApiImageUrl } from '../utils';

export default class SuccessStoriesService {
  static API_URL = process.env.REACT_APP_API_BASE + 'success-story/';

  static async getAll() {
    try {
      const response = await axios.get(SuccessStoriesService.API_URL + 'get-all');
      return response.data
        .sort((a, b) => a.priorityId - b.priorityId)
        .map((item) => ({
          id: item.id,
          name: item.name,
          role: item.position,
          description: item.story,
          tagColor: item.tagColor,
          firstTag: item.firstTag,
          secondTag: item.secondTag,
          profilePhotoUrl: getApiImageUrl(item.profilePhotoUrl),
          fullSizePhotoUrl: getApiImageUrl(item.fullSizePhotoUrl),
        }));
    } catch (e) {
      console.log(e);
    }
  }
}
