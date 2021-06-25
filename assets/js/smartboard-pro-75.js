/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { bindScrollTo } from '{{ $src.RelPermalink }}';

/**
 * section spec
 */

 // 观察者的选项(要观察哪些突变)
const config = { attributes: true, className: true };

const specSeeAll = document.getElementById("feature-see-all")
const specSpecs = document.getElementById("specs")

const specSpecMask = document.getElementById("spec-mask")

const callback2 = function(mutationsList) {
  mutationsList.forEach(function(item,index){
    console.log('item: ', item.target);
    if (item.target.classList[0] === "is-active") {
      specSeeAll.innerText = "Hide all specs ↑"
      console.log('specSeeAll.innerText: ', specSeeAll.innerText);
      specSpecMask.style.display = 'none'
    } else {
      // specSpecs.scrollIntoView()
      specSeeAll.innerText = "See all specs ↓"
      specSpecMask.style.display = 'unset'
    }
  });
};


// 创建一个链接到回调函数的观察者实例
const seeAllobserver = new MutationObserver(callback2);

// 开始观察已配置突变的目标节点
seeAllobserver.observe(specSpecs, config)

// 点击hide all 跳转回锚点
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar ? navbar.clientHeight : 0;
bindScrollTo('.toggle-specs', -navbarHeight);

const resetGif1Url = function() {
  document.getElementById('gif1').src = "/img/smartboard-pro-75/uhd.6b6d9df2578cb985a234b4a15728f2f349137b42c6833c2014b23adadf53c5e3.gif"
}

const resetGif2Url = function() {
  document.getElementById('gif2').src = "/img/smartboard-pro-75/feature-1.ee3f1db20108af415d34d60da364e633f1bcf7195ce52f62d48e11772d29c728.gif"
}

setInterval(resetGif1Url, 13000)
setInterval(resetGif2Url, 12000)