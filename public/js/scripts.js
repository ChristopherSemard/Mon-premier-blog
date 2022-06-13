/*!
 * Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
 */
window.addEventListener("DOMContentLoaded", () => {
    let scrollPos = 0;
    const mainNav = document.getElementById("mainNav");
    const headerHeight = mainNav.clientHeight;
    window.addEventListener("scroll", function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains("is-fixed")) {
                mainNav.classList.add("is-visible");
            } else {
                console.log(123);
                mainNav.classList.remove("is-visible", "is-fixed");
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(["is-visible"]);
            if (
                currentTop > headerHeight &&
                !mainNav.classList.contains("is-fixed")
            ) {
                mainNav.classList.add("is-fixed");
            }
        }
        scrollPos = currentTop;
    });
});

tinymce.init({
    selector: "#mytextarea",
    plugins: [
        "a11ychecker",
        "advlist",
        "advcode",
        "advtable",
        "autolink",
        "checklist",
        "export",
        "lists",
        "link",
        "image",
        "charmap",
        "preview",
        "anchor",
        "searchreplace",
        "visualblocks",
        "powerpaste",
        "fullscreen",
        "formatpainter",
        "insertdatetime",
        "media",
        "table",
        "help",
        "wordcount",
    ],
    toolbar:
        "undo redo | formatpainter casechange blocks | bold italic backcolor | " +
        "alignleft aligncenter alignright alignjustify | " +
        "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
});
