<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="container">
      <div class="row mt-4">
        <KanbanCard v-for="(obj, index) in kanbanData" :key="index" v-bind:cards="obj"></KanbanCard>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import KanbanCard from '@/components/kanbanCard.vue'
import db from '../config.js'

let kanbanObj = [
  {
    type: 'Back-Log',
    tasks: []
  },
  {
    type: 'To-Do',
    tasks: []
  },
  {
    type: 'Doing',
    tasks: []
  },
  {
    type: 'Done',
    tasks: []
  }
]

db.ref('/').on('value', snapshot => {
  kanbanObj[0].tasks = []
  kanbanObj[1].tasks = []
  kanbanObj[2].tasks = []
  kanbanObj[3].tasks = []

  snapshot.forEach(element => {
    var tempObj = {}
    if (element.val().category === 'Back-Log') {
      tempObj = element.val()
      tempObj.id = element.key
      kanbanObj[0].tasks.push(tempObj)
    } else if (element.val().category === 'To-Do') {
      tempObj = element.val()
      tempObj.id = element.key
      kanbanObj[1].tasks.push(tempObj)
    } else if (element.val().category === 'Doing') {
      tempObj = element.val()
      tempObj.id = element.key
      kanbanObj[2].tasks.push(tempObj)
    } else if (element.val().category === 'Done') {
      tempObj = element.val()
      tempObj.id = element.key
      kanbanObj[3].tasks.push(tempObj)
    }
  })
})

export default {
  name: 'home',
  components: {
    Navbar,
    KanbanCard
  },
  data() {
    return {
      kanbanData: kanbanObj
    }
  }
}
</script>
