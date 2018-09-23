<template>
  <div class="modal fade" :id="idModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Detail Task: {{ taskdetail.title }} for {{ taskdetail.person }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
              <b>Task Description :</b>
              <p class="text-muted">{{ taskdetail.desc }}</p>
          </div>
          <div class="form-group">
              <b>Point :</b>
              <p class="text-muted">{{ taskdetail.point }}</p>
          </div>
          <div class="form-group">
              <b>Status :</b>
              <p class="text-muted">{{ taskdetail.category }} </p>
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-dark" :class="changeBackgroundPrevButton()" data-dismiss="modal" v-if="prevButton" v-on:click="prevStatus">{{ prevButton }}</button>
            <button type="button" class="btn btn-dark" data-dismiss="modal" v-on:click="deleteTask">Delete</button>
            <button type="button" class="btn btn-dark" :class="changeBackgroundNextButton()" data-dismiss="modal" v-if="nextButton" v-on:click="nextStatus">{{ nextButton }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../config.js'

export default {
  props: [ 'taskdetail' ],
  data() {
    return {
      nextButton: '',
      prevButton: '',
      idModal: this.taskdetail.id
    }
  },
  methods: {
    deleteTask: function() {
      db.ref(`/${this.taskdetail.id}`).remove()
    },
    prevStatus: function() {
      db.ref(`/${this.taskdetail.id}`).remove()
      db.ref('/').push({
        title: this.taskdetail.title,
        desc: this.taskdetail.desc,
        point: this.taskdetail.point,
        person: this.taskdetail.person,
        category: this.prevButton
      })
    },
    nextStatus: function() {
      db.ref(`/${this.taskdetail.id}`).remove()
      db.ref('/').push({
        title: this.taskdetail.title,
        desc: this.taskdetail.desc,
        point: this.taskdetail.point,
        person: this.taskdetail.person,
        category: this.nextButton
      })
    },
    changeBackgroundNextButton: function() {
      if (this.taskdetail.category === 'Back-Log') {
        return 'bg-warning'
      } else if (this.taskdetail.category === 'To-Do') {
        return 'bg-primary'
      } else if (this.taskdetail.category === 'Doing') {
        return 'bg-success'
      }
    },
    changeBackgroundPrevButton: function() {
      if (this.taskdetail.category === 'To-Do') {
        return 'bg-danger'
      } else if (this.taskdetail.category === 'Doing') {
        return 'bg-warning'
      } else if (this.taskdetail.category === 'Done') {
        return 'bg-primary'
      }
    }
  },
  created() {
    if (this.taskdetail.category === 'Back-Log') {
      this.nextButton = 'To-Do'
    } else if (this.taskdetail.category === 'To-Do') {
      this.nextButton = 'Doing'
      this.prevButton = 'Back-Log'
    } else if (this.taskdetail.category === 'Doing') {
      this.nextButton = 'Done'
      this.prevButton = 'To-Do'
    } else if (this.taskdetail.category === 'Done') {
      this.prevButton = 'Doing'
    }
  }
}
</script>

<style>

</style>
