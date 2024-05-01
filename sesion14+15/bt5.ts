class Account1{
    accountNumber:number
    balance:number
    history:string[]
    constructor(accountNumber:number,balance:number,){
        this.accountNumber=accountNumber
        this.balance=balance
        this.history=[]
    }
    deposit(item:number){
        this.balance+=item
        this.history.push(`+${item}`)
    }
    withdraw(item:number){
        if(item>this.balance){
            console.log("khong co nhieu tien vay dau");
            return
        }
        else{
            this.balance-=item
            this.history.push(`-${item}`)
        }
    }
    transfer(item:Account1,money:number){
        if(money>this.balance){
            console.log("khong co nhieu tien vay dau");
            return
        }
        else{
            this.balance-=money
            item.balance+=money
            this.history.push(`-${money} -> ${item}`)
        }
    }
    showHistory(){
        console.log(this.history);
        
    }

}
class Transaction{
    id:number
    type:string
    newBalance:number
    amount:string
    constructor(id:number,type:string,newBalance:number,amount:string){
        this.id=id
        this.type=type
        this.newBalance=newBalance
        this.amount=amount
    }
}