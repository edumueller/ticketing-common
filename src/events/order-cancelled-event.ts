import { Subjects } from "./subjects";
export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
