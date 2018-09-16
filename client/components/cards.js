Vue.component('cards', {
  template:
  `
  <div class="container">
    <div class="row mt-4">
      <div class="col-lg-3 col-sm-6 item">
        <div class="card h-100">
          <div class="card-header bg-danger">
            <label class="text-white">Back-Log</label>
          </div>    
          <div class="card-body">
              <div class="card">
                <div class="card-header">
                  <label>Tugas A</label>
                </div>    
                <div class="card-body">
                  <p>Point: 100</p>
                  <p>Assigned To: Mr. John
                </div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#taskDetail">Show Details</button>
              </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 item">
        <div class="card h-100">
          <div class="card-header bg-warning">
            <label class="text-white">To-Do</label>
          </div>    
          <div class="card-body">
              <div class="card">
                <div class="card-header">
                  <label>Tugas B</label>
                </div>    
                <div class="card-body">
                  <p>Point: 100</p>
                  <p>Assigned To: Mr. John
                </div>
                <button type="button" class="btn btn-primary">Show Details</button>
              </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 item">
        <div class="card h-100">
          <div class="card-header bg-primary">
            <label class="text-white">Doing</label>
          </div>    
          <div class="card-body">
              <div class="card">
                <div class="card-header">
                  <label>Tugas C</label>
                </div>    
                <div class="card-body">
                  <p>Point: 100</p>
                  <p>Assigned To: Mr. John
                </div>
                <button type="button" class="btn btn-primary">Show Details</button>
              </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 item">
        <div class="card h-100">
          <div class="card-header bg-success">
            <label class="text-white">Done</label>
          </div>    
          <div class="card-body">
              <div class="card">
                <div class="card-header">
                  <label>Tugas D</label>
                </div>    
                <div class="card-body">
                  <p>Point: 100</p>
                  <p>Assigned To: Mr. John
                </div>
                <button type="button" class="btn btn-primary">Show Details</button>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="taskDetail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Detail Task: Tugas A</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
                <b>Task Description :</b>
                <p class="text-muted">Deskripsi tugas A</p>
            </div>
            <div class="form-group">
                <b>Point :</b>
                <p class="text-muted">100</p>
            </div>
            <div class="form-group">
                <b>Status :</b>
                <p class="text-muted">Back Log</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-success">To-Do</button>
          </div>
        </div>
      </div>
    </div>
</div>
  `
})