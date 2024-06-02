export {}

interface CreditParameters {
    price:number
    discount: number
    isInstallment:boolean
    months:number
}

const totalPrice = ({ price, discount, isInstallment, months }:CreditParameters) :number=> {

    return price * (1 - discount / 100) / months
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); 


