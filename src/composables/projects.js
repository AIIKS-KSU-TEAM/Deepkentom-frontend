import apiClient from "@/api/axiosConfig";
import { ref } from "vue";

export default function useProjects() {
  const projects = ref([]);

  const fetchProjects = async () => {
    try {
      const response = await apiClient.get("projects/");

      projects.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    projects,
    fetchProjects,
  };
}
