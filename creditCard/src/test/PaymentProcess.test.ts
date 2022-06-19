import 'jest';

import PaymentProcess from "../paymentProcess";
import PaymentType from "../../enums/paymentType";

import DTrust from "../paymentImplements/dTrust";
import Visa from "../paymentImplements/visa";
import RapidoPago from "../paymentImplements/rapidoPago";

let ppVisa = new PaymentProcess(PaymentType.Visa),
    ppDTrust = new PaymentProcess(PaymentType.DTrust),
    ppRapidoPago = new PaymentProcess(PaymentType.RapidoPago);

ppVisa.create();
ppDTrust.create();
ppRapidoPago.create();

describe("Visa Payment Method", () => {

    it('Payment must be paid by visa', async () => {
        expect(true).toStrictEqual(ppVisa.paymentType instanceof Visa)
    })

    it('the user has selected Visa Payment Method ', async () => {
        expect("Visa Payment Method Selected").toStrictEqual(ppVisa.message)
    });
});

describe("DTrust Payment Method", () => {

    it('Payment must be paid by DTrust', async () => {
        expect(true).toStrictEqual(ppDTrust.paymentType instanceof DTrust)
    })

    it('the user has selected DTrust Payment Method ', async () => {
        expect("DTrust Payment Method Selected").toStrictEqual(ppDTrust.message)
    });
});

describe("RapidoPago Payment Method", () => {

    it('Payment must be paid by RapidoPago', async () => {
        expect(true).toStrictEqual(ppRapidoPago.paymentType instanceof RapidoPago)
    })

    it('the user has selected RapidoPago Payment Method ', async () => {
        expect("RapidoPago Payment Method Selected").toStrictEqual(ppRapidoPago.message)
    });
});