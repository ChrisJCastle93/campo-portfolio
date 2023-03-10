<template>
  <section id="about" class="pt-[145px] pb-[120px] relative z-10">
    <div class="container">
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full lg:w-1/2 xl:w-7/12 px-4 mb-8 lg:mb-0">
          <span class="font-bold text-primary text-lg md:text-xl mb-3">
                {{ $t('about_heading') }}
            </span>
          <h2
            class="max-w-[400px] font-bold text-black text-3xl sm:text-4xl md:text-[45px] leading-tight sm:leading-tight md:leading-tight mb-5"
          >
                {{ $t('about_subheading') }}
            </h2>
          <p class="max-w-[570px] font-medium text-base text-body-color">
                {{ $t('about_body') }}

          </p>
        </div>
        <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
          <h3 class="font-semibold text-primary text-2xl md:text-3xl mb-6">
                {{ $t('about_heading_2') }}
            </h3>
          <p class="font-medium text-base text-body-color mb-10" v-html="$t('about_body_2')">
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
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutSection',
});
</script>
