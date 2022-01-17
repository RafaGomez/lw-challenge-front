var app = new Vue({
  el: "#app",
  data: {
    message: "Hola Vue!",
    isLoading: false,
    apiUrl: "https://localhost:8080/api/Translation",
    originalText: "",
    translatedText: "",
    originalLanguage: 0,
    targetLanguage: 1,
  },
  methods: {
    translate: function () {
      this.isLoading = true;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: this.originalText,
          langFrom: Number(this.originalLanguage),
          langTo: Number(this.targetLanguage),
        }),
      };
      fetch(this.apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => (this.translatedText = data.tanslatedText))
        .then(() => (this.isLoading = false))
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.translatedText = "ERROR";
        });
    },
  },
});
