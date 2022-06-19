import PaymentMethod from "../../interfaces/paymentMethod";

export default class RapidoPago implements PaymentMethod {
    get message(): string {
        return "RapidoPago Payment Method Selected";
    }
}