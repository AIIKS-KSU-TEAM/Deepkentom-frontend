<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import moment from "moment";
import usePosts from "@/composables/posts";

const { post, fetchPostBySlug } = usePosts();

const comments = computed(() => post.value?.comments ?? []);

const comment = ref({
  name: "",
  email: "",
  content: "",
  post: null,
});

const route = useRoute();

onMounted(async () => {
  fetchPostBySlug(route.params.slug);
});

const submitComment = async () => {
  try {
    comment.value.post = post.value.id;
    await axios.post(
      `http://localhost:8000/blog/post/${post.value.id}/comments/`,
      comment.value,
    );

    comment.value.name = "";
    comment.value.email = "";
    comment.value.content = "";
    fetchComments();
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
};
</script>
<template>
  <header>
    <the-navbar />
  </header>
  <main>
    <div v-if="post" class="container py-4">
      <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p class="date">
          Published on {{ post.publish }} by {{ post.author_username }}
        </p>
        <p v-html="post.body" class="fs-5 fw-light lh-base"></p>
      </div>

      <!-- Comment Form -->
      <div class="card shadow-none mt-3">
        <div class="card-body">
          <h3 class="card-title">Leave a Comment</h3>
          <form @submit.prevent="submitComment" class="row row-cols-1 g-3">
            <div class="col">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="comment.name"
                required
              />
            </div>
            <div class="col">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="comment.email"
                required
              />
            </div>
            <div class="col">
              <label for="content">Comment</label>
              <textarea
                class="form-control"
                id="content"
                rows="3"
                v-model="comment.content"
                required
              ></textarea>
            </div>
            <div class="col">
              <button type="submit" class="btn btn-outline-secondary mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Display Comments -->
      <div class="card mt-4" v-if="comments.length > 0">
        <div class="card-body">
          <h3 class="card-title">Comments ({{ comments.length }})</h3>
          <ul class="list-unstyled">
            <li v-for="(comment, index) in comments" :key="index">
              <p>
                <strong>{{ comment.name }}</strong> - {{ comment.email }}
              </p>
              <p>{{ comment.content }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <p>No comments yet.</p>
      </div>
    </div>
  </main>
  <the-footer />
</template>
