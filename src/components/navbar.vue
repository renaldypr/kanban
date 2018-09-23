<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">Kanban Board</a>
      <button class="btn btn-info my-2 my-sm-0" type="button" data-toggle="modal" data-target="#newTask">New Task</button>
    </nav>

    <NewTaskModal></NewTaskModal>
  </div>
</template>

<script>
import NewTaskModal from './newTaskModal.vue'

export default {
  components: {
    NewTaskModal
  }
}
</script>

<style>

</style>