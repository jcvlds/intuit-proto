<template>
  <q-page class="fit row" style="padding-right: 05vw; padding-left: 05vw; padding-bottom: 05vh; padding-top: 7vh">
    <div class="col" style="overflow: auto;min-width: 100%">
    <q-scroll-area class="fit round-borders shadow-2"
          :thumb-style="{
            right: '4px',
            borderRadius: '5px',
            background: 'transparent',
            width: '10px',
            opacity: 1
          }"
          :delay="2000">

    <div class="fit q-gutter-y-md">
      <q-card bordered class="bg-white" style="width: 100%"><q-card-section>
      <div class="">
        <h5 class="text-accent q-my-none">Welcome Nicole Cunningham</h5>
      </div>

      <div class="column q-mt-none">
          <h6 class="text-grey-8 q-mt-lg q-mb-xs">Company:</h6>
          <!-- <p class="text-grey-8 text-body1 q-pl-sm" style="font-size: 1.5em">{{ users.goal }}</p> -->
      </div>
      </q-card-section></q-card>

      <q-card bordered class="bg-white q-mb-xl q-mt-lg" style="width: 100%"><q-card-section>
      <div class="column">
          <h6 class="text-grey-8 q-mt-sm q-mb-none">Progreso:</h6>
      </div>
      <div class="fit col-12 q-pt-none q-mt-none">
        <q-item-label header class="text-grey-9 text-body1" style="font-size: 1.2em">
          <!-- Peso Inicial: {{ users.weight }} lbs -->
          Peso Inicial:
        </q-item-label>
      </div>

      </q-card-section></q-card>

    </div>
    </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      users: {
      },
      separator: 'cell'
    }
  },
  computed: {
  },
  methods: {
  },
  components: {
    // 'weightLog': require('../components/WeightLog').default
  }
}
</script>

<style scoped>

</style>
