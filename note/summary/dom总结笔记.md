## dom总结笔记

### dom
    dom和node(节点)的区别
	dom元素指的是页面的标签,通过任意一个dom元素的关系,可以找到当前页面的其他任意一个dom元素;
	node节点指的是也页面的任意元素:标签 换行符 注释 空格  属性 标签内容等...都可以被当作node节点,也是可以被js选中的
	js可以操作dom元素,包括dom元素的属性和内容

### 获取dom元素
    任何一个标签都class属性和id属性
    一般class用于设置样式,id用于js选择
    当文档加载完毕后运行
    window.onload = function () {}
    // 1.id选择,极其特殊情况使用
	var p1 = document.getElementById(p1);
	// 2.标签选择器,极少使用.标签重复的太多
	var h2 = document.getElementsByTagName(h2);
	// 3.class类别选择器,经常使用,ie6,7,8不支持! 而且ie8不支持console.log
	var h1 = document.getElementsByClassName(h1);

### parentNode
    // api:  dom.parentNode  ==> 通过dom获取其父类节点.
	var pNode = innerBox.parentNode;

### 兄弟节点
    //兄弟节点 nextSibling 获取的是节点,可以包含空格和换行符等
	// 嫡出 在ie8 可用,但是chrome是下一个空格/换行节点
	// var box2 = box.nextSibling;
	// 庶出  在chrome可用,在ie8是undefined
	// var box2 = box.nextElementSibling;
	//兼容写法  顺序不能写错  先写通用的再写ie8以下的
	var box2 = box.nextElementSibling || box.nextSibling;

### 孩子节点
    //第一个孩子节点  firstChild 嫡出
	// var li_1 = ul.firstChild;
	// firstElementChild 庶出
	// var li_1 = ul.firstElementChild;
	//兼容: 顺序不能写错  先写通用的再写ie8以下的
	var li_1 = ul.firstElementChild || ul.firstChild;

### childNodes
    获取所有的孩子节点
    嫡出 var lis = ul1.childNodes;  // 伪数组
    庶出 var lis = ul1.children;  //这里一般使用children即可,在ie8中存在兼容问题,包含注释节点.

### nodeType
    nodeType是标签元素的属性 可以判断节点类型
    记住一个 nodeType==1  指的是标签节点

### 创建节点
    增删改查
	C U R D
	create
	update
	read
	delete 

### 节点属性
    获取：getAttribute(名称)
	设置：setAttribute(名称, 值)
	删除：removeAttribute(名称)

### 