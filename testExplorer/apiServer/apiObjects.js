const request = require("supertest"); // import supertest
const { expect } = require("chai"); //import chai
const baseUrl = require("../globalVariable/baseUrl")

const url = `${baseUrl}`; //define global variabel


async function getMethod () {
    const response = await request(url).get("/objects/12"); //parameter yg mau di hit https://api.restful-api.dev/objects
        //assertation / verifikasi
        expect(response.status).to.equal(200);
        //console.log(response.body);
}

async function postMethod () {
    const response = await request(url)
    .post("/objects")
    .send({
        "name":"Nava Enggal",
        "data":
        {
            "Generation":"24th",
            "Price":"491.900",
            "Capacity":"69 GB"
        }
        });
        //assertation / verifikasi
        expect(response.status).to.equal(200);
        const id = response.body.id
        console.log('id after POST', id);
        //console.log(response.body);
}

async function putMethod () {
    const response = await request(url)
    .put(`/objects/12`)
    .send({
        "name": "Nava Enggal",
        "data": {
          "Generation": "25th", // ubah generation
          "Price": "491.900",
          "Capacity": "69 GB"
        }
    });
        //assertation / verifikasi
        expect(response.status).to.equal(200);
        const id = response.body.id
        console.log('id after PUT:', id);
        return id;
}

async function patchMethod () {
    const response = await request(url)
    .patch(`/objects/12`)
    .send({
        "name":"Nava Cantik", //ubah nama
        "data": {
            "Price": "500.000" // ubah harga
          }
        });; 
        //assertation / verifikasi
        expect(response.status).to.equal(200);
        console.log('Data after PATCH:', response.body);
}

async function deleteMethod() {
    const response = await request(url)
    .delete("/objects/12");
    // assertation / verifikasi
    expect(response.status).to.equal(204); // respons status 204 menunjukkan bahwa sumber daya telah berhasil dihapus
    console.log('Data after DELETE:', response.body);
}

module.exports = { getMethod, postMethod, putMethod, patchMethod, deleteMethod};