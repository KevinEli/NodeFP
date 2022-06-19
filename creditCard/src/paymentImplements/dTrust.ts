import PaymentMethod from "../../interfaces/paymentMethod";

export default class DTrust implements PaymentMethod {
    get message(): string {
        return "DTrust Payment Method Selected";
    }
}