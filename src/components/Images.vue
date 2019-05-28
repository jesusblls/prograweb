<template>
  <div>
    <div class="container p-4">
      <iframe name="hiddenFrame" width="0" height="0" border="0" style="display: none;"></iframe>
      <div class="row">
        <div class="card-columns">
          <div v-for="image in img" :key="image.id" class="card">
            <img :src="image.path" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{image.title}}</h5>
              <p class="card-text">{{image.description}}</p>
              <p class="card-text">{{fecha(image.created_at)}}</p>
              <button :id="image.key" @click="borrar($event)"
                type="button"
                class="btn float-right"
              >
                <i :id="image.key" class="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="Modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Subir Imagen</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form
              action="http://localhost:3000/upload"
              method="POST"
              enctype="multipart/form-data"
              target="hiddenFrame"
            >
              <div class="input-group mb-3">
                <div class="custom-file">
                  <input type="file" name="image" class="custom-file-input" id="inputGroupFile02">
                  <label
                    class="custom-file-label"
                    for="inputGroupFile02"
                    aria-describedby="inputGroupFileAddon02"
                  >Seleccionar imagen</label>
                </div>
              </div>
              <div class="form-group">
                <input type="text" name="title" placeholder="Titulo" class="form-control">
              </div>
              <div class="form-group">
                <textarea name="description" class="form-control" placeholder="Descripcion"></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success btn-block" @click="close">Subir</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      data-toggle="modal"
      class="btn btn-rounded btn-success float"
      data-target="#Modal"
    >
      <i class="fa fa-plus my-float"></i>
    </button>
  </div>
</template>

<script>
const { format } = require("timeago.js");
export default {
  name: "ImagesIndex",
  props: ["img"],
  methods: {
    fecha(imgFecha) {
      return format(imgFecha);
    },
    close() {
      $("#Modal").modal("hide");
    },
    borrar(img){
      var key = img.target.id
      this.db.ref("/image/"+key).remove();
    }
  }
};
</script>
<style>
.float {
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 40px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
}
</style>
