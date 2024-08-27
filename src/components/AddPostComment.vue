<script setup>
import usePosts from "@/composables/posts";
import { reactive } from "vue";

const props = defineProps({
  post: { type: Object, required: true },
});

const emit = defineEmits(["new-comment-created"]);

const { newComment, submitPostComment } = usePosts();

const form = reactive({
  name: "",
  email: "",
  content: "",
});

const onSubmit = async () => {
  await submitPostComment(props.post.slug, {
    name: form.name,
    email: form.email,
    content: form.content,
  });

  if (newComment.value) {
    emit("new-comment-created", newComment.value);
  }
};
</script>
<template>
  <div class="card shadow-none mt-3">
    <div class="card-body">
      <h3 class="card-title">Leave a Comment</h3>
      <form @submit.prevent="onSubmit" class="row row-cols-1 g-3">
        <div class="col">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="name"
            v-model="form.name"
            required
          />
        </div>
        <div class="col">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control form-control-sm"
            id="email"
            v-model="form.email"
            required
          />
        </div>
        <div class="col">
          <label for="content" class="form-label">Comment</label>
          <textarea
            class="form-control form-control-sm"
            id="content"
            rows="3"
            v-model="form.content"
            required
          ></textarea>
        </div>
        <div class="col">
          <button
            type="submit"
            class="btn btn-sm btn-outline-primary rounded-pill"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
