
let product = 0;
let productQty = 0;
let price = 0;

class Order {
    constructor(product, price, quantity){
        this.product = product,
        this.price = price,
        this.quantity = quantity,
        this.shipping = 0,
        this.subTotal = 0,
        this.total = 0;
    }

    calcSubTotal(){
        this.subTotal = this.price * this.quantity;
    }

    calcIVA() {
        return this.subTotal * 0.21;
    }

    calcShipping() {
        if(this.subTotal > 5000) {
            this.shipping = 0;
        }
        else {
            this.shipping = 700;
        }
    }

    calcTotal() {
        this.total = this.subTotal + this.shipping + this.calcIVA()
    }
}

function productOrder() {
    while(!product || product == 0 || product > 4) {
        product = parseInt(prompt("¿Que producto queres comprar?:\n 1: Tabla($1200)\n 2:Kite($2200)\n 3:Wetsuit($500)\n 4:Barras($600)"));
    }

    switch(product){
        case 1:
            product = "Tabla";
            price = 1200;
            break;
        case 2:
            product = "Kite";
            price = 2200;
            break;            
        case 3:
            product = "Wetsuit";
            price = 500;
            break;
        case 4:
            product = "Barra";
            price = 600;
            break;
    }

    while(!productQty || productQty == 0 ){
        productQty = parseInt(prompt("Producto elegido: " + product + "\n Introduzca la cantidad deseada. (Solo numeros)"));
        }

        return new Order(product, price, productQty)
}

alert("Bienvenido a KiteWorld");

const order = productOrder();

order.calcSubTotal();
order.calcIVA();
order.calcShipping();
order.calcTotal();

alert("Detalle del pedid:\n" + 
    "- " + order.product + " x " + order.quantity + ": $" + order.price * order.quantity + "\n" +
    "- IVA 21% $" + order.calcIVA() + "\n" + 
    "- Costo de Envio: $" + order.shipping + "\n" +
    "Total = $" + order.total
    );


