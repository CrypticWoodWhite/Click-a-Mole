import axios from "axios";

export default {
    // Gets all images
    loadImages: function() {
        return axios.get("/api/images");
    },
    // Gets the image with the given id
    getOneImage: function(id) {
        return axios.get("/api/images/" + id);
    }
};
