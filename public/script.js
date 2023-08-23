const menu = document.getElementById("menu");

const openMenuList = () => {
  const menuStyle = window.getComputedStyle(menu).getPropertyValue("max-height");
  if (menuStyle === "0px") {
    menu.style.maxHeight = menu.scrollHeight + "px";
  } else {
    menu.style.maxHeight = "0";
  };
};


const menuIcon = document.getElementById("burger");
menuIcon.addEventListener("click", openMenuList);