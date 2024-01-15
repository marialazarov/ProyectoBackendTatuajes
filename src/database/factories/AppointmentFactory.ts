import { faker } from "@faker-js/faker";
import { BaseFactory } from "./BaseFactory";
import { Appointment} from "../../models/Appointments";


export class AppointmentFactory extends BaseFactory <Appointment> {
  protected generateSpecifics(appointment: Appointment): Appointment {
        appointment.date = faker.date.weekday();
        appointment.hour = faker.string.alpha();
        appointment.createdAt = new Date ();
        appointment.updatedAt = new Date ();

        return appointment
    }
   
}