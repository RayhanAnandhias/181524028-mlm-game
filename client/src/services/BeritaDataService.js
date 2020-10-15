import http from "../http-common";

class BeritaDataService {
  getAll() {
    return http.get("/berita/all");
  }

  get(id) {
    return http.get(`/berita/${id}`);
  }

  create(data) {
    return http.post("/berita", data);
  }

  update(id, data) {
    return http.put(`/berita/${id}`, data);
  }

  delete(id) {
    return http.delete(`/berita/${id}`);
  }

  deleteAll() {
    return http.delete("/berita");
  }

  findByCategory(kategori) {
    return http.get(`/berita?kategori=${kategori}`);
  }
}

export default new BeritaDataService();
