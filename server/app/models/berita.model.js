module.exports = (sequelize, Sequelize) => {
    const Berita = sequelize.define("berita", {
        judul_berita: {
            type: Sequelize.STRING
        },
        konten: {
            type: Sequelize.STRING
        },
        kategori: {
            type: Sequelize.STRING
        }
    });
    return Berita;
};