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