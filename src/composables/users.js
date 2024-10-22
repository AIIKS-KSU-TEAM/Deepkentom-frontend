import { ref } from "vue";
import apiClient from "@/api/axiosConfig";

export default function useUsers() {
  const users = ref([]);

  const fetchUsers = async () => {
    try {
      const response = await apiClient.get("users/");
      users.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    users,
    fetchUsers,
  };
}
