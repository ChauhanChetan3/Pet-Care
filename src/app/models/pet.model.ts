
import { User } from "./user.model"

export interface Pet {
petId?: number
name?: string
species?: string
breed?: string
dateOfBirth?: string
user?: User
status?: string
}
