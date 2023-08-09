'use strict';

let counter = 0;

for (const menu of document.querySelectorAll(".menu")) {
  menu.addEventListener("click", () => {
      menu.querySelector(".menu-text").classList.toggle("menu-text-open");
      menu.querySelector(".list_titles").classList.toggle("active_menu");
      if (counter % 2 === 0) {
        menu.classList.add("active");
      } else {
        menu.classList.remove("active");
      }
      counter = counter + 1;
      menu.querySelector(".menu-content").classList.toggle(
          "menu-content-hidden"
      );
      console.log(counter)
  });
}