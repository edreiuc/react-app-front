export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_URL}users`);
    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
