# css总结笔记

## 选择器

   标签选择器
   h1{xxx:xxx;}

   ID选择器
   #p2{xxx:xxx;}

   类别选择器
   .detail{xxx:xxx;} 
   .detail 是 class 描述当前的标签属性

## 组合选择器

   交集选择器
   p.danger{xxx:xxx;} 使用了标签选择器和类别选择器

   后代选择器
   .box .success{xxx:xxx;}
   父级class描述为box,子级class描述为success
   通过父级选择子级

   并集选择器
   .span1,.span2{xxx:xxx;}
   同在一个级别内的类型选择器

## 通配符

   *{xxx:xxx;}

## css样式的引入
   <link rel="stylesheet" href="css文件位置">

## css单位
   颜色的表示方式
   1.css预定义颜色 red  blue  green yellow orange ....
   2.十六进制 red/green/blue  
	    每一位范围: 0~16; 转为16进制: 0~f;
	    十进制:     0 1 2 ... 9  10  11  12  13  14  15;
	    十六进制:   0 1 2 ... 9  a    b   c   d   e   f;
   3. rgb()
		进制转换: ff==> 255;
		ff  ==> f*16+15 ==> 15*16+15 = 255
		ab ==> a*16+11 ==> 10*16+11 = 171
		aa ==> a*16 + 10 ==> 170
        color: rgba(171,170,170,.3);
        a指的透明度 范围:0~1; 0.x =简写=> .x

## css的常见属性
   text-align: center; ==> 水平位置 : left|center|right
   text-indent: 2em; ==> 首行缩进 : em 基于当前字体的倍数
   line-height: 50px; ==> 字体行高
   font-weight: bolder; 字体加粗; lighter(细)  normal(正常)  bolder(加粗)
   font-style: italic; ==> 字体风格 : 斜体

## 字体写法
   一般开发的时候  会对整体body设置一个初始字体 该字体的样式会被全局标签继承
   body{
			font: 16px/1.2 '微软雅黑';
			color: #666666;
		}

## 背景图片
   background-image: url('img/bg.jpg');
   背景图片地址
   background-repeat: no-repeat;
   背景图片排序方式:不允许平铺
   background-attachment: fixed;
   背景图片附着方式:固定;背景图片固定,用于实现类似于,视差的效果

## 标签的表现方式
   1. 块状标签 (石头)
    - 会自动换行
    - 宽高有效
    - 比如: div  p  h1~h6  ul>li ol>li  dl>dt~dd  tr  form

   2. 行内块标签 (果冻)
    - 不会自动换行
    - 宽高有效
    - 比如: img  td  input  select  button

   3. 行内标签 (水)
    - 不会自动换行
    - 宽高无效
    - 比如: span  a

## 盒子模型
   1. 盒子边框属性  border
   2. 盒子边框和内容填充物   padding
   3. 盒子间距   margin
   border-style: solid;
   边框样式
   none (默认) / dashed(虚线) / dotted（点） / solid(实线) / double(双实线)

## overflow
   overflow: auto; (hidde|scroll|auto)

## 盒子类型转换
   标签的表现形式之间是可以相互转换的
   display: block;
   block(块)   inline-block(行内块)  inline(行内)

   盒子居中
   margin: 0 auto;

## multiple 多选
    <select multiple size="5">
		<option>广告</option>	
		<option>影视</option>	
		<option>互联网</option>	
		<option>体育</option>	
		<option>学校</option>
		<option>广告</option>	
		<option>影视</option>	
		<option>互联网</option>	
		<option>体育</option>	
		<option>学校</option>	
		<option>广告</option>	
		<option>影视</option>	
		<option>互联网</option>	
		<option>体育</option>	
		<option>学校</option>		
    </select>

## css特性
   一般在实现页面的时候,会去掉所有的默认样式,
   包括padding/margin/list-style/a下划线,
   称之为:css初始化
       *{
			margin: 0;
			padding: 0;
		}
		body{
			font: 16px/1.2 '微软雅黑';
		}
		ul{
			list-style: none;
		}
		a{
			text-decoration: none;
		}
		后面的css样式覆盖前面样式,体现了css的层叠性

		字体所有的属性都能实现继承
		1. a标签的颜色不会继承
		2. h1~h6标签的大小不会实现继承

## css权重
   行内样式(1000) > id选择器(100) > class选择器(10) > 标签选择器(1) > 通配符(0)

## 文档流
   div内的背景图片会进行横排平铺,铺满后进行换内继续平铺

## 浮动
   浮动原则: 同一个父类盒子内部,要浮动都浮动!
   右浮动很少用,而且会影响标签原来的顺序
   阻止前后有浮动元素
   clear: both;
   空标签 任务 清除浮动
    <div class="clear"></div>
   浮动的另一个作用: 文字环绕图片

   伪类
    hover: 当获鼠标悬浮的时候

   css命名
    - 字母开头+数组+-/_  xx_xx1  xx-xx xx_xxxx
    - 驼峰命名  it is a fine day today ;  
				itisafinedaytoday;
				itIsAFineDayToday;
	- xx 和  xx-xx  推荐使用
   class常用命名
   - header
   - container
   - footer

   页面布局三段论

## 元素定位
   定位元素脱离文档流
   元素定位有三种
    - 固定定位 fixed
      - 相对浏览器做定位
    - 相对定位 relative
      - 相对自己原来的位置定位
        - 相对定位: 相对该元素原来的位置定位;不会脱标,而且会占据原来的位置
    - 绝对定位 absolute
     - 相对父类盒子定位 
        - 1. 没有嵌套元素,相对body做定位
        - 2. 如果有嵌套元素,而且父类有定位元素,则相对父类做定位
        - absolute  父类一般都是 relative, "子绝父相".
    z-index: x;
    - 如果定位元素发生了重叠,那么可以通过z-index控制定位元素的层级.
      默认级别为z-index:0,值越大,层级越靠上.