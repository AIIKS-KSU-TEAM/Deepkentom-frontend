<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

const router = useRouter();
const route = useRoute();

const post = ref({
  title: "",
  slug: "",
  author: "",
  body: "",
  status: "draft",
});

const currentPost = ref(null);
const comments = ref([]);
const comment = ref({
  name: "",
  email: "",
  content: "",
  post: null,
});

const submitPost = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/blog/post/create/",
      post.value,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    if (response.status === 201) {
      router.push({ name: "PostList" });
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

const fetchComments = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8000/blog/post/${currentPost.value.id}/comments/`,
    );
    comments.value = response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

const submitComment = async () => {
  try {
    comment.value.post = currentPost.value.id;
    await axios.post(
      `http://localhost:8000/blog/post/${currentPost.value.id}/comments/`,
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

onMounted(async () => {
  const { year, month, day, slug } = route.params;

  try {
    const response = await axios.get(
      `http://localhost:8000/blog/post/${year}/${month}/${day}/${slug}/`,
    );
    currentPost.value = response.data;
    fetchComments();
  } catch (error) {
    console.error("Error fetching post:", error);
  }
});
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>

    <div class="mx-4 mt-5">
      <div class="row">
        <!-- Main Content -->
        <main class="col-md-9 card">
          <div class="mb-5 mt-3">
            <h2>Create a New Blog</h2>
            <form @submit.prevent="submitPost">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="post.title"
                  required
                />
              </div>
              <div class="form-group">
                <label for="slug">Slug</label>
                <input
                  type="text"
                  class="form-control"
                  id="slug"
                  v-model="post.slug"
                  required
                />
              </div>
              <div class="form-group">
                <label for="author">Author</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="post.author"
                  required
                />
              </div>
              <div class="form-group">
                <label for="body">Body</label>
                <textarea
                  class="form-control"
                  id="body"
                  rows="5"
                  v-model="post.body"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <label for="status">Status</label>
                <select
                  class="form-control"
                  id="status"
                  v-model="post.status"
                  required
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <button type="submit" class="mt-2 btn btn-outline-secondary">
                Submit
              </button>
            </form>
          </div>
        </main>

        <!-- Sidebar -->
        <aside class="col-md-3">
          <div class="card mb-4">
            <div class="card-body">
              <h3 class="card-title">About This Blog</h3>
              <p class="card-text">
                Welcome to our blog! Explore various posts on different topics.
                Enjoy the content and feel free to leave your comments.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Other Blogs</h4>
              <ul class="list-unstyled">
                <li v-for="(post, index) in processed_posts" :key="index">
                  <router-link
                    :to="{
                      name: 'PostDetail',
                      params: {
                        year: post.year,
                        month: post.month,
                        day: post.day,
                        slug: post.slug,
                      },
                    }"
                    class="text-decoration-none"
                  >
                    {{ post.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-5">
      <Footer />
    </footer>
  </div>
</template>
