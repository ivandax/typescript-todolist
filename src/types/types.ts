export interface todoAction {
    type: string;
    id: number;
    text: string;
}

export interface todo {
    id: number;
    text: string;
    completed: boolean;
}