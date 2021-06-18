/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { activateOneOf, toggleActive } from '{{ $src.RelPermalink }}';

// 观察者的选项(要观察哪些突变)
const config = { attributes: true, className: true };

/**
 * section three-faqs
 */
activateOneOf('.faq-sections .faq-section', true)

// 选中的section title
const faqSection0 = document.getElementById("faq-section-0")
const faqSection1 = document.getElementById("faq-section-1")
const faqSection2 = document.getElementById("faq-section-2")
// 待显示的faq items
const faqItems0 = document.getElementById("faq-items-0")
const faqItems1 = document.getElementById("faq-items-1")
const faqItems2 = document.getElementById("faq-items-2")

// 当观察到突变时执行的回调函数
const callback1 = function(mutationsList) {
  mutationsList.forEach(function(item,index){
    const id = String(item.target.id)
    if (id.indexOf(0) > 0) {
      faqItems0.style.display = 'block'
      faqItems1.style.display = 'none'
      faqItems2.style.display = 'none'
    } else if (id.indexOf(1) > 0) {
      faqItems1.style.display = 'block'
      faqItems0.style.display = 'none'
      faqItems2.style.display = 'none'
    } else if (id.indexOf(2) > 0) {
      faqItems2.style.display = 'block'
      faqItems0.style.display = 'none'
      faqItems1.style.display = 'none'
    }
  });
};

// 初始化显示第一个faq items
faqItems0.style.display = 'block'
// 创建一个链接到回调函数的观察者实例
const faqObserver = new MutationObserver(callback1);
// 开始观察已配置突变的目标节点
faqObserver.observe(faqSection0, config)
faqObserver.observe(faqSection1, config)
faqObserver.observe(faqSection2, config)

/**
 * section spec
 */
const specSeeAll = document.getElementById("feature-see-all")
const specSpecs = document.getElementById("specs")
const specSpecMask = document.getElementById("spec-mask")

const callback2 = function(mutationsList) {
  mutationsList.forEach(function(item,index){
    if (item.target.classList[0] === "is-active") {
      specSeeAll.innerText = "Hide all specs ↑"
      specSpecMask.style.display = 'none'
    } else {
      specSeeAll.innerText = "See all specs ↓"
      specSpecMask.style.display = 'unset'
    }
  });
};


// 创建一个链接到回调函数的观察者实例
const seeAllobserver = new MutationObserver(callback2);

// 开始观察已配置突变的目标节点
seeAllobserver.observe(specSpecs, config)
