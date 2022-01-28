<template>
    <div class="absolute top-0 h-full w-full bg-gray-200" :class="{hidden: !picShow}">
        <div class="h-48">
              <img src="https://img.icons8.com/windows/32/000000/macos-close.png"
              class="float-right cursor-pointer z-50 mt-36"
              @click.prevent="togglePic"/>
        </div>
        <div>
          <img src="./soccer.png" class="h-full w-full">
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'picshow',
  computed: {
    ...mapState(['picShow']),
  },
  methods: {
    ...mapMutations(['togglePic']),
  },
};
</script>
