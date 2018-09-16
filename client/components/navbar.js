Vue.component('navbar', {
  template:
  `
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">KamVan Board</a>
      <button class="btn btn-primary my-2 my-sm-0" type="button" data-toggle="modal" data-target="#exampleModal">New Task</button>
    </nav>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <input id="title" type="text" class="form-control" placeholder="Task Title">
            </div>
            <div class="form-group">
                Description
                <textarea id="description" class="form-control" placeholder="Task Short Description"></textarea>
            </div>
            <div class="form-group">
                Point
                <input id="point" type="number" class="form-control" placeholder="0">
            </div>
            <div class="form-group">
                Assigned To
                <input id="assignedTo" type="text" class="form-control" placeholder="Assigned To">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})