document.addEventListener("DOMContentLoaded", function() {
    /*const iconBlock = document.getElementById("icon-block");*/
    /*const iconList = document.getElementById("icon-list");*/
    const iconBlock = document.querySelector(".icon-block");
    const iconList = document.querySelector(".icon-list");
    const images_x1 = document.querySelectorAll(".li__img_x1");
    const images_x3 = document.querySelectorAll(".li__img_x3");
    const mainList = document.querySelector(".main__list");
    const listLi = document.querySelectorAll(".list__li");
    const liGroup = document.querySelectorAll(".li__group");
    const liGroupSub = document.querySelectorAll(".li__group__sub");
    const subRow = document.querySelectorAll(".sub__row");
    const sub_3 = document.querySelectorAll(".sub-3");
    const sub_3Title = document.querySelectorAll(".sub-3__title");
    const sub_3Span = document.querySelectorAll(".sub-3__span");

    iconBlock.addEventListener("click", function() {
        updateRects(iconBlock, "#3D8EDA");
        updateRects(iconList, "#C8C7C7");

        images_x1.forEach(img => {
            img.style.display = "block"
        })

        images_x3.forEach(img => {
            img.style.display = "none"
        })

        mainList.classList.remove("main__list__block")

        listLi.forEach(el => {
            el.classList.remove("list__li__block")
        })

        liGroup.forEach(el => {
            el.classList.remove("list__group__block")
        })

        liGroupSub.forEach(el => {
            el.classList.remove("li__group__sub__block")
        })

        subRow.forEach(el => {
            el.classList.remove("sub__row__block")
        })

        sub_3.forEach(el => {
            el.classList.remove("sub-3__block")
        })

        sub_3Title.forEach(el => {
            el.classList.remove("sub-3__title__block")
        })

        sub_3Span.forEach(el => {
            el.classList.remove("sub-3__span__block")
        })


    });

    iconList.addEventListener("click", function() {
        iconList.classList.add("selected");
        iconList.classList.remove("deselected");
        iconBlock.classList.add("deselected");
        iconBlock.classList.remove("selected");

        updateRects(iconList, "#3D8EDA");
        updateRects(iconBlock, "#C8C7C7");

        images_x1.forEach(img => {
            img.style.display = "none"
        })

        images_x3.forEach(img => {
            img.style.display = "block"
        })

        mainList.classList.add("main__list__block")

        listLi.forEach(el => {
            el.classList.add("list__li__block")
        })

        liGroup.forEach(el => {
            el.classList.add("list__group__block")
        })

        liGroupSub.forEach(el => {
            el.classList.add("li__group__sub__block")
        })

        subRow.forEach(el => {
            el.classList.add("sub__row__block")
        })

        sub_3.forEach(el => {
            el.classList.add("sub-3__block")
        })

        sub_3Title.forEach(el => {
            el.classList.add("sub-3__title__block")
        })

        sub_3Span.forEach(el => {
            el.classList.add("sub-3__span__block")
        })
    });

    function updateRects(svg, color) {
        const rects = svg.querySelectorAll("rect");
        rects.forEach(rect => {
            rect.setAttribute("fill", color);
        });
    }
});
