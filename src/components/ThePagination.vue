<script setup>
import { computed } from "vue";

const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["page-changed"]);

const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage),
);
const hasPrevious = computed(() => props.currentPage > 1);
const hasNext = computed(() => props.currentPage < props.totalPages);

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  emit("page-changed", page);
};

const previousPage = () => {
  if (hasPrevious.value) {
    emit("page-changed", currentPage.value - 1);
  }
};

const nextPage = () => {
  if (hasNext.value) {
    emit("page-changed", currentPage.value + 1);
  }
};
</script>
<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !hasPrevious }">
        <a
          class="page-link"
          @click="previousPage"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" @click="goToPage(page)" href="#">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !hasNext }">
        <a class="page-link" @click="nextPage" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
