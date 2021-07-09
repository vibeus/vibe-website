// 观察者的选项(要观察哪些突变)
const config = { attributes: true, className: true };

const heroVideoPlay = document.getElementById("hero-video-play")
const heroVideoClose = document.getElementById("hero-video-close")
const homeDom = document.getElementById("home")
const fadeContainer = document.getElementById("fade-container")
const navDom = document.getElementsByClassName("navbar")[0]

heroVideoPlay.onclick = function () {
  homeDom.classList.add("is-active")
  fadeContainer.classList.remove("is-active")
  navDom.classList.add("is-active")
}

heroVideoClose.onclick = function () {
  homeDom.classList.remove("is-active")
  fadeContainer.classList.add("is-active")
  navDom.classList.remove("is-active")
}

// const callback = function(mutationsList) {
//   mutationsList.forEach(function(item,index){
//     console.log('item: ', item.target);
//     if (item.target.classList[1] === "is-active") {

//     } else {

//     }
//   });
// };


// // 创建一个链接到回调函数的观察者实例
// const heroVideoObserver = new MutationObserver(callback);

// // 开始观察已配置突变的目标节点
// heroVideoObserver.observe(heroVideoPlay, config)