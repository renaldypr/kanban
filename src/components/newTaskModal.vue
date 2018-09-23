<template>
  <div class="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Task</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
              Title
              <input id="title" type="text" class="form-control" placeholder="Task Title" v-model="titleInput">
          </div>
          <div class="form-group">
              Description
              <textarea id="description" class="form-control" placeholder="Task Short Description" v-model="descInput"></textarea>
          </div>
          <div class="form-group">
              Point
              <input id="point" type="number" class="form-control" placeholder="0" v-model="pointInput">
          </div>
          <div class="form-group">
              Assigned To
              <input id="assignedTo" type="text" class="form-control" placeholder="Assigned To" v-model="personInput">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" v-on:click="addTask">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../config.js'

export default {
  data() {
    return {
      titleInput: '',
      descInput: '',
      pointInput: '',
      personInput: ''
    }
  },
  methods: {
    addTask: function() {
      db.ref('/').push({
        title: this.titleInput,
        desc: this.descInput,
        point: this.pointInput,
        person: this.personInput,
        category: 'Back-Log'
      })
      this.titleInput = ''
      this.descInput = ''
      this.pointInput = ''
      this.personInput = ''
    }
  }
}
</script>

<style>

</style>
