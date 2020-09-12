// Write code under this line
class Storage {
  constructor(goods) {
    this.items = goods;
  }

  getItems() {
    return goods;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    // goods.splice(goods.indexOf(item), goods.indexOf(item));
    // this.item = this.items.filter((el) => el !== item);
    if (this.items.includes(item)) {
      this.items.splice(this.items.indexOf(item), 1);
    }
    // return this.items;
  }
}
console.log(typeof Storage);
// 'function'

const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem("Дроид");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem("Пролонгер");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
