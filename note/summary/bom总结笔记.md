## bom总结

### 三大家族
 + offset
  - offset宽/高  =  盒子自身的宽/高 + padding +border；
    offsetWidth = width+padding+border；
    offsetHeight = Height+padding+border；
	offsetLeft和offsetTop 检测距离父盒子有定位的左/上面的距离
	如果父级都没有定位则以body为准
 + scroll
  - ScrollWidth和scrollHeight（不包括border）盒子内容的宽高,如果有内容超出了,显示内容的高度;
  - scrollTop和scrollLeft 网页被浏览器遮挡的头部和左边部分;(被浏览器卷进去的部分)
 + client
  - clientWidth	  获取网页可视区域宽度
  - clientHeight  获取网页可视区域高度
  - clientX       鼠标距离可视区域左侧距离（event调用）
  - clientY       鼠标距离可视区域上侧距离（event调用）
  - clientTop/clientLeft 盒子的border宽高

 + onscroll事件
  - 只要页面滚动无论向左向右，向上向下，哪怕只有1px，都会触动这个事件
 + Onresize事件 
  - 只要浏览器的大小改变，哪怕1像素，都会触动这个事件。
 + 缓动公式
    leader=leader+(target-leader)/10;
    盒子位置 = 盒子本身位置+（目标位置-盒子本身位置）/ 10；

### event
    属性
    - bubbles:返回布尔值,指示事件是否气泡事件类型
    - pageX:光标相对于该网页的水平位置(ie没有)
    - pageY:光标相对于该网页的垂直位置(ie没有)
    - screenX:光标相对于该屏幕的水平位置
    - screenY:光标相对于该屏幕的垂直位置
    - clientX:光标相对于该网页的可视区域水平位置
    - clientY:光标相对于该网页的可视区域垂直位置