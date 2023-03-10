<template>
  <div class="relative flex-1 px-8 sm:px-12">
    <p class="font-semibold text-sm text-primary block py-4">
      {{ project.subtitle }}
    </p>
    <p class="font-base text-body-color leading-relaxed text-xs md:text-sm pt-4 pb-8 whitespace-pre-line">
      {{ project.description }}
    </p>
    <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8">
      <li v-for="content in project.content" :key="content.src" class="relative">
        <div
          class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <div class="aspect-w-16 aspect-h-9" v-if="content.type === 'video'">
            <iframe :src="content.src" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen class="w-full h-auto object-cover"></iframe>
          </div>
          <img loading="lazy" v-if="content.type === 'image'" :src="imgUrl(content.src)" alt=""
            class="pointer-events-none w-full object-cover group-hover:opacity-75" />
        </div>
        <p class="font-light text-body-color leading-relaxed text-sm py-4">
          {{ content.caption }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import contentService from '../services/contentService';

export default {
  name: 'ProjectPost',
  async mounted() {
    await contentService.getProject(this.$route.id).then((project) => {
      this.project = project;
    });
  },
  data() {
    return {
      project: null,
    };
  },
};
</script>
