export interface NotificationInterface {
    addError(error: NotificationErrorProps): void;
    hasErrors(): boolean;
    getErrors(): NotificationErrorProps[]
    messages(context?:string): string
}

export interface NotificationErrorProps {
    context?: string
    message: string
}
