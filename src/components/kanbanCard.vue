<template>
  <div class="col-lg-3 col-sm-6 item">
    <div class="card h-100">
      <div class="card-header" :class="changeBackground()">
        <label class="text-white"><b>{{ cards.type }}</b></label>
      </div>    
      <div class="card-body">
          <TaskCard v-for="(task,index) in cards.tasks" :key="index" v-bind:task="task"></TaskCard>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from './taskCard.vue'

export default {
  components: {
    TaskCard
  },
  props: [ 'cards' ],
  methods: {
    changeBackground: function() {
      if (this.cards.type === 'Back-Log') {
        return 'bg-danger'
      } else if (this.cards.type === 'To-Do') {
        return 'bg-warning'
      } else if (this.cards.type === 'Doing') {
        return 'bg-primary'
      } else if (this.cards.type === 'Done') {
        return 'bg-success'
      }
    }
  }
}
</script>

<style>

</style>