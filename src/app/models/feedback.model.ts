
import { Appointment } from "./appointment.model";
import { User } from "./user.model";

export interface Feedback {
    feedbackId ?: number;
    user ?: User;
    appointment ?: Appointment;
    message ?: string;
    rating ?: number;
}
