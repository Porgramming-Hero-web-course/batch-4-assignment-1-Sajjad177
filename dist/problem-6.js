"use strict";
function updateProfile(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
