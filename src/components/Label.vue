<template>
  <div class="relative h-full w-4/12 bg-blue-400 inline-block text-white font-serif" >
    <!-- add-in picture and some details -->
    <div class="h-95">
      <img src="./picture.png" class="mx-auto mt-4 w-7/12">
      <div class="text-center m-4 text-xl leading-8 font-bold" >NGUYỄN HẢI PHONG</div>
      <div class="text-center m-4 text-xl leading-8 font-bold">SINH VIÊN ĐẠI HỌC</div>
    </div>
    <!-- Loop the personal information -->
    <div class="ml-1">
      <div v-for="information in informations" :key="information">
        <img :src="`${information.picLinks}`" class="h-5 w-5 inline-block">
        <div v-if="information.flags === true" class="inline-block">
          <a :href="`${information.htmlLinks}`" :class="`${information.mouseOn}`">
          {{ information.values }}
          </a>
        </div>
        <div v-else class="inline-block">
        {{ information.values }}
        </div>
      </div>
    </div>
    <!-- Loop the skills information -->
    <div class="ml-1">
      <div  v-for="skill in skills" :key="skill">
        <div class="ml-4 text-2xl leading-10 font-bold">{{ skill.values }}</div>
        <div class="leading-normal text-sm" v-for="detail in skill.details"
        :key="detail">
          <img src="https://img.icons8.com/material-two-tone/24/000000/double-right.png" class="h-3 w-3 inline-block"/> {{ detail.details_name }}</div>
      </div>
    </div>
    <!-- onclickButton to see the image on application -->
    <div class="w-10/12 mx-auto">
      <button class="relative p-2 mx-auto text-sx rounded-lg bg-blue-600
      transition ease-in-out delay-150 bg-blue-500
      hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
      @click.prevent="togglePic">
        Bấm vào đây để xem ảnh bóng đá
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Label',
  props: ['skills', 'informations'],
  methods: {
    ...mapMutations(['togglePic']),
  },
};
</script>
