import { NotificationInterface } from '../notification/notification.interface.ts' 
import { Notification } from '../notification/notification.class.ts'
import { NotificationError } from '../notification/notification.error.ts'

export class User {
    private notification: NotificationInterface;

    constructor(
        private id?: number,
        private name?: string,
        private email?: string
    ) {
        this.notification = new Notification();
        this.validator()

        if (this.notification.hasErrors()) {
            throw new NotificationError(this.notification.getErrors())
        }
    }

    validator() {
        if (!this.id) {
            this.notification.addError({
                context: 'User',
                message: 'No ID was passed'
            })
        }

        if (!this.email) {
            this.notification.addError({
                context: 'User',
                message: 'No Email was passed'
            })
        }

        if (!this.name) {
            this.notification.addError({
                context: 'User',
                message: 'No Name was passed'
            })
        }
    }
}
