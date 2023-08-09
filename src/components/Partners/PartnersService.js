import McKinseyLogo from '../../assets/img/logos/McKinsey.png';
import TinkoffLogo from '../../assets/img/logos/Tinkoff.png';
import TwoGisLogo from '../../assets/img/logos/2Gis.png';
import AlfaBankLogo from '../../assets/img/logos/AlfaBank.png';
import UnileverLogo from '../../assets/img/logos/Unilever.png';
import LorealLogo from '../../assets/img/logos/Loreal.png';
import YandexLogo from '../../assets/img/logos/Yandex.png';
import SberLogo from '../../assets/img/logos/Sber.png';
import SberTechLogo from '../../assets/img/logos/Sbertech.png';
import MailruLogo from '../../assets/img/logos/Mailru.png';

export default class PartnersService {
    static async getAllPartners() {
        return [
            {
                name: 'McKinsey',
                logoSrc: McKinseyLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: '2GIS',
                logoSrc: TwoGisLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: 'Unilever',
                logoSrc: UnileverLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: 'AlfaBank',
                logoSrc: AlfaBankLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: 'Tinkoff',
                logoSrc: TinkoffLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: 'Loreal',
                logoSrc: LorealLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: 'Yandex',
                logoSrc: YandexLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: 'SberTech',
                logoSrc: SberTechLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: 'Sber',
                logoSrc: SberLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
            {
                name: 'Mailru',
                logoSrc: MailruLogo,
                description: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
                participants: 100,
            },
        ];
    }
}
