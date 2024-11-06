// src/composables/useInternshipApplication.js
import { ref } from "vue";
import apiClient from "@/api/axiosConfig";

export function useInternshipApplication() {
  const name = ref("");
  const email = ref("");
  const phone = ref("");
  const resume = ref(null);
  const message = ref("");

  const handleFileChange = (e) => {
    resume.value = e.target.files[0];
  };

  const submitApplication = async () => {
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone", phone.value);
    formData.append("message", message.value);

    if (resume.value) {
      formData.append("resume", resume.value);
    } else {
      console.error("No file selected for resume");
    }

    try {
      const response = await apiClient.post(
        "/api/internship/submit/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      alert("Application submitted successfully!");
    } catch (error) {
      console.error(
        "Error submitting application:",
        error.response?.data || error.message,
      );
      alert("Failed to submit application.");
    }
  };

  return {
    name,
    email,
    phone,
    resume,
    message,
    handleFileChange,
    submitApplication,
  };
}
