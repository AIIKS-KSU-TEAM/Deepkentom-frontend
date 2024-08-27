import { ref } from "vue";
import apiClient from "@/api/axiosConfig";

export default function useTestimonials() {
  const testimonials = ref([]);

  const fetchTestimonials = async () => {
    try {
      const response = await apiClient.get("clients/");
      testimonials.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    testimonials,
    fetchTestimonials,
  };
}
