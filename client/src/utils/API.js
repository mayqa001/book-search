import axios from "axios";


export default {

  getBooks: function() {
    return axios.get("/api/books");
  },

  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function(bookData) {
    console.log("save route")
    return axios.post("/api/books", bookData);
  },
  getGoogleScholar: function (){
    return axios.get("https://www.googleapis.com/auth/books");
}
};

