<template>
  <ProjectModal :project="project" />
  <section id="portfolio" class="pt-[60px] pb-[70px] bg-[#f8f9ff]">
    <div class="container">
      <div class="flex flex-wrap mx-[-16px] mb-16">
        <div class="w-full px-4">
          <div class="max-w-[600px] mx-auto text-center mb-[50px]">
            <span class="font-semibold text-lg text-primary block mb-2">
              Creative Portfolios
            </span>
            <h2
              class="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5"
            >
              Some of My Happy Clients
            </h2>
            <p class="font-medium text-lg text-body-color">
              I'm proud to have worked with some of the world's most respected
              brands on cool projects.
            </p>
          </div>
        </div>
        <div class="w-full px-4">
          <div
            class="flex flex-wrap items-center justify-center wow fadeInUp"
            data-wow-delay=".1s
                                      "
          >
            <a
              href="https://ultimate.ai"
              target="_blank"
              rel="nofollow noreferrer"
              class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
            >
              <img
                loading="lazy"
                width="120"
                height="60"
                src="@/assets/images/brands/ultimate.webp"
                alt="uideck"
              />
            </a>
            <a
              href="https://intrepidtravel.com"
              target="_blank"
              rel="nofollow noreferrer"
              class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
            >
              <img
                loading="lazy"
                src="@/assets/images/brands/intrepid.webp"
                alt="tailgrids"
                width="120"
                height="60"
              />
            </a>
            <a
              href="https://honda.com"
              target="_blank"
              rel="nofollow noreferrer"
              class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
            >
              <img
                loading="lazy"
                src="@/assets/images/brands/honda.webp"
                alt="lineicons"
                width="120"
                height="60"
              />
            </a>
            <a
              href="https://endy.ca"
              target="_blank"
              rel="nofollow noreferrer"
              class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
            >
              <img
                loading="lazy"
                src="@/assets/images/brands/endy.webp"
                width="120"
                height="60"
                alt="ayroui"
              />
            </a>
            <a
              href="https://telus.ca"
              target="_blank"
              rel="nofollow noreferrer"
              class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
            >
              <img
                loading="lazy"
                src="@/assets/images/brands/telus.webp"
                width="120"
                height="60"
                alt="plainadmin"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="portfolio-container flex justify-center -mx-4">
        <div class="w-full xl:w-10/12 px-4">
          <div class="items-wrapper flex flex-wrap justify-center mx-[-16px]">
            <div
              v-for="project in projects"
              :key="project.id"
              @click="populateProjectModal(project.id)"
              class="w-full md:w-1/4 px-4 item web app"
            >
              <div class="mb-12">
                <div
                  class="relative group mb-8 h-48 overflow-hidden shadow-service rounded-lg"
                >
                  <img
                    loading="lazy"
                    :src="imgUrl(project.src)"
                    alt="image"
                    class="w-full cover object-cover h-full transition duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <div
                    class="absolute w-full h-full top-0 left-0 bg-primary bg-opacity-[17%] flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
                  ></div>
                </div>
                <h3 class="mt-6">
                  <a
                    href="portfolio-details.html"
                    class="font-semibold text-black hover:text-primary text-xl inline-block mb-3"
                  >
                    {{ project.title }}
                  </a>
                </h3>
                <p class="font-medium text-base text-body-color">
                  {{ project.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineAsyncComponent } from "vue";
// import json from "../utils/projects.json";
import { projects } from "../utils/projects.js";

export default {
  name: "HomeView",
  components: {
    ProjectModal: defineAsyncComponent(() =>
      import("@/components/ProjectModal.vue")
    ),
  },
  data() {
    return {
      projects,
      project: null,
    };
  },
  computed: {},
  methods: {
    imgUrl(path) {
      return new URL(`../assets/images/projects/${path}`, import.meta.url).href;
    },
    populateProjectModal(projectId) {
      this.project = this.projects.filter(
        (project) => project.id === projectId
      )[0];
    },
  },
};
</script>
