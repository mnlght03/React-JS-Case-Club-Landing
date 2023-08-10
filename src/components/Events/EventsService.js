export default class EventsService {
    static async getEventsSchedule() {
        return [
            {
                name: 'Обучающие лекции от Case Club NSU',
                date: '1 - 10 сентября',
                keywords: ['Обучение', 'Лекции'],
                description:
                    'Case Club NSU совместно с LAB Industries проводит маркетинговый мини-кейс, в котором участники должны придумать стратегию развития продукта',
            },
            {
                name: 'Маркетинговый мини-кейс',
                date: '16 - 30 сентября',
                keywords: ['Кейс-чемпионат', 'Маркетинг'],
                description:
                    'Case Club NSU совместно с LAB Industries проводит маркетинговый мини-кейс, в котором участники должны придумать стратегию развития продукта',
            },
            {
                name: 'Мини-кейс + хакатон',
                date: '3 - 18 октября',
                keywords: ['Хакатон', 'IT'],
                description:
                    'Case Club NSU совместно с LAB Industries проводит маркетинговый мини-кейс, в котором участники должны придумать стратегию развития продукта',
            },
        ];
    }
}
