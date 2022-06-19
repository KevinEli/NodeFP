import PaymentType from "../enums/paymentType";
import PaymentMethod from "../interfaces/paymentMethod";
import DTrust from "./paymentImplements/dTrust";
import Visa from "./paymentImplements/visa";
import RapidoPago from "./paymentImplements/rapidoPago";

export default class PaymentMethodFactory {

    public static createPaymentType(type: PaymentType): PaymentMethod {

        switch (type) {
            case PaymentType.DTrust:
                return new DTrust();
            case PaymentType.Visa:
                return new Visa();
            case PaymentType.RapidoPago:
                return new RapidoPago();
        }
    }
}