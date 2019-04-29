import axios from "axios";

export default {
    // Gets all images
    loadImages: function() {
        return axios.get("/api/images");
    },
    // Gets the image with the given id
    getRandomImage: function(id) {
        id = (Math.random() * 16) + 1;
        return axios.get("/api/images/" + id);
    }
};
