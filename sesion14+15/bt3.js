"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available = true) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId) {
        this.id = id;
        this.tableId = tableId;
        this.items = [];
    }
    getTotal() {
        let sum = 0;
        this.items.forEach(item => {
            sum += item.price;
        });
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(item) {
        this.tables.push(item);
    }
    makeReservation(item1) {
        this.reservations.push(item1);
        this.tables.forEach(item => {
            if (item1.tableId === item.id) {
                item.available = false;
            }
        });
    }
    placeOrder(item) {
        this.orders.push(item);
    }
    generateBill(tableId) {
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
