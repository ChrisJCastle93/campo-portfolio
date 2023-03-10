<template>
  <section id="blog" class="pt-[60px] pb-20 bg-[#f8f9ff]">
    <div class="container">
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full px-4">
          <div class="max-w-[600px] mx-auto text-center mb-[50px]">
            <span class="font-semibold text-lg text-primary block mb-2">
              {{ $t('blogs_title') }}
            </span>
            <h2 class="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">
              {{ $t('blogs_heading') }}
            </h2>
            <p class="font-medium text-lg text-body-color">
              {{ $t('blogs_body') }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/3 px-4">
          <div class="bg-white rounded-xl overflow-hidden mb-10 shadow-blog">
            <a href="https://www.peregrineadventures.com/blog/20/09/2018/life-lessons-greece-cruising/" class="block">
              <img loading="lazy" src="@/assets/images/news/cruise.webp" alt="image"
                class="object-cover w-full h-[200px]" />
            </a>
            <div class="py-8 px-6 sm:px-11">
              <h3>
                <a href="https://www.peregrineadventures.com/blog/20/09/2018/life-lessons-greece-cruising/"
                  class="font-semibold text-xl text-black hover:text-primary block mb-3">
                  6 life lessons I learned while cruising the Greek Islands
                </a>
              </h3>
              <p class="font-medium text-body-color text-base mb-4">
                I didn’t realize I would be learning life lessons, but travel
                has a funny way of teaching you things when you least expect it.
              </p>
              <a href="https://www.peregrineadventures.com/blog/20/09/2018/life-lessons-greece-cruising/"
                class="font-medium text-sm text-black underline hover:text-primary hover:no-underline">
                Peregrine Wanderer Blog
              </a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 px-4">
          <div class="bg-white rounded-xl overflow-hidden mb-10 shadow-blog">
            <a href="https://www.intrepidtravel.com/adventures/maasai-people-highlight-kenya/" class="block">
              <img loading="lazy" src="@/assets/images/news/maasai.webp" alt="image"
                class="object-cover w-full h-[200px]" />
            </a>
            <div class="py-8 px-6 sm:px-11">
              <h3>
                <a href="https://www.intrepidtravel.com/adventures/maasai-people-highlight-kenya/"
                  class="font-semibold text-xl text-black hover:text-primary block mb-3">
                  Why a visit with the Maasai was the highlight of my Kenya trip
                </a>
              </h3>
              <p class="font-medium text-body-color text-base mb-4">
                "Do you think they eat watermelon?” My group was chowing down on
                a snack while we awaited our hosts, the Maasai people, to show
                us to their village.
              </p>
              <a href="https://www.intrepidtravel.com/adventures/maasai-people-highlight-kenya/"
                class="font-medium text-sm text-black underline hover:text-primary hover:no-underline">
                The Journal By Intrepid Travel
              </a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 px-4">
          <div class="bg-white rounded-xl overflow-hidden mb-10 shadow-blog">
            <a href="https://www.huffingtonpost.ca/christina-campo/sorority-girls_b_6027846.html" class="block">
              <img loading="lazy" src="@/assets/images/news/sorority.webp" alt="image"
                class="object-cover w-full h-[200px]" />
            </a>
            <div class="py-8 px-6 sm:px-11">
              <h3>
                <a href="https://www.huffingtonpost.ca/christina-campo/sorority-girls_b_6027846.html"
                  class="font-semibold text-xl text-black hover:text-primary block mb-3">
                  Why every sorority stereotype you heard is wrong
                </a>
              </h3>
              <p class="font-medium text-body-color text-base mb-4">
                I went to my first sorority info session in a plaid shirt, old
                jeans, Converse, and no make-up; I wanted to make a statement
                that said I was not a sorority girl.
              </p>
              <a href="https://www.huffingtonpost.ca/christina-campo/sorority-girls_b_6027846.html"
                class="font-medium text-sm text-black underline hover:text-primary hover:no-underline">
                The Huffington Post Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
};
</script>
