// topic - weakmap and weakset in js;

// weakmap and weakset are special types of collections in js;
// that allow for "weakly" held object references;
// it means that the references to the objects stored in these collections-
// do not prevent the objects from being garbage collected if there are no other strong references to them.

// WeakMap: A WeakMap is similar to a Map, but the keys must be objects, and those keys are held weakly.
// WeakSet: A WeakSet is similar to a Set, but it only stores objects, and the objects are held weakly.

// helps in managing memory efficiently, especially in cases where we have temporary objects or we want to avoid memory leaks.

// 1. weakmap
// ===============
// keys must be objects: only objects can be used as keys in a WeakMap.
// no iteration: we can't iterate over the keys or values of a WeakMap. 
// this also means there are no size property or methods like keys(), values(), or entries().
// automatic garbage collection: if an object used as a key in a WeakMap has no other references, 
// it will be garbage collected, and the entry in the WeakMap will be removed.

// below is the simple example for weakmap;

// here we are creating 2 normal objects; 
let obj1: any = { name: "safeer" };
let obj2 = { name: "saam" };

// creating an instance of weakmap;
const weakMap = new WeakMap();

// setting objects as keys and giving values;
weakMap.set(obj1, "engineer");
weakMap.set(obj2, "developer");

console.log("1. weakmap");
console.log("=============");
// here we will get logged the values we given
console.log(weakMap.get(obj1)); 
console.log(weakMap.get(obj2)); 

// after removing the reference to obj1, it can be garbage collected
obj1 = null;

// note: at this point, obj1 might have been garbage collected, so weakMap no longer has it
// here we will be getting false as logged
console.log(weakMap.has(obj1));


// 2. weakset
// ===============
// only objects are allowed: similar to WeakMap, WeakSet only stores objects, not primitive values.
// no iteration: we can't iterate over the values of a WeakSet. 
// therefore, it also lacks methods like keys(), values(), entries(), and properties like size.
// automatic garbage collection: objects in a WeakSet are held weakly, 
// so if there are no other references to an object, it can be garbage collected.

// below is the simple example for weakmap;

// creating normal objects
let person1: any = { name: "safeer ep" };
let person2 = { name: "ep safeer" };

// creating an instance fot weakset
const weakSet = new WeakSet();

// adding objects to the WeakSet
weakSet.add(person1);
weakSet.add(person2);

console.log("2. weakset");
console.log("=============");
// just checking the existence;
console.log(weakSet.has(person1));
console.log(weakSet.has(person2));

// removing the reference to person1
person1 = null;

// after garbage collection, person1 might be removed from the WeakSet
// here we will get false logged (as person1 may have been collected)
console.log(weakSet.has(person1));