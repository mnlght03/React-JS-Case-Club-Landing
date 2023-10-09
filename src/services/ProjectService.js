import axios from 'axios';

export default class ProjectService {
  static API_URL = process.env.REACT_APP_API_BASE + 'implemented-project/';

  static async getAll() {
    try {
      const response = await axios.get(ProjectService.API_URL + 'get-all');
      return response.data.map((item) => ({
        id: item.id,
        title: item.name,
        logoUrl: process.env.REACT_APP_API_BASE + 'img/' + item.logoImageUrl,
        cases: item.projectStageList.map((stage) => ({
          id: stage.id,
          title: stage.name,
          date: stage.timeFrame,
          coverage: stage.coverage,
          participants: stage.attendee,
        })),
      }));
    } catch (e) {
      console.log(e);
    }
  }
}
