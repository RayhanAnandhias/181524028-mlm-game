<template>
  <div class="list-berita">
    <h1>Daftar Berita</h1>
    <router-link to="/add" class="btn btn-primary mt-4 mb-4"
      >Tambah Berita</router-link
    >
    <div v-if="alert.type.length != 0">
      <div :class="'alert alert-' + alert.type" role="alert">
        {{ alert.message }}
      </div>
    </div>
    <div class="container con2">
      <div class="row">
        <div class="col">
          <table class="table table-striped tabel">
            <thead>
              <tr>
                <th class="text-center" scope="col">#</th>
                <th class="text-center" scope="col">Judul</th>
                <th class="text-center" scope="col" style="width: 50%">
                  Konten
                </th>
                <th class="text-center" scope="col">Kategori</th>
                <th class="text-center" scope="col">Ubah</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(berita, index) in listBerita" :key="index">
                <th class="text-center" scope="row">{{ index + 1 }}</th>
                <td class="text-center">{{ berita.judul_berita }}</td>
                <td class="text-center">{{ berita.konten }}</td>
                <td class="text-center">{{ berita.kategori }}</td>
                <td class="text-center">
                  <router-link
                    :to="'/berita/' + berita.id"
                    class="btn btn-warning"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-pencil-square"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </router-link>
                  <button
                    class="btn btn-danger ml-2"
                    @click="deleteBerita(berita.id)"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-trash-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BeritaDataService from "../services/BeritaDataService";
export default {
  name: "berita",
  data() {
    return {
      listBerita: [],
      alert: {
        type: "",
        message: "",
      },
    };
  },
  methods: {
    retrieveBerita() {
      BeritaDataService.getAll()
        .then((response) => {
          this.listBerita = response.data;
          // console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteBerita(idBerita) {
      BeritaDataService.delete(idBerita)
        .then(() => {
          // console.log(response.data);
          this.retrieveBerita();
          //   this.$router.push({ name: "berita" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveBerita();
  },
};
</script>

<style>
.con2 {
  margin-left: 0;
}
.tabel {
  margin-left: -13px;
}
</style>