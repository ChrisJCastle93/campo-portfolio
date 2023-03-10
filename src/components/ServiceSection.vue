<template>
  <section id="services">
    <div class="container">
      <div class="pt-[120px] pb-[90px] border-t border-[#E9ECF8]">
        <div class="flex flex-wrap mx-[-16px]">
          <div class="w-full px-4">
            <div class="max-w-[600px] mx-auto text-center mb-[70px]">
              <span class="font-semibold text-lg text-primary block mb-2">
                {{ $t('offer_heading') }}
              </span>
              <h2 class="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">
                {{ $t('offer_subheading') }}
              </h2>
              <p class="font-medium text-lg text-body-color">
                {{ $t('offer_body') }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap mx-[-16px]">
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div
              class="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
              <div
                class="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-primary">
                <img loading="lazy" src="@/assets/images/services/copywriting.webp" alt="SEO" width="35" height="35" />
              </div>
              <h3 class="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3">
                {{ $t('offer_1_heading') }}
              </h3>
              <p class="font-medium text-body-color group-hover:text-white leading-relaxed text-sm">
                {{ $t('offer_1_body') }}
              </p>
              <div>
                <span class="absolute top-0 right-0 -z-1">
                  <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white" />
                    <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
                  </svg>
                </span>
                <span class="absolute bottom-1 left-1 -z-1">
                  <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white" />
                    <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white" />
                    <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white" />
                    <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white" />
                    <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white" />
                    <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white" />
                    <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white" />
                    <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white" />
                    <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white" />
                    <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white" />
                    <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white" />
                    <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div
              class="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
              <div
                class="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-primary">
                <img loading="lazy" src="@/assets/images/services/blog.webp" alt="blog" width="35" height="35" />
              </div>
              <h3 class="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3">
                {{ $t('offer_2_heading') }}
              </h3>
              <p class="font-medium text-body-color group-hover:text-white leading-relaxed text-sm">
                {{ $t('offer_2_body') }}
              </p>
              <div>
                <span class="absolute top-0 right-0 -z-1">
                  <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white" />
                    <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
                  </svg>
                </span>
                <span class="absolute bottom-1 left-1 -z-1">
                  <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white" />
                    <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white" />
                    <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white" />
                    <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white" />
                    <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white" />
                    <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white" />
                    <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white" />
                    <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white" />
                    <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white" />
                    <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white" />
                    <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white" />
                    <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div
              class="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
              <div
                class="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-primary">
                <img loading="lazy" src="@/assets/images/services/strategy.webp" alt="strategy" width="35" height="35" />
              </div>
              <h3 class="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3">
                {{ $t('offer_3_heading') }}
              </h3>
              <p class="font-medium text-body-color group-hover:text-white leading-relaxed text-sm">
                {{ $t('offer_3_body') }}
              </p>
              <div>
                <span class="absolute top-0 right-0 -z-1">
                  <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white" />
                    <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
                  </svg>
                </span>
                <span class="absolute bottom-1 left-1 -z-1">
                  <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white" />
                    <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white" />
                    <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white" />
                    <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white" />
                    <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white" />
                    <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white" />
                    <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white" />
                    <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white" />
                    <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white" />
                    <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white" />
                    <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white" />
                    <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div
              class="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
              <div
                class="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-primary">
                <img loading="lazy" src="@/assets/images/services/seo.webp" alt="SEO" width="35" height="35" />
              </div>
              <h3 class="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3">
                {{ $t('offer_4_heading') }}
              </h3>
              <p class="font-medium text-body-color group-hover:text-white leading-relaxed text-sm">
                {{ $t('offer_4_body') }}
              </p>
              <div>
                <span class="absolute top-0 right-0 -z-1">
                  <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white" />
                    <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
                  </svg>
                </span>
                <span class="absolute bottom-1 left-1 -z-1">
                  <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white" />
                    <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white" />
                    <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white" />
                    <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white" />
                    <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white" />
                    <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white" />
                    <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white" />
                    <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white" />
                    <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white" />
                    <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white" />
                    <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white" />
                    <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceSection',
});
</script>
