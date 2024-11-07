function validateKeys<T extends object> (obj: T, keys:(keyof T)[]):boolean {
    return keys.every(key => key in obj)
}

const person = { name: "John Doe", age: 30, email: "john.doe@example.com" };

