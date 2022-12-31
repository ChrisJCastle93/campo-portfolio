<script>
import { defineAsyncComponent } from "vue";
import json from "../utils/projects.json";

export default {
  name: "HomeView",
  components: {
    ProjectModal: defineAsyncComponent(() =>
      import("../components/ProjectModal.vue")
    ),
  },
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      company: "",
      projectDetails: "",
      projects: json,
      project: null,
    };
  },
  methods: {
    sendContactForm(e) {
      e.preventDefault();
      alert("form submitted, chris needs to make this send an email :) ");
    },
    populateProjectModal(projectId) {
      this.project = this.projects.filter(
        (project) => project.id === projectId
      )[0];
    },
  },
};
</script>

<template>
  <div>
    <ProjectModal :project="project" />
    <section
      id="home"
      class="relative z-10 pt-[50px] lg:pt-[100px] 2xl:flex items-center 2xl:h-[700px]"
    >
      <div class="container">
        <div class="flex flex-wrap mx-[-16px]">
          <div class="w-full lg:w-1/2 self-center px-4 z-10">
            <div>
              <h1 class="text-base font-semibold text-primary mb-3">
                Hey There 👋 I am
                <span
                  class="font-bold text-black text-3xl sm:text-3xl md:text-[45px] leading-tight sm:leading-tight md:leading-[50px] block mt-1"
                >
                  Christina Campo
                </span>
              </h1>
              <h2 class="font-medium text-body-color text-lg md:text-xl mb-5">
                Professional

                <span class="text-black">Content Manager </span>
              </h2>
              <p
                class="max-w-[470px] font-medium text-body-color text-base leading-relaxed mb-11"
              >
                I’m a copywriter and content marketer who is passionate about
                crafting copy that combines storytelling with strategy and
                creativity with conversion.
              </p>
              <div class="flex items-center">
                <a
                  href="#contact"
                  class="text-sm font-semibold text-white bg-primary py-3 px-8 mr-4 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition duration-300 ease-in-out"
                >
                  Contact Me
                </a>
                <a
                  href="#portfolio"
                  class="text-sm font-semibold text-white bg-black py-3 px-4 lg:px-8 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition duration-300 ease-in-out"
                >
                  Things I've Written
                </a>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 self-end px-4">
            <div
              class="relative lg:mt-12 lg:mt-0 z-10 2xl:absolute 2xl:bottom-0 2xl:right-40"
            >
              <img
                src="../assets/images/hero/hero-image.webp"
                alt="image"
                class="max-w-full mx-auto"
              />
              <span class="absolute lefter-[-8px] bottom-2 -z-1">
                <svg
                  width="40"
                  height="38"
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.31451 3.18282L32.4926 6.24789C36.3084 6.75249 38.147 11.1986 35.8021 14.2508L21.5587 32.7911C19.2138 35.8434 14.444 35.2126 12.9731 31.6558L4.03852 10.0504C2.56762 6.49355 5.49873 2.67822 9.31451 3.18282Z"
                    stroke="#4A6CF7"
                    stroke-width="6"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span class="absolute left-0 top-32 -z-1">
          <svg
            width="48"
            height="95"
            viewBox="0 0 48 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="0.5"
              cy="47.5"
              r="47.5"
              fill="url(#paint0_radial_6:121)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_6:121"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(0.5) rotate(90) scale(95)"
              >
                <stop stop-color="white" />
                <stop offset="0.569" stop-color="#F0F4FD" />
                <stop offset="0.993" stop-color="#D9E0F0" />
              </radialGradient>
            </defs>
          </svg>
        </span>
        <span class="absolute right-0 bottom-0 -z-1">
          <svg
            width="491"
            height="490"
            viewBox="0 0 491 490"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="356.5"
              cy="356.5"
              r="356.5"
              fill="url(#paint0_linear_6:37)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6:37"
                x1="356.5"
                y1="0"
                x2="356.5"
                y2="713"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" />
                <stop offset="1" stop-color="#1E3BB3" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
    <section id="about" class="pt-[145px] pb-[120px] relative z-10">
      <div class="container">
        <div class="flex flex-wrap mx-[-16px]">
          <div class="w-full lg:w-1/2 xl:w-7/12 px-4 mb-8 lg:mb-0">
            <span class="font-bold text-primary text-lg md:text-xl mb-3">
              ABOUT ME
            </span>
            <h2
              class="max-w-[400px] font-bold text-black text-3xl sm:text-4xl md:text-[45px] leading-tight sm:leading-tight md:leading-tight mb-5"
            >
              Better content, better conversion
            </h2>
            <p class="max-w-[570px] font-medium text-base text-body-color">
              I write copy that drives results for digital and OOH campaigns,
              including ads, emails, blogs, landing pages, social media, SEO,
              SEM, press releases and more. I can help you with all your
              advertising copywriting, content strategy, and proofreading needs.
            </p>
          </div>
          <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
            <h3 class="font-semibold text-black text-2xl md:text-3xl mb-6">
              Connect With Me
            </h3>
            <p class="font-medium text-base text-body-color mb-10">
              I’m always open to new opportunities, so if you’d like to work
              together or simply chat, please get in touch at
              <a
                class="hover:text-primary"
                href="mailto:christina.a.campo@gmail.com"
                >christina.a.campo@gmail.com</a
              >
              or fill out the contact form.
            </p>
          </div>
        </div>
      </div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2">
        <svg
          width="60"
          height="120"
          viewBox="0 0 60 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="60" fill="url(#paint0_radial_18:24)" />
          <defs>
            <radialGradient
              id="paint0_radial_18:24"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(60) rotate(90) scale(120)"
            >
              <stop stop-color="white" />
              <stop offset="0.569" stop-color="#F0F4FD" />
              <stop offset="0.993" stop-color="#D9E0F0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
    <section id="services">
      <div class="container">
        <div class="pt-[120px] pb-[90px] border-t border-[#E9ECF8]">
          <div class="flex flex-wrap mx-[-16px]">
            <div class="w-full px-4">
              <div class="max-w-[600px] mx-auto text-center mb-[70px]">
                <span class="font-semibold text-lg text-primary block mb-2">
                  What I Offer?
                </span>
                <h2
                  class="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5"
                >
                  SEO & Content Marketing Services
                </h2>
                <p class="font-medium text-lg text-body-color">
                  Content and strategies to rank highly with search engines.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap mx-[-16px]">
            <div class="w-full md:w-1/2 xl:w-1/4 px-4">
              <div
                class="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8"
              >
                <div
                  class="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-primary"
                >
                  <img
                    src="../assets/images/services/copywriting.webp"
                    alt="SEO"
                    width="35"
                    height="35"
                  />
                </div>
                <h3
                  class="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3"
                >
                  Copywriting
                </h3>
                <p
                  class="font-medium text-body-color group-hover:text-white leading-relaxed text-sm"
                >
                  Copy that converts lookers into bookers.
                </p>
                <div>
                  <span class="absolute top-0 right-0 -z-1">
                    <svg
                      width="218"
                      height="109"
                      viewBox="0 0 218 109"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.05"
                        cx="156.5"
                        cy="-47.5"
                        r="156.5"
                        fill="white"
                      />
                      <circle
                        opacity="0.08"
                        cx="210"
                        cy="6"
                        r="62"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span class="absolute bottom-1 left-1 -z-1">
                    <svg
                      width="23"
                      height="32"
                      viewBox="0 0 23 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="21.262"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 21.262 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 21.262 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 1.76005 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 1.76005 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 11.6228 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 11.6228 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 21.262 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 1.76005 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 11.6228 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 21.262 20.8469)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 1.76005 20.8469)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 11.6228 20.8469)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4 px-4">
              <div
                class="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8"
              >
                <div
                  class="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-primary"
                >
                  <img
                    src="../assets/images/services/blog.webp"
                    alt="blog"
                    width="35"
                    height="35"
                  />
                </div>
                <h3
                  class="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3"
                >
                  Blogs
                </h3>
                <p
                  class="font-medium text-body-color group-hover:text-white leading-relaxed text-sm"
                >
                  Longer form content to engage readers with your brand.
                </p>
                <div>
                  <span class="absolute top-0 right-0 -z-1">
                    <svg
                      width="218"
                      height="109"
                      viewBox="0 0 218 109"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.05"
                        cx="156.5"
                        cy="-47.5"
                        r="156.5"
                        fill="white"
                      />
                      <circle
                        opacity="0.08"
                        cx="210"
                        cy="6"
                        r="62"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span class="absolute bottom-1 left-1 -z-1">
                    <svg
                      width="23"
                      height="32"
                      viewBox="0 0 23 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="21.262"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 21.262 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 21.262 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 1.76005 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 1.76005 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 11.6228 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 11.6228 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 21.262 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 1.76005 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 11.6228 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 21.262 20.8469)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 1.76005 20.8469)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 11.6228 20.8469)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4 px-4">
              <div
                class="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8"
              >
                <div
                  class="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-primary"
                >
                  <img
                    src="../assets/images/services/strategy.webp"
                    alt="strategy"
                    width="35"
                    height="35"
                  />
                </div>
                <h3
                  class="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3"
                >
                  Content Strategy
                </h3>
                <p
                  class="font-medium text-body-color group-hover:text-white leading-relaxed text-sm"
                >
                  Establish a roadmap to help you reach your goals.
                </p>
                <div>
                  <span class="absolute top-0 right-0 -z-1">
                    <svg
                      width="218"
                      height="109"
                      viewBox="0 0 218 109"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.05"
                        cx="156.5"
                        cy="-47.5"
                        r="156.5"
                        fill="white"
                      />
                      <circle
                        opacity="0.08"
                        cx="210"
                        cy="6"
                        r="62"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span class="absolute bottom-1 left-1 -z-1">
                    <svg
                      width="23"
                      height="32"
                      viewBox="0 0 23 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="21.262"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 21.262 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 21.262 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 1.76005 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 1.76005 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 11.6228 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 11.6228 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 21.262 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 1.76005 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 11.6228 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 21.262 20.8469)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 1.76005 20.8469)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 11.6228 20.8469)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4 px-4">
              <div
                class="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8"
              >
                <div
                  class="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-primary"
                >
                  <img
                    src="../assets/images/services/seo.webp"
                    alt="SEO"
                    width="35"
                    height="35"
                  />
                </div>
                <h3
                  class="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3"
                >
                  SEO Engineering
                </h3>
                <p
                  class="font-medium text-body-color group-hover:text-white leading-relaxed text-sm"
                >
                  Rank highly with Google.
                </p>
                <div>
                  <span class="absolute top-0 right-0 -z-1">
                    <svg
                      width="218"
                      height="109"
                      viewBox="0 0 218 109"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.05"
                        cx="156.5"
                        cy="-47.5"
                        r="156.5"
                        fill="white"
                      />
                      <circle
                        opacity="0.08"
                        cx="210"
                        cy="6"
                        r="62"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span class="absolute bottom-1 left-1 -z-1">
                    <svg
                      width="23"
                      height="32"
                      viewBox="0 0 23 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="21.262"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 21.262 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 21.262 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 1.76005 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 1.76005 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 11.6228 1.12081)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 11.6228 30.4863)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 21.262 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 1.76005 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 11.6228 10.9839)"
                        fill="white"
                      />
                      <circle
                        cx="21.262"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 21.262 20.8469)"
                        fill="white"
                      />
                      <circle
                        cx="1.76005"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 1.76005 20.8469)"
                        fill="white"
                      />
                      <circle
                        cx="11.6228"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 11.6228 20.8469)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                <img src="../assets/images/brands/ultimate.webp" alt="uideck" />
              </a>
              <a
                href="https://intrepidtravel.com"
                target="_blank"
                rel="nofollow noreferrer"
                class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img
                  src="../assets/images/brands/intrepid.webp"
                  alt="tailgrids"
                />
              </a>
              <a
                href="https://honda.com"
                target="_blank"
                rel="nofollow noreferrer"
                class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img src="../assets/images/brands/honda.webp" alt="lineicons" />
              </a>
              <a
                href="https://endy.ca"
                target="_blank"
                rel="nofollow noreferrer"
                class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img src="../assets/images/brands/endy.webp" alt="ayroui" />
              </a>
              <a
                href="https://telus.ca"
                target="_blank"
                rel="nofollow noreferrer"
                class="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
              >
                <img
                  src="../assets/images/brands/telus.webp"
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
                      :src="project.src"
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

    <section id="testimonial" class="pt-[60px] pb-20">
      <div class="container">
        <div class="flex flex-wrap mx-[-16px]">
          <div class="w-full px-4">
            <div class="max-w-[600px] mx-auto text-center mb-[50px]">
              <span class="font-semibold text-lg text-primary block mb-2">
                Awesome Testimonials
              </span>
              <h2
                class="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5"
              >
                Hear From My Clients
              </h2>
              <p class="font-medium text-lg text-body-color">
                Discover the real-life success stories of those who have worked
                with me and seen the benefits firsthand.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/3 px-4">
            <div
              class="bg-white rounded-xl relative overflow-hidden px-7 sm:px-10 p-10 shadow-testimonial mb-10"
            >
              <div class="mb-5">
                <img
                  src="../assets/images/testimonial/causeforce.webp"
                  alt="lineicons"
                  class="h-12"
                />
              </div>
              <p class="font-medium text-lg text-body-color mb-8">
                “Christina is one of those rare copywriters who just gets it.
                She’s easy to brief, asks smart questions, and knows how to
                write omnichannel campaign copy that drives results. You feel
                lucky to get to work with her.”
              </p>
              <div class="flex items-center">
                <div
                  class="max-w-[60px] w-full h-[60px] rounded-full overflow-hidden mr-3"
                >
                  <img
                    src="../assets/images/testimonial/joni.webp"
                    alt="image"
                    class="w-full"
                    height="60"
                    width="60"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-base text-black mb-1">
                    Joni Taisley
                  </h3>
                  <p class="text-sm text-body-color">
                    Freelance Client, Causeforce Marketing Agency
                  </p>
                </div>
              </div>
              <div class="absolute bottom-8 right-8">
                <svg
                  width="51"
                  height="29"
                  viewBox="0 0 51 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.15">
                    <path
                      d="M12.4311 0.00142075C7.14984 -0.0798293 2.35609 3.33267 1.21859 7.96392C0.568593 10.8077 1.13734 13.6514 2.84359 15.9264C4.63109 18.3639 7.39359 19.9077 10.4811 20.3139L13.3248 27.3014C13.6498 28.0327 14.3811 28.5202 15.1936 28.5202C16.0061 28.5202 16.7373 28.0327 17.0623 27.3014C17.5498 26.0827 18.1186 24.7827 18.6873 23.5639C20.0686 20.4764 21.4498 17.3077 22.5061 14.0577C23.6436 10.6452 23.1561 6.98892 21.2061 4.22642C19.2561 1.54517 16.1686 0.0826707 12.4311 0.00142075ZM19.8248 13.2452C18.7686 16.3327 17.3873 19.5014 16.0873 22.5077C15.8436 23.1577 15.5186 23.7264 15.2748 24.3764L12.5123 17.7139L11.6186 17.6327C9.01859 17.4702 6.58109 16.1702 5.19984 14.3014C3.98109 12.6764 3.57484 10.6452 4.06234 8.69517C4.87484 5.36392 8.36859 2.92642 12.3498 2.92642H12.4311C15.1936 2.92642 17.4686 4.06392 18.9311 6.01392C20.3123 7.96392 20.6373 10.7264 19.8248 13.2452Z"
                      fill="#4A6CF7"
                    />
                    <path
                      d="M49.0747 4.30772C47.1247 1.54522 44.0372 0.00146484 40.2997 0.00146484C40.2185 0.00146484 40.2185 0.00146484 40.1372 0.00146484C34.9372 0.00146484 30.2247 3.41397 29.0872 7.96397C28.4372 10.8077 29.006 13.6515 30.7122 16.0077C32.4997 18.4452 35.2622 19.989 38.3497 20.3952L41.1935 27.3827C41.5185 28.114 42.2497 28.6015 43.0622 28.6015C43.8747 28.6015 44.606 28.114 44.931 27.3827C45.4185 26.164 45.9872 24.864 46.556 23.6452C47.9372 20.5577 49.3185 17.389 50.3747 14.139C51.5122 10.8077 51.0247 7.07022 49.0747 4.30772ZM47.6935 13.2452C46.6372 16.3327 45.256 19.5015 43.956 22.5077C43.7122 23.1577 43.3872 23.7265 43.1435 24.3765L40.381 17.714L39.4872 17.6327C36.8872 17.4702 34.4497 16.1702 33.0685 14.3015C31.8497 12.6765 31.4435 10.6452 31.931 8.61397C32.7435 5.28272 36.2372 2.84521 40.2185 2.84521H40.2997C43.0622 2.84521 45.3372 3.98272 46.7997 5.93272C48.181 7.96397 48.506 10.7265 47.6935 13.2452Z"
                      fill="#4A6CF7"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4">
            <div
              class="bg-white rounded-xl relative overflow-hidden px-7 sm:px-10 p-10 shadow-testimonial mb-10"
            >
              <div class="mb-5">
                <img
                  src="../assets/images/testimonial/intrepid.webp"
                  alt="tailgrids"
                  class="h-16"
                  height="60"
                />
              </div>
              <p class="font-medium text-lg text-body-color mb-8">
                “If you want something done efficiently and done effectively,
                rest assured that Christina Campo will do it. I’ve had the
                pleasure of working with her in various capacities and have
                always been impressed by her ability – in any given situation –
                to immediately take the initiative and deliver the perfect copy
                before deadline. A self-starter, a team-player and a ray of
                sunshine, I couldn’t recommend her more highly.”
              </p>
              <div class="flex items-center">
                <div
                  class="max-w-[60px] w-full h-[60px] rounded-full overflow-hidden mr-3"
                >
                  <img
                    src="../assets/images/testimonial/bex.webp"
                    alt="image"
                    class="w-full"
                    height="60"
                    width="60"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-base text-black mb-1">
                    Bex Shapiro
                  </h3>
                  <p class="text-sm text-body-color">
                    Senior Editorial Manager, Intrepid Travel
                  </p>
                </div>
              </div>
              <div class="absolute bottom-8 right-8">
                <svg
                  width="51"
                  height="29"
                  viewBox="0 0 51 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.15">
                    <path
                      d="M12.4311 0.00142075C7.14984 -0.0798293 2.35609 3.33267 1.21859 7.96392C0.568593 10.8077 1.13734 13.6514 2.84359 15.9264C4.63109 18.3639 7.39359 19.9077 10.4811 20.3139L13.3248 27.3014C13.6498 28.0327 14.3811 28.5202 15.1936 28.5202C16.0061 28.5202 16.7373 28.0327 17.0623 27.3014C17.5498 26.0827 18.1186 24.7827 18.6873 23.5639C20.0686 20.4764 21.4498 17.3077 22.5061 14.0577C23.6436 10.6452 23.1561 6.98892 21.2061 4.22642C19.2561 1.54517 16.1686 0.0826707 12.4311 0.00142075ZM19.8248 13.2452C18.7686 16.3327 17.3873 19.5014 16.0873 22.5077C15.8436 23.1577 15.5186 23.7264 15.2748 24.3764L12.5123 17.7139L11.6186 17.6327C9.01859 17.4702 6.58109 16.1702 5.19984 14.3014C3.98109 12.6764 3.57484 10.6452 4.06234 8.69517C4.87484 5.36392 8.36859 2.92642 12.3498 2.92642H12.4311C15.1936 2.92642 17.4686 4.06392 18.9311 6.01392C20.3123 7.96392 20.6373 10.7264 19.8248 13.2452Z"
                      fill="#4A6CF7"
                    />
                    <path
                      d="M49.0747 4.30772C47.1247 1.54522 44.0372 0.00146484 40.2997 0.00146484C40.2185 0.00146484 40.2185 0.00146484 40.1372 0.00146484C34.9372 0.00146484 30.2247 3.41397 29.0872 7.96397C28.4372 10.8077 29.006 13.6515 30.7122 16.0077C32.4997 18.4452 35.2622 19.989 38.3497 20.3952L41.1935 27.3827C41.5185 28.114 42.2497 28.6015 43.0622 28.6015C43.8747 28.6015 44.606 28.114 44.931 27.3827C45.4185 26.164 45.9872 24.864 46.556 23.6452C47.9372 20.5577 49.3185 17.389 50.3747 14.139C51.5122 10.8077 51.0247 7.07022 49.0747 4.30772ZM47.6935 13.2452C46.6372 16.3327 45.256 19.5015 43.956 22.5077C43.7122 23.1577 43.3872 23.7265 43.1435 24.3765L40.381 17.714L39.4872 17.6327C36.8872 17.4702 34.4497 16.1702 33.0685 14.3015C31.8497 12.6765 31.4435 10.6452 31.931 8.61397C32.7435 5.28272 36.2372 2.84521 40.2185 2.84521H40.2997C43.0622 2.84521 45.3372 3.98272 46.7997 5.93272C48.181 7.96397 48.506 10.7265 47.6935 13.2452Z"
                      fill="#4A6CF7"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4">
            <div
              class="bg-white rounded-xl relative overflow-hidden px-7 sm:px-10 p-10 shadow-testimonial mb-10"
            >
              <div class="mb-5">
                <img
                  src="../assets/images/testimonial/gal.webp"
                  alt="ayroui"
                  class="h-7"
                />
              </div>
              <p class="font-medium text-lg text-body-color mb-8">
                “It was a pleasure working with Christina! She is a creative
                writer and efficient in her turnaround. Would recommend her to
                any client.”
              </p>
              <div class="flex items-center">
                <div
                  class="max-w-[60px] w-full h-[60px] rounded-full overflow-hidden mr-3"
                >
                  <img
                    src="../assets/images/testimonial/paige.webp"
                    alt="image"
                    height="60"
                    width="60"
                    class="w-full"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-base text-black mb-1">
                    Paige Calletti
                  </h3>
                  <p class="text-sm text-body-color">GAL Aerospace</p>
                </div>
              </div>
              <div class="absolute bottom-8 right-8">
                <svg
                  width="51"
                  height="29"
                  viewBox="0 0 51 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.15">
                    <path
                      d="M12.4311 0.00142075C7.14984 -0.0798293 2.35609 3.33267 1.21859 7.96392C0.568593 10.8077 1.13734 13.6514 2.84359 15.9264C4.63109 18.3639 7.39359 19.9077 10.4811 20.3139L13.3248 27.3014C13.6498 28.0327 14.3811 28.5202 15.1936 28.5202C16.0061 28.5202 16.7373 28.0327 17.0623 27.3014C17.5498 26.0827 18.1186 24.7827 18.6873 23.5639C20.0686 20.4764 21.4498 17.3077 22.5061 14.0577C23.6436 10.6452 23.1561 6.98892 21.2061 4.22642C19.2561 1.54517 16.1686 0.0826707 12.4311 0.00142075ZM19.8248 13.2452C18.7686 16.3327 17.3873 19.5014 16.0873 22.5077C15.8436 23.1577 15.5186 23.7264 15.2748 24.3764L12.5123 17.7139L11.6186 17.6327C9.01859 17.4702 6.58109 16.1702 5.19984 14.3014C3.98109 12.6764 3.57484 10.6452 4.06234 8.69517C4.87484 5.36392 8.36859 2.92642 12.3498 2.92642H12.4311C15.1936 2.92642 17.4686 4.06392 18.9311 6.01392C20.3123 7.96392 20.6373 10.7264 19.8248 13.2452Z"
                      fill="#4A6CF7"
                    />
                    <path
                      d="M49.0747 4.30772C47.1247 1.54522 44.0372 0.00146484 40.2997 0.00146484C40.2185 0.00146484 40.2185 0.00146484 40.1372 0.00146484C34.9372 0.00146484 30.2247 3.41397 29.0872 7.96397C28.4372 10.8077 29.006 13.6515 30.7122 16.0077C32.4997 18.4452 35.2622 19.989 38.3497 20.3952L41.1935 27.3827C41.5185 28.114 42.2497 28.6015 43.0622 28.6015C43.8747 28.6015 44.606 28.114 44.931 27.3827C45.4185 26.164 45.9872 24.864 46.556 23.6452C47.9372 20.5577 49.3185 17.389 50.3747 14.139C51.5122 10.8077 51.0247 7.07022 49.0747 4.30772ZM47.6935 13.2452C46.6372 16.3327 45.256 19.5015 43.956 22.5077C43.7122 23.1577 43.3872 23.7265 43.1435 24.3765L40.381 17.714L39.4872 17.6327C36.8872 17.4702 34.4497 16.1702 33.0685 14.3015C31.8497 12.6765 31.4435 10.6452 31.931 8.61397C32.7435 5.28272 36.2372 2.84521 40.2185 2.84521H40.2997C43.0622 2.84521 45.3372 3.98272 46.7997 5.93272C48.181 7.96397 48.506 10.7265 47.6935 13.2452Z"
                      fill="#4A6CF7"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog" class="pt-[60px] pb-20 bg-[#f8f9ff]">
      <div class="container">
        <div class="flex flex-wrap mx-[-16px]">
          <div class="w-full px-4">
            <div class="max-w-[600px] mx-auto text-center mb-[50px]">
              <span class="font-semibold text-lg text-primary block mb-2">
                Recent Posts
              </span>
              <h2
                class="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5"
              >
                Blogs and Bylines
              </h2>
              <p class="font-medium text-lg text-body-color">
                While copywriting is my bread and butter, long-form writing is
                my jam. See what I did there? This is what happens when you give
                me more than 140 characters to play with. I go on fun tangents,
                (filled with food puns, apparently). Enjoy it? Read a few of my
                favourite blogs and articles I’ve written below.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/3 px-4">
            <div class="bg-white rounded-xl overflow-hidden mb-10 shadow-blog">
              <a
                href="https://www.peregrineadventures.com/blog/20/09/2018/life-lessons-greece-cruising/"
                class="block"
              >
                <img
                  src="../assets/images/news/cruise.webp"
                  alt="image"
                  class="object-cover w-full h-[200px]"
                />
              </a>
              <div class="py-8 px-6 sm:px-11">
                <h3>
                  <a
                    href="https://www.peregrineadventures.com/blog/20/09/2018/life-lessons-greece-cruising/"
                    class="font-semibold text-xl text-black hover:text-primary block mb-3"
                  >
                    6 life lessons I learned while cruising the Greek Islands
                  </a>
                </h3>
                <p class="font-medium text-body-color text-base mb-4">
                  I didn’t realize I would be learning life lessons, but travel
                  has a funny way of teaching you things when you least expect
                  it.
                </p>
                <a
                  href="https://www.peregrineadventures.com/blog/20/09/2018/life-lessons-greece-cruising/"
                  class="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
                >
                  Peregrine Wanderer Blog
                </a>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4">
            <div class="bg-white rounded-xl overflow-hidden mb-10 shadow-blog">
              <a
                href="https://www.intrepidtravel.com/adventures/maasai-people-highlight-kenya/"
                class="block"
              >
                <img
                  src="../assets/images/news/maasai.webp"
                  alt="image"
                  class="object-cover w-full h-[200px]"
                />
              </a>
              <div class="py-8 px-6 sm:px-11">
                <h3>
                  <a
                    href="https://www.intrepidtravel.com/adventures/maasai-people-highlight-kenya/"
                    class="font-semibold text-xl text-black hover:text-primary block mb-3"
                  >
                    Why a visit with the Maasai was the highlight of my Kenya
                    trip
                  </a>
                </h3>
                <p class="font-medium text-body-color text-base mb-4">
                  "Do you think they eat watermelon?” My group was chowing down
                  on a snack while we awaited our hosts, the Maasai people, to
                  show us to their village.
                </p>
                <a
                  href="https://www.intrepidtravel.com/adventures/maasai-people-highlight-kenya/"
                  class="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
                >
                  The Journal By Intrepid Travel
                </a>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4">
            <div class="bg-white rounded-xl overflow-hidden mb-10 shadow-blog">
              <a
                href="https://www.huffingtonpost.ca/christina-campo/sorority-girls_b_6027846.html"
                class="block"
              >
                <img
                  src="../assets/images/news/sorority.webp"
                  alt="image"
                  class="object-cover w-full h-[200px]"
                />
              </a>
              <div class="py-8 px-6 sm:px-11">
                <h3>
                  <a
                    href="https://www.huffingtonpost.ca/christina-campo/sorority-girls_b_6027846.html"
                    class="font-semibold text-xl text-black hover:text-primary block mb-3"
                  >
                    Why every sorority stereotype you heard is wrong
                  </a>
                </h3>
                <p class="font-medium text-body-color text-base mb-4">
                  I went to my first sorority info session in a plaid shirt, old
                  jeans, Converse, and no make-up; I wanted to make a statement
                  that said I was not a sorority girl.
                </p>
                <a
                  href="https://www.huffingtonpost.ca/christina-campo/sorority-girls_b_6027846.html"
                  class="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
                >
                  The Huffington Post Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-[60px]">
      <div class="container">
        <div class="flex flex-wrap mx-[-16px]">
          <div class="w-full px-4">
            <div class="max-w-[600px] mx-auto text-center mb-[50px]">
              <span class="font-semibold text-lg text-primary block mb-2">
                Connect With Me
              </span>
              <h2
                class="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5"
              >
                Have a project in mind?
              </h2>
            </div>
          </div>
        </div>
        <div class="flex justify-center -mx-4">
          <div class="w-full lg:w-9/12 px-4">
            <form>
              <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/2 px-4">
                  <div class="mb-6">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      class="input-field"
                      v-model="name"
                    />
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-4">
                  <div class="mb-6">
                    <input
                      type="text"
                      placeholder="Company (Optional)"
                      class="input-field"
                      v-model="company"
                    />
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-4">
                  <div class="mb-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      class="input-field"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-4">
                  <div class="mb-6">
                    <input
                      type="text"
                      placeholder="Phone number"
                      class="input-field"
                      v-model="phoneNumber"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="mb-6">
                    <textarea
                      rows="4"
                      placeholder="Tell me about your project"
                      class="input-field resize-none"
                      v-model="projectDetails"
                    ></textarea>
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="pt-4 text-center">
                    <a href="#contact">
                      <button
                        @click="sendContactForm"
                        class="inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:shadow-signUp hover:bg-opacity-90"
                      >
                        Contact Me
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-black py-16 relative z-10">
      <div class="container">
        <div>
          <p class="font-medium text-base text-body-color text-center">
            Made with ❤️ in Berlin
          </p>
        </div>
      </div>

      <div
        class="absolute left-0 bottom-0 -z-1"
        aria-label="shape"
        name="shape"
      >
        <span class="hidden">shape</span>
        <svg
          width="143"
          height="138"
          viewBox="0 0 143 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="118"
            r="101"
            stroke="url(#paint0_linear_52:83)"
            stroke-width="34"
          />
          <defs>
            <linearGradient
              id="paint0_linear_52:83"
              x1="-12.7969"
              y1="-37.3359"
              x2="99.2109"
              y2="173.773"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7" />
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="absolute right-3 top-3 -z-1" aria-label="shape" name="shape">
        <span class="hidden">shape</span>
        <svg
          width="61"
          height="77"
          viewBox="0 0 61 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle
              cx="45.0001"
              cy="1.66667"
              r="1.66667"
              transform="rotate(90 45.0001 1.66667)"
              fill="white"
            />
            <circle
              cx="16.0001"
              cy="1.66667"
              r="1.66667"
              transform="rotate(90 16.0001 1.66667)"
              fill="white"
            />
            <circle
              cx="59.0001"
              cy="1.66667"
              r="1.66667"
              transform="rotate(90 59.0001 1.66667)"
              fill="white"
            />
            <circle
              cx="30.6668"
              cy="1.66667"
              r="1.66667"
              transform="rotate(90 30.6668 1.66667)"
              fill="white"
            />
            <circle
              cx="1.66683"
              cy="1.66667"
              r="1.66667"
              transform="rotate(90 1.66683 1.66667)"
              fill="white"
            />
            <circle
              cx="45.0001"
              cy="16.3332"
              r="1.66667"
              transform="rotate(90 45.0001 16.3332)"
              fill="white"
            />
            <circle
              cx="16.0001"
              cy="16.3332"
              r="1.66667"
              transform="rotate(90 16.0001 16.3332)"
              fill="white"
            />
            <circle
              cx="59.0001"
              cy="16.3332"
              r="1.66667"
              transform="rotate(90 59.0001 16.3332)"
              fill="white"
            />
            <circle
              cx="30.6668"
              cy="16.3332"
              r="1.66667"
              transform="rotate(90 30.6668 16.3332)"
              fill="white"
            />
            <circle
              cx="1.66683"
              cy="16.3332"
              r="1.66667"
              transform="rotate(90 1.66683 16.3332)"
              fill="white"
            />
            <circle
              cx="45.0001"
              cy="31.0002"
              r="1.66667"
              transform="rotate(90 45.0001 31.0002)"
              fill="white"
            />
            <circle
              cx="45.0001"
              cy="74.6667"
              r="1.66667"
              transform="rotate(90 45.0001 74.6667)"
              fill="white"
            />
            <circle
              cx="16.0001"
              cy="31.0002"
              r="1.66667"
              transform="rotate(90 16.0001 31.0002)"
              fill="white"
            />
            <circle
              cx="16.0001"
              cy="74.6667"
              r="1.66667"
              transform="rotate(90 16.0001 74.6667)"
              fill="white"
            />
            <circle
              cx="59.0001"
              cy="31.0002"
              r="1.66667"
              transform="rotate(90 59.0001 31.0002)"
              fill="white"
            />
            <circle
              cx="59.0001"
              cy="74.6667"
              r="1.66667"
              transform="rotate(90 59.0001 74.6667)"
              fill="white"
            />
            <circle
              cx="30.6668"
              cy="31.0002"
              r="1.66667"
              transform="rotate(90 30.6668 31.0002)"
              fill="white"
            />
            <circle
              cx="30.6668"
              cy="74.6667"
              r="1.66667"
              transform="rotate(90 30.6668 74.6667)"
              fill="white"
            />
            <circle
              cx="1.66683"
              cy="31.0002"
              r="1.66667"
              transform="rotate(90 1.66683 31.0002)"
              fill="white"
            />
            <circle
              cx="1.66683"
              cy="74.6667"
              r="1.66667"
              transform="rotate(90 1.66683 74.6667)"
              fill="white"
            />
            <circle
              cx="45.0001"
              cy="45.6667"
              r="1.66667"
              transform="rotate(90 45.0001 45.6667)"
              fill="white"
            />
            <circle
              cx="16.0001"
              cy="45.6667"
              r="1.66667"
              transform="rotate(90 16.0001 45.6667)"
              fill="white"
            />
            <circle
              cx="59.0001"
              cy="45.6667"
              r="1.66667"
              transform="rotate(90 59.0001 45.6667)"
              fill="white"
            />
            <circle
              cx="30.6668"
              cy="45.6667"
              r="1.66667"
              transform="rotate(90 30.6668 45.6667)"
              fill="white"
            />
            <circle
              cx="1.66683"
              cy="45.6667"
              r="1.66667"
              transform="rotate(90 1.66683 45.6667)"
              fill="white"
            />
            <circle
              cx="45.0001"
              cy="60.3332"
              r="1.66667"
              transform="rotate(90 45.0001 60.3332)"
              fill="white"
            />
            <circle
              cx="16.0001"
              cy="60.3332"
              r="1.66667"
              transform="rotate(90 16.0001 60.3332)"
              fill="white"
            />
            <circle
              cx="59.0001"
              cy="60.3332"
              r="1.66667"
              transform="rotate(90 59.0001 60.3332)"
              fill="white"
            />
            <circle
              cx="30.6668"
              cy="60.3332"
              r="1.66667"
              transform="rotate(90 30.6668 60.3332)"
              fill="white"
            />
            <circle
              cx="1.66683"
              cy="60.3332"
              r="1.66667"
              transform="rotate(90 1.66683 60.3332)"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </footer>
    <a
      href="javascript:void(0)"
      class="hidden items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-8 left-auto z-[999] hover:shadow-signUp transition duration-300 back-to-top"
    >
      <span
        class="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]"
      ></span>
    </a>
  </div>
</template>
