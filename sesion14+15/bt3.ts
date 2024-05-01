class MenuItem {
    id:number
    name:string
    price:number
    constructor(id:number,name:string,price:number){
        this.id=id
        this.name=name
        this.price=price 

    }
}
class Table{
    id:number
    capacity:string
    available:boolean
    constructor(id:number,capacity:string,available:boolean=true){
        this.id=id
        this.capacity=capacity
        this.available=available
    }
}
class Reservation {
    id:number
    customerName:string
    tableId:number
    constructor(id:number,customerName:string, tableId:number){
        this.id=id
        this.customerName=customerName
        this.tableId=tableId
    }
}
class Order{
    id:number
    tableId:number
    items:MenuItem[]
    constructor(id:number, tableId:number){
        this.id=id
        this.tableId=tableId
        this.items=[]
    }
    getTotal(){
        let sum=0
        this.items.forEach(item => {
            sum+=item.price
        });
    }
}
class  Restaurant{
    menu:MenuItem[]
    tables:Table[]
    reservations:Reservation[]
    orders :Order[]
    constructor(){
        this.menu=[]
        this.tables=[]
        this.reservations=[]
        this.orders=[]
    }
    addMenuItem(item:MenuItem){
        this.menu.push(item)

    }
    addTable(item:Table){
        this.tables.push(item)
    }
    makeReservation(item1:Reservation){
        this.reservations.push(item1)
        this.tables.forEach(item => {
            if(item1.tableId === item.id){
                item.available=false
            }
            
        }); 
    }
    placeOrder(item:Order){
        this.orders.push(item)
    }
    generateBill(tableId: number): void {
        const order = this.orders.find(o => o.tableId === tableId);
        if (order) {
            const total = order.getTotal(this.menu);
            console.log(`Tien thanh toan : ${tableId}: $${total}`);
            const table = this.tables.find(t => t.id === tableId);
            if (table) {
                table.available = true;
            }
        }
    }
}
