<script setup>
import usePosts from "@/composables/posts";
import { onMounted, computed } from "vue";
import words from "lodash/words";
import join from "lodash/join";
import slice from "lodash/slice";
import moment from "moment";

const { posts_data, fetchPosts } = usePosts();

const posts = computed(() =>
  posts_data.value?.results?.map((post) => ({
    ...post,
    excerpt: join([...slice(words(post.body), 0, 20), "..."], " "),
    publish_date: moment(post.publish).format("MMM DD YYYY"),
  })),
);

onMounted(async () => {
  fetchPosts();
});
</script>
<template>
  <section v-if="posts?.length" class="py-5 bg-body">
    <div class="container">
      <h2>Recent Posts</h2>

      <div class="mt-3 row row-cols-1 row-cols-md-2 g-5">
        <div v-for="post in posts.slice(0, 4)" :key="post.id" class="col">
          <div class="h-100">
            <div class="">
              <span class="fs-5 text-body">{{ post.publish_date }}</span>
              <router-link
                :to="{ name: 'blog-detail', params: { slug: post.slug } }"
                class="text-decoration-none"
              >
                <h3 class="h4">
                  {{ post.title }}
                </h3>
              </router-link>
              <p class="text-muted">{{ post.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <router-link
          to="/blog"
          class="btn btn-outline-primary rounded-pill px-4 py-2"
          >Read more</router-link
        >
      </div>
    </div>
  </section>
</template>
