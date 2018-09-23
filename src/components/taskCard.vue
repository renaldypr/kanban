<template>
  <div>
    <div class="card mb-3">
      <div class="card-header">
        <label>{{ task.title }}</label>
      </div>
      <div class="card-body">
        <p>Point: {{ task.point }}</p>
        <p>Assigned To: {{ task.person }}</p>
      </div>
      <button type="button" class="btn btn-secondary" data-toggle="modal" v-bind:data-target="idModal">Show Details</button>
    </div>

    <TaskModal v-bind:taskdetail="task"></TaskModal>
  </div>
</template>

<script>
import TaskModal from './taskModal.vue'

export default {
  components: {
    TaskModal
  },
  data () {
    return {
      idModal: `#${this.task.id}`
    }
  },
  props: [ 'task' ]
}
</script>

<style>

</style>
