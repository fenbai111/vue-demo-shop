(function(window){var svgSprite='<svg><symbol id="icon-xiangji" viewBox="0 0 1024 1024"><path d="M910.204767 270.408663 739.544923 270.408663l0-85.329411c0-31.417547-25.469068-56.886615-56.886615-56.886615L341.339642 128.192637c-31.417547 0-56.886615 25.469068-56.886615 56.886615l0 85.329411L113.794206 270.408663c-62.835094 0-113.77323 50.938136-113.77323 113.77323l0 398.205281c0 62.835094 50.938136 113.77323 113.77323 113.77323l796.411585 0c62.835094 0 113.77323-50.938136 113.77323-113.77323L1023.97902 384.181893C1023.977997 321.346799 973.039861 270.408663 910.204767 270.408663zM967.091382 782.387173c0 31.417547-25.469068 56.886615-56.886615 56.886615L113.794206 839.273788c-31.417547 0-56.886615-25.469068-56.886615-56.886615L56.907591 384.181893c0-31.417547 25.469068-56.886615 56.886615-56.886615l227.54646 0L341.340665 213.522048c0-15.708773 12.734022-28.442796 28.442796-28.442796l284.432051 0c15.708773 0 28.442796 12.734022 28.442796 28.442796l0 113.77323 227.54646 0c31.417547 0 56.886615 25.469068 56.886615 56.886615L967.091382 782.387173zM511.999486 327.295278c-125.670188 0-227.54646 101.876272-227.54646 227.54646s101.876272 227.54646 227.54646 227.54646 227.54646-101.876272 227.54646-227.54646S637.669674 327.295278 511.999486 327.295278zM511.999486 725.500559c-94.252641 0-170.659845-76.407204-170.659845-170.659845s76.407204-170.659845 170.659845-170.659845 170.659845 76.407204 170.659845 170.659845S606.252127 725.500559 511.999486 725.500559z" fill="#1296db" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)