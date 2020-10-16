<template>
  <div class="submit-form">
    <h2 class="mb-4">Edit Berita</h2>
    <div v-if="message.length != 0">
      <div
        :class="'alert alert-success alert-dismissible fade show'"
        role="alert"
      >
        {{ message }}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
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
    <button @click="updateBerita()" class="btn btn-warning">Update</button>
  </div>
</template>

<script>
import BeritaDataService from "../services/BeritaDataService";
export default {
  name: "edit-berita",
  data() {
    return {
      berita: {},
      message: "",
    };
  },
  methods: {
    getBerita(id) {
      BeritaDataService.get(id)
        .then((response) => {
          this.berita = response.data;
          //   console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateBerita() {
      BeritaDataService.update(this.berita.id, this.berita)
        .then(() => {
          this.message = "Update Sukses";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getBerita(this.$route.params.id);
    this.message = "";
  },
};
</script>

<style>
#kategori {
  max-width: 200px;
}
</style>