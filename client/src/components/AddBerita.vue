<template>
  <div class="submit-form">
    <h2 class="mb-4">Tambah Berita</h2>
    <div class="form-group">
      <label for="judul_berita">Judul Berita</label>
      <input
        type="text"
        class="form-control"
        id="judul_berita"
        required
        autofocus
        v-model="berita.judul_berita"
        name="judul_berita"
      />
    </div>

    <div class="form-group">
      <label for="konten">Konten</label>
      <textarea
        class="form-control"
        id="konten"
        required
        v-model="berita.konten"
        name="konten"
        rows="10"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="kategori">Kategori</label>
      <input
        class="form-control"
        id="kategori"
        required
        v-model="berita.kategori"
        name="kategori"
      />
    </div>
    <button @click="saveBerita" class="btn btn-success">Submit</button>
  </div>
</template>

<script>
import BeritaDataService from "../services/BeritaDataService";
export default {
  name: "add-berita",
  data() {
    return {
      berita: {
        id: null,
        judul_berita: "",
        konten: "",
        kategori: "",
      },
    };
  },
  methods: {
    saveBerita() {
      var data = {
        judul_berita: this.berita.judul_berita,
        konten: this.berita.konten,
        kategori: this.berita.kategori,
      };

      BeritaDataService.create(data)
        .then((response) => {
          this.berita.id = response.data.id;
          console.log(response.data);
          this.$router.push({ name: "berita" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
#kategori {
  max-width: 200px;
}
</style>