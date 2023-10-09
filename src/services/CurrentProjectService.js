import axios from 'axios';

export default class CurrentProjectService {
    static API_URL = process.env.REACT_APP_API_BASE + 'ongoing-project/';

    static async getAll() {
        try {
            const response = await axios.get(CurrentProjectService.API_URL + 'get-all');
            return response.data.map((item) => ({
                id: item.id,
                name: item.name,
                title: item.description,
                textOne: item.firstPlateText,
                textTwo: item.secondPlateText,
                textThree: item.thirdPlateText,
                presentationUrl: item.presentationFileUrl,
                format: item.projectFormat,
                startDate: item.startDate,
            }));
        } catch (e) {
            console.log(e);
        }
    }
}
