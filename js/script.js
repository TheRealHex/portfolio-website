const openTab=(e,t)=>{let a=document.getElementsByClassName("tabContent"),r=document.getElementsByClassName("tabItem");for(let l=0;l<a.length;l++)a[l].style.display="none";for(let s=0;s<r.length;s++)r[s].className=r[s].className.replace(" active","");document.getElementById(t).style.display="flex",e.currentTarget.className+=" active"};let isDark=!1;function toggleTheme(){let e=document.body;var t=document.querySelector(":root");e.classList.toggle("dark-mode"),(isDark=!isDark)?(t.style.setProperty("--mainBg","black"),updateImageBackgroundColor("151515"),invert()):(t.style.setProperty("--mainBg","whitesmoke"),updateImageBackgroundColor("fcfcfc"),revert())}function updateImageBackgroundColor(e){let t=document.querySelector('img[src*="streak-stats.demolab.com"]');if(t){let a=t.src.replace(/background=[^&]*/,`background=${e}`);t.src=a}}function invert(){document.getElementById("image").style.filter="invert(100%)"}function revert(){document.getElementById("image").style.filter="invert(0%)"}
