<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-2xl">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div class="px-8 sm:px-12">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="font-bold text-black text-2xl py-4"
                        >{{ project.title }}
                      </DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative flex-1 px-8 sm:px-12">
                    <p class="font-semibold text-sm text-primary block py-4">
                      {{ project.subtitle }}
                    </p>
                    <p
                      class="font-base text-body-color leading-relaxed text-xs md:text-sm pt-4 pb-8 whitespace-pre-line"
                    >
                      {{ project.description }}
                    </p>
                    <ul
                      role="list"
                      class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8"
                    >
                      <li
                        v-for="content in project.content"
                        :key="content.src"
                        class="relative"
                      >
                        <div
                          class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                        >
                          <div
                            class="aspect-w-16 aspect-h-9"
                            v-if="content.type === 'video'"
                          >
                            <iframe
                              :src="content.src"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                          <img
                            v-if="content.type === 'image'"
                            :src="content.src"
                            alt=""
                            class="pointer-events-none object-cover group-hover:opacity-75"
                          />
                        </div>
                        <p
                          class="font-light text-body-color leading-relaxed text-sm py-4"
                        >
                          {{ content.caption }}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import "../utils/projects.json";

export default {
  name: "ProjectModal",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XMarkIcon,
  },
  props: ["project"],
  data() {
    return {
      open: false,
    };
  },
  watch: {
    project() {
      if (this.project) this.open = true;
    },
  },
};
</script>
