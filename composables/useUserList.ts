export default function () {
  async function fetchUsers(): Promise<Array<User>> {
    let response = await fetch("/api/users");
    return response.json();
  }

  return {
    fetchUsers,
  };
}

export type User = {
  id: Number;
  name: String;
  address: String;
  city: String;
  birthday: String;
  contact: {
    phone: String | undefined;
    email: String | undefined;
  };
};
