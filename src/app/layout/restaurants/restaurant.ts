export class Restaurant {
    id: number;
    social_name: string;
    fantasy_name: string;
    cell_phone: string;
    phone: string;
    cnpj: string;
    responsible_name: string;
    responsible_phone: string;
    user_id: number;
    observation: string;
    image: string;
    order_limit: number;
    tags_ids: number[];
    delivery_value: number;
    avg_delivery_time: any;
    city: string;
    state: string;
    number: string;
    district: string;
    postal_code: string;
    address: string;
    complement: string;
    email: string;
    password: string;
}

export class BootstrapTime {
    hour: number;
    minute: number;
}
