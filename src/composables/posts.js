import { ref } from "vue";
import apiClient from "@/api/axiosConfig";

export default function usePosts() {
  const posts_data = ref(null);
  const post = ref(null);
  const newComment = ref(null);

  const fetchPosts = async ({ page = null } = {}) => {
    try {
      const response = await apiClient.get("posts/", {
        params: {
          page,
        },
      });

      posts_data.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPostBySlug = async (postSlug) => {
    try {
      const response = await apiClient.get(`posts/${postSlug}/`);

      post.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const submitPostComment = async (postSlug, { name, email, content }) => {
    try {
      const response = await apiClient.post(`posts/${postSlug}/comment/`, {
        name,
        email,
        content,
      });

      newComment.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    post,
    posts_data,
    fetchPosts,
    fetchPostBySlug,
    newComment,
    submitPostComment,
  };
}
