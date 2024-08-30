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

      <!-- <add-post-comment :post="post" /> -->
    </div>
  </main>
  <the-footer />
</template>
