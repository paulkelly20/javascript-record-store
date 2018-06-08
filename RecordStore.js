var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

RecordStore.prototype.buyRecordForInventory = function (record) {
  if(this.balance >= record.price){
  this.inventory.push(record);
  this.balance -= record.price;}
};

module.exports = RecordStore;