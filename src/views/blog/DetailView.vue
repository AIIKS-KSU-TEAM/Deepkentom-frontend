<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import AddPostComment from "@/components/AddPostComment.vue";
import { ref, onMounted, computed } from "vue";
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
</script>
<template>
  <header class="border-bottom">
    <the-navbar />
  </header>
  <main>
    <div v-if="post" class="container py-4">
      <div v-if="post">
        <h1>{{ post.title }}</h1>
        <div>
          <div>By {{ post.author_username }}</div>
          <div class="text-muted fs-5">
            {{ moment(post.publish).format("MMM DD YYYY") }}
          </div>
        </div>
        <p v-html="post.body"></p>
      </div>

      <add-post-comment :post="post" />

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
