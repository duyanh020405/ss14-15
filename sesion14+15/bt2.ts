class Productt {
    id:number
    name:string
    price:number
    constructor(id:number,name:string,price:number){
        this.id=id
        this.name=name
        this.price=price 

    }
} 
class CartProduct extends Productt{
    quantity:number
    constructor(id:number,name:string,price:number,quantity:number){
        super(id,name,price)
        this.quantity=quantity
    }
    calculatePrice():number{
       return this.price*this.quantity
    }
    increaseQuantity(){
        this.quantity++
    }
    decreaseQuantity(){
        this.quantity--
    }
}
class ShopProduct extends Productt{
    stock:number
    constructor(id:number,name:string,price:number,stock:number,){
        super(id,name,price)
        this.stock=stock
    }
}
class Cart{
    items:CartProduct[]
    constructor(items:CartProduct[]){
        this.items=items
    }
    addCart(item:CartProduct){
        this.items.push(item)

    }
    removeCart(item:CartProduct){
        const index = this.items.indexOf(item)
        if (index !== -1) {
            this.items.splice(index, 1);
        }
        
    }
    getTotal(){
        let sum=0
        this.items.forEach(item => {
            sum+=item.price*item.quantity
        });
    }
    addItem(shopProducts: ShopProduct[], productId: number, quantity: number): void {
        const foundProduct = shopProducts.find(product => product.id === productId);
        if (foundProduct) {
            if (quantity <= foundProduct.stock) {
                this.items.push(new CartProduct(foundProduct.id, foundProduct.name, foundProduct.price, quantity));
            } else {
                console.log(`Số lượng cần mua vượt quá số lượng `);
            }
        } else {
            console.log(`Không tìm thấy sản phẩm có ID `);
        }
    }
}
let shopProducts: ShopProduct[] = [
    new ShopProduct(1, "Product 1", 10, 50),
    new ShopProduct(2, "Product 2", 5, 100),
    new ShopProduct(3, "Product 3", 7, 30)
];

let cartProducts: CartProduct[] = [
    new CartProduct(1, "Product 1", 10, 2),
    new CartProduct(2, "Product 2", 5, 1)
];
