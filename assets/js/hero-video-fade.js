/**
 * hero video 点击播放/关闭 动画效果 给对应Dom元素加上 class "is-active"
 */
const heroNormalVideo = document.getElementById("hero-normal-video");
const heroVideoPlay = document.getElementById("hero-video-play")
const heroVideoClose = document.getElementById("hero-video-close")
const homeDom = document.getElementById("home")
const fadeContainer = document.getElementById("fade-container")
const navDom = document.getElementsByClassName("navbar")[0]


heroVideoPlay.onclick = function () {
  homeDom.classList.add("is-active")
  fadeContainer.classList.remove("is-active")
  navDom.style.display = "none"
  // 用户点击播放再加载视频资源，不然太消耗流量
  heroNormalVideo.style.display = "unset"
  heroNormalVideo.firstElementChild.src = "/resources/Vibe-introduction-new.mp4"
  heroNormalVideo.load()
  heroNormalVideo.play()
}

heroVideoClose.onclick = function () {
  homeDom.classList.remove("is-active")
  fadeContainer.classList.add("is-active")
  setTimeout(()=>{fadeContainer.classList.remove("is-active")},1000) // 消除样式冲突
  navDom.style.display = "unset"
  heroNormalVideo.style.display = "none"
  heroNormalVideo.pause()
}
