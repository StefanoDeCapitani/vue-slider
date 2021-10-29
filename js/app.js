Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
  const app = new Vue({
    el: "#root",
    data: {
      imagesList: [
        {
          url: "img/01.jpg",
          title: "Svezia",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
        {
          url: "img/02.jpg",
          title: "Svizzera",
          text: "Lorem ipsum",
        },
        {
          url: "img/03.jpg",
          title: "Gran Bretagna",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {
          url: "img/04.jpg",
          title: "Germania",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam",
        },
        {
          url: "img/05.jpg",
          title: "Paradise",
          text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam",
        },
      ],
      currentImageIndex: 0,
    },
    methods: {
      showPrevious() {
        this.currentImageIndex =
          this.currentImageIndex > 0
            ? --this.currentImageIndex
            : this.imagesList.length - 1;
      },
      showNext() {
        this.currentImageIndex =
          this.currentImageIndex < this.imagesList.length - 1
            ? ++this.currentImageIndex
            : 0;
      },
    },
  });
});
