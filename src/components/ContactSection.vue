<template>
  <section id="contact" class="py-[60px]">
    <div class="container">
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full px-4">
          <div class="max-w-[600px] mx-auto text-center mb-[50px]">
            <span class="font-semibold text-lg text-primary block mb-2">
              {{ $t('contact_title') }}
            </span>
            <h2 class="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">
              {{ $t('contact_heading') }}
            </h2>
          </div>
        </div>
      </div>
      <div class="flex justify-center -mx-4">
        <div class="w-full lg:w-9/12 px-4">
          <form method="POST" action="https://formspree.io/f/mgebewjd">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full md:w-1/2 px-4">
                <div class="mb-6">
                  <input name="name" type="text" placeholder="Enter your name" class="input-field" v-model="name"
                    required />
                </div>
              </div>
              <div class="w-full md:w-1/2 px-4">
                <div class="mb-6">
                  <input name="company" type="text" placeholder="Company (Optional)" class="input-field"
                    v-model="company" />
                </div>
              </div>
              <div class="w-full md:w-1/2 px-4">
                <div class="mb-6">
                  <input name="email" type="email" placeholder="Enter your email" class="input-field" v-model="email"
                    required />
                </div>
              </div>
              <div class="w-full md:w-1/2 px-4">
                <div class="mb-6">
                  <input name="phone" type="text" placeholder="Phone number" class="input-field" v-model="phoneNumber" />
                </div>
              </div>
              <div class="w-full px-4">
                <div class="mb-6">
                  <textarea rows="4" name="projectDetails" placeholder="Tell me about your project"
                    class="input-field resize-none" v-model="projectDetails" required></textarea>
                </div>
              </div>
              <div class="w-full px-4">
                <div class="pt-4 text-center">
                  <button type="submit" @submit="sendContactForm"
                    class="inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:shadow-signUp hover:bg-opacity-90">
                    {{ $t('contact_cta') }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      company: '',
      projectDetails: '',
    };
  },
};
</script>
