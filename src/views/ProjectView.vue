<template>
  <section class="pt-[50px]">
    <div class="container">
      <div class="pb-[120px]">
        <div class="flex flex-wrap justify-center mx-[-16px]">
          <div class="w-full lg:w-8/12 px-4">
            <div>
              <h2 class="font-bold text-black text-3xl sm:text-4xl leading-tight sm:leading-tight mb-8">
                {{ this.project?.title?.rendered }}
              </h2>
              <div class="body" v-html="this.project?.content?.rendered"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../utils/projects.json';
import contentService from '../services/contentService';

export default {
  name: 'ProjectPost',
  async mounted() {
    this.project = await contentService.getProject(this.$route.params.id);
  },
  data() {
    return {
      project: null,
    };
  },
};
</script>

<style scoped>
.body ::v-deep p { padding: 16px 0 }

</style>
