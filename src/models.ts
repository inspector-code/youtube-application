export interface IAdmin {
    telegramId: string
}

export interface ITag {
    group: string
    displayValue: string
    value: string
}

export interface IChannel {
    name: string;
    link: string
    tags: ITag[]
}