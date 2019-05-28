<template>
  <div class="home">
    <Images :img="images"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Images from "@/components/Images.vue";

export default {
  name: "home",
  components: {
    Images
  },
  data() {
    return {
      images: null,
    };
  },
  beforeMount(){
    this.db.ref("/").on("value", snapshot => this.cargarBase(snapshot.val()));
  },
  methods: {
    cargarBase(datos) {
      this.images = [];
      for (let key in datos.image) {
        this.images.push({
          title: datos.image[key].title,
          description: datos.image[key].description,
          filename: datos.image[key].filename,
          path: datos.image[key].path,
          originalname: datos.image[key].originalname,
          mimetype: datos.image[key].mimetype,
          size: datos.image[key].size,
          created_at: datos.image[key].created_at,
          key: key
        });
      }
      this.images.reverse();
    }
  }
};
</script>
