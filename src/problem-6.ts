interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(obj: Profile, updates: Partial<Profile>) {
  return { ...obj, ...updates };
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(myProfile.name)