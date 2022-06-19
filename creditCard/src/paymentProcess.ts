import PaymentType from "../enums/paymentType";
import PaymentMethod from "../interfaces/paymentMethod";
import PaymentMethodFactory from "../src/paymentMethodFactory";

export default class PaymentProcess {
    
    public paymentType?: PaymentMethod;
    public message: string = "";

    constructor(private type: PaymentType) { }

    public create(): void {
        this.paymentType = PaymentMethodFactory.createPaymentType(this.type);
        this.message = this.paymentType.message;
    }
}