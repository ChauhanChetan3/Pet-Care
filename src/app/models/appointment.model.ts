import { Pet } from "./pet.model"
import { User } from "./user.model"

export interface Appointment {
appointmentId?: number
pet?: Pet
appointmentDate?: string
reason?: string
user?: User
status?: string
}
