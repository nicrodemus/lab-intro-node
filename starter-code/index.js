class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.length = this.items.length;
    this.items = this.items.sort(function(a, b) {
      return a - b;
    });
  }
  get(pos) {
  return  this.items[pos - 1];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
     return  Math.max(...this.items);
    }
    
    
    } 

  
   min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
   } else {
     return Math.min(...this.items)
   }
  }
   average(){
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
     return this.items.reduce((a, b) => a + b, 0)/ this.length;
    }
  }
   sum() {
     
    if (this.items.length === 0){
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b, 0)
  }
  
}}
module.exports = SortedList;
