<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import ThePagination from "@/components/ThePagination.vue";
import TheFooter from "@/components/TheFooter.vue";
import usePosts from "@/composables/posts";
import words from "lodash/words";
import join from "lodash/join";
import slice from "lodash/slice";

import { ref, computed, onMounted, watch } from "vue";
import moment from "moment";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const { posts_data, fetchPosts } = usePosts();

const currentPage = computed(() =>
  route.query.page ? parseInt(route.query.page) : 1,
);

const posts = computed(() =>
  posts_data.value?.results?.map((post) => ({
    ...post,
    excerpt: join([...slice(words(post.body), 0, 48), "..."], " "),
    publish_date: moment(post.publish).format("MMM DD YYYY"),
  })),
);

const onPageChange = (page) => {
  router.replace({
    name: "blog-list",
    query: { page },
  });
};

watch(
  () => route.query.page,
  async (page) => {
    fetchPosts({ page });
  },
  {
    immediate: true,
  },
);
</script>
<template>
  <header class="border-bottom">
    <the-navbar />
  </header>
  <main>
    <div class="container py-4">
      <h1>Blog</h1>

      <div v-if="posts_data" class="row row-cols-1 g-3">
        <div v-for="post in posts" :key="post.slug" class="col">
          <div class="h-100 py-3 border-bottom">
            <div class="">
              <span class="fs-5 text-body">{{ post.publish_date }}</span>
              <router-link
                :to="{ name: 'blog-detail', params: { slug: post.slug } }"
                class="text-decoration-none"
                ><h3 class="h4">{{ post.title }}</h3></router-link
              >
              <p class="text-muted">{{ post.excerpt }}</p>
            </div>
            <div>
              <span>By {{ post.author_username }}</span>
            </div>
          </div>
        </div>
        <the-pagination
          :total-items="posts_data?.count"
          :items-per-page="8"
          :current-page="currentPage"
          @page-changed="onPageChange"
        />
      </div>
    </div>
  </main>
  <the-footer />
</template>
