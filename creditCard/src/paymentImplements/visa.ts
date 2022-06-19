import PaymentMethod from "../../interfaces/paymentMethod";

export default class Visa implements PaymentMethod {
    get message(): string {
        return "Visa Payment Method Selected";
    }
}