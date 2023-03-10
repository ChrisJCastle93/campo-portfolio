<script>
import { defineAsyncComponent } from 'vue';
import HeroSection from '../components/HeroSection.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      homeData: {},
    };
  },
  components: {
    HeroSection,
    AboutSection: defineAsyncComponent(() => import('../components/AboutSection.vue')),
    ServiceSection: defineAsyncComponent(() => import('../components/ServiceSection.vue')),
    ProjectsSection: defineAsyncComponent(() => import('../components/ProjectsSection.vue')),
    TestimonialSection: defineAsyncComponent(() => import('../components/TestimonialSection.vue')),
    BlogSection: defineAsyncComponent(() => import('../components/BlogSection.vue')),
    ContactSection: defineAsyncComponent(() => import('../components/ContactSection.vue')),
  },
};
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProjectsSection />
    <TestimonialSection />
    <BlogSection />
    <ContactSection />
  </div>
</template>
