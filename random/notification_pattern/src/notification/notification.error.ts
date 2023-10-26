import { NotificationErrorProps } from './notification.interface.ts'

export class NotificationError extends Error {
    constructor(public errors: NotificationErrorProps[]) {
        super(
            errors.map(error => `${error.context}: ${error.message}`).join(', ')
        )
    }
}
