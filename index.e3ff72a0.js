(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function d(){window.removeEventListener("keydown",o),document.body.classList.remove("modal-open"),e.modal.classList.add("backdrop--is-hidden")}function o(e){"Escape"===e.code&&d(),e.currentTarget===e.target&&d()}e.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",o),document.body.classList.add("modal-open"),e.modal.classList.remove("backdrop--is-hidden")})),e.closeModalBtn.addEventListener("click",d),e.modal.addEventListener("click",o)})();
//# sourceMappingURL=index.e3ff72a0.js.map