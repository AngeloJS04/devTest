export interface ExchangeI {
    id: number;
    action: any;
    side: string;
    symbol: string;
    price: number;
    size: number;
    timestamp: string
}

export enum CoinActionEnum {
    "insert" = "Insert",
    "update" = "Update",
    "delete" = "Delete"
}
