<template>
  <div class="relative float-right h-fit bg-white w-8/12 font-serif">
    <!-- loop background informations -->
    <div class="m-4" v-for="background in backgrounds" :key="background">
      <div class="text-2xl leading-10 font-bold text-blue-400 ml-4">{{ background.name }}</div>
      <div class="rounded-lg bg-gray-200">
        <!-- loop details of background informations -->
        <div v-for="detail in background.details" :key="detail" class="p-2 text-sm">
          <div class="font-bold text-blue-400 w-7/12 inline-block">{{ detail.places }}</div>
          <div class="font-bold text-blue-400 float-right">{{ detail.times }}</div>
          <div class="font-bold text-blue-400">{{ detail.positions }}</div>
          <div v-for="property in detail.properties" :key="property">
            <img src="https://img.icons8.com/ios-filled/50/000000/dot-logo.png" class="h-3 w-3 inline-block"/>
            {{ property.property_value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['backgrounds'],
};
</script>
