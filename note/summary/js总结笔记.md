## js总结笔记

### js的书写方式
    <!-- 1.先引入外部样式 -->
	<link rel="stylesheet" href="css/common.css">
	<!-- 2.引入外部的js文件 -->
	<script src="main.js"></script>
	<!-- 3. 内部的style样式 -->
	<style> ... </style>
	<!-- 4. 内部的js代码块 -->
	<script> ... </script>
	遵循以上顺序
	console.log('欢迎欢迎');
	在控制台打印信息
	打印信息用户看不到,一般用于调试
	一般用于多行注释 ctrl+shift+/
	弹出
	alert('弹出提示内容');
### js输出内容
    注意: 输出的内容,必须用''/""包括,单引号双引号都可以.
    如果内部的同时使用双引号或者单引号需要用转义字符\来转义
    1.console.log('') 控制台输出,一般用于调试代码
    2.alert('xxx') 弹出窗,可用于用户错误提示(很少),或者用于代码调试
    3. confirm()  确认对话框 (浏览器自带,一般也很少用)
    4. prompt('请输入姓名') 录入信息对话框
    5. write 往页面输出内容,(也不常用)
    confirm('你好吗?');
    prompt('请输入用户名?');


## 变量
   变量用于给数据开辟内存空间
   数据类型不同 number(数字类型);string(字符串类型);boolean(布尔类型);
   注意: = 为赋值运算符!
   变量的命名必须是  字母 数字  _   $

### 数据类型
    // js的基本数据类型,面试
	// 	number 
	// 	string
	// 	boolean
	// 	undefined
	// 	null
	// 通过typeof可以判断数据类型
	注意: 所有对象的顶级对象都是Object类型
### 复杂数据类型  对象 object
    var user = {
			name: '张三',
			age: 20,
			sex: true
		}
		console.log(typeof  user); // object
	复杂数据类型 数组 Array
	var ages = [33,20,555];  
		console.log(typeof ages); 
	instanceof 判断某个某个对象是某个构造函数的实例对象
	console.log(user instanceof Array)//  false
	console.log(ages instanceof Array)//  true

## 比较运算符
   = 是赋值运算符，==才是比较运算符
   <  >   <=  >=   ==  !=

## 算数运算符
    var a = 3;
	var b = 5;
	var c = '10';
	var name = '张三';
	var fontName = '尼古拉斯';
	console.log(a+b); // 8
	console.log(a-b); // -2
	console.log(a*b); // 15
	console.log(a/b); // .6

	求余数
	console.log(a%b);
	打印
	console.log('=========');

	其他作用
	1. + 数字类型相加==> 数字求和
	2. number类型+ string类型 ==> 拼接 string类型
	3. string类型 直接拼接
	    console.log(a+name);
		console.log(typeof (a+name));
		console.log(fontName+'·'+name);
	特殊
	number-字符串number可以把stirng转换为number运算
	console.log(a-c); // -7
	console.log(a+c); // 310 新手注意

	/和% 两个运算符 自己验证
	console.log(3/0);         // Infinity  无限大
	console.log(3-'张三');    // NaN  ; not a number 提示缩写
	console.log(NaN == NaN); // false  面试:
	console.log(3*(5-2));   // 9

## 带操作符
        var a = 10;
		var b = a+20;
		// 不能重复声明一个变量 , 每次重新声明会把之前的值丢失
		var c = 20;
		c = c+1;
		// c = c+1;
		//简写
		c += 1; 
		c += 5;
		c -= 2; 
		// c += 1;  26
		//简写 +=1 ==> ++;
		c ++;
		c ++;
		// c -- ; 
		console.log(b);
		console.log(c); 

## date对象
   例如:
        // 创建一个构造函数(对象)的实例对象
		var date = new Date();
		//Thu Oct 25 2018 09:23:11 GMT+0800  格林威治时间 东8时(北京时间)
		console.log(date);
		// 对象.xx ==> 对象的属性  比如 小狗的颜色 小狗的身高 ...
		// 对象.xx() ==> 调用对象的方法  比如: 小狗跑   小狗跳...
		// 1999  千年虫病毒  99+1 ==>  00
		var year = date.getFullYear(); // 调用对象date的方法,获取当前的年份
		console.log('year===>'+year);
		// 月份范围0-11  
		// 数组 下标都是从 0 开始
		var month  = date.getMonth()+1; // 0 ~ 11  
		//注意: 变量名 冲突  后面会覆盖前面
		var day = date.getDate();
		var hour = date.getHours();
		var min = date.getMinutes();
		var sec = date.getSeconds();
		//程序语言中 时间的最小单位为毫秒   1s = 1000 ms;
		var mm = date.getMilliseconds();
		// 时间戳 

		// + 连接符是所有编程语言中最常见的操作
		var nowTime = year + '年' + month + '月' + day + '日' + hour
			+ ':' + min + ':'+sec + ':'+ mm ;
		console.log('当前时间为: '+nowTime);

### 时间戳
    // new的对象(构造函数)本身需要大写开头,以后所有的构造函数对象都是大写开头.
	var date = new Date();
	//时间戳
	var timeStamp = date.getTime();
	console.log(timeStamp);

### math
        // Math 不需要new  是一个静态方法
		//天花板函数
		console.log('ceil(3.2)===>'+Math.ceil(3.2));
		// 负数需要特殊注意一下
		console.log('ceil(-3.2)===>'+Math.ceil(-3.2));
		// 地板函数
		console.log('floor(3.2)===>'+Math.floor(3.2));
		console.log('max(3,5,7)===>' + Math.max(3,5,7));
		//随机 范围: [0,1)  伪随机 
		console.log('random()===>'+ Math.random());
		// 求0,9的随机值
		console.log('随机0-9===>'+  Math.floor(Math.random()*10));
		// 求任意范围的随机值
		// 5~20 之间任意随机值 Math.floor(Math.random()*个数)+最小值
		console.log('随机5-20===>'+  Math.floor(Math.random()*16+5));
		// Math.round(x)   四舍五入  思考: 四舍五入正确吗?

		console.log('round(3.2)===>'+ Math.round(3.2));
		console.log('round(3.5)===>'+ Math.round(3.5));
		console.log('round(3.4999999999999999999)===>'+ Math.round(3.49999999999999));
		//在某些情况下回存在舍入误差
		// 2.9999999999999999  ==>  3  存在2进制==> 10进的换算
		// 1. 字符串类型 绝对不会被 舍入
		// 2. 如果对于钱计算 1 ==> 100   350==> 3.5 
		console.log('pow(3,4)===> '+ Math.pow(3,4));
		console.log('pow(3,4)===> '+ 3*3*3*3);

### 关系运算符
    1.  >   <   >= <=  !=  
    程序里 !=   一般用于逻辑判断
    console.log(3!=5);  // boolean 
    2. ===  与  ==   面试 
    console.log(3==3); // true
    比较运算符会对  字符串类型的number 进行"隐式转换" ==> number进行比较
    console.log(3=='3');  // true?
	console.log(3==='3');  // === 恒等于, 先进行类型比较,再进行值比较.

### 逻辑运算符
    &&  ||  ! (与或非)
    0 1 ==>  1  或门
    0 0 ==>   0   与门
    1 1 ==>   1   与门 / 或
    0 1 ==>  0  非门
    console.log(3>5 && 1==2); // false
	console.log(5>3 && 1==2);  // false 
	console.log(5>3 && 1!=2); // true
	console.log( 5>3 || 1==2); // true
	console.log(3>5 || 1==2 ); // false
	console.log(3<5 || 1!=2 ); // true
	console.log(!(1==2)); // true
	console.log(!true); // false
	不要这么写!!! 比较运算符 不能连写
	console.log(5<3<8);
	onsole.log(3<5&&5<8);

## if-else
   name 属性 是一个特殊的属性  是window作用域自带属性
   对字符串的处理  if可以判断字符串是否为空
   // 猥琐
    // if(true == true){
    if(true){
    	// 代码块 可以同时执行很多行代码
    	alert('我去上学!');
    	console.log('为true....');
    }else{
    	alert('今天天气不错!');
    	console.log('为false....');
    }

    alert('么么哒!');

## 多分支语句
   例如：
   // 用户输入成绩，
   // 如果成绩大于等于85，那么提示优秀；
   // 否则如果成绩大于等于70，那么提示良好；
   // 否则如果成绩60~69，那么提示及格；
   // 否则，不及格
        var sc = prompt('请输入您的成绩!');
		console.log(typeof sc); // string
		if(sc>=85){
			alert('优秀');
		}else if(sc>=70){
			alert('良好');
		}else if(sc>= 60){
			alert('及格!');
		}else{
			alert('不许毕业!');
		}

		alert('么么哒!');

## 三元运算符
        var sex = true;
		// if(sex){
		// 	alert('男生!');
		// }else{
		// 	alert('女生!');
		// }
		// sex?'男生':'女生' 三元表达式
		// 条件成立 ? '结果1':'结果2'
		alert(sex?'男生':'女生');
		alert((3+3>5)?'你好!':'再见!');

## for循环
   		//要求输出1~100
		// var i = 0  变量初始化
		// i+=5  循环的步长
		// i < 101  终止的条件
		for(var i =0 ; i < 101 ;  i+=5){
			console.log(i);
		}

		for(var i = 10 ; i > 0 ; i --){
			console.log(i);
		}
		console.log('=========');
		// 写循环 要避免死循环 还有无效循环
		for(var i = 100 ; i < 100 ; i++){
			console.log(i);
		}

## i++
   		// 特殊记忆
		var a = 5;
		// a++;  先参与运算 再执行++
		// ++a;  先执行++  再参与运算
		var b = a++;
		console.log('a==>'+a); // 6
		console.log('b==>'+b); // 5 

## switch
   在有限的类别判断时候,可以使用switch-case,代码逻辑更清晰
   例如：
   var fruit  = prompt('请输入水果名称!');
   switch (fruit) {
    case '苹果':
    	alert('苹果很好吃!');
    	break;
    case '梨':
    	alert('梨很脆!');
    	break;
    case '香蕉':
    	alert('香蕉很甜!');
    	break;
    default:
    	alert('我也没吃过!');
    	break;
}

## while
   		var num = 0 ;
		// 当xxx的时候
		// 做while循环的时候 一定要注意跳出循环的条件
		// 特殊:有些情况会刻意制造死循环,
		while(num<10){
			console.log('num==>'+num);
			num ++;
		}

## do-while
   		// 把字句换被字句
		var num = 0 ;
		// do{
		// 	console.log('num===>'+num);
		// 	num ++;
		// }while(num < 10);
		//差别:
		// do{
		// 	console.log('num2===>'+num);
		// 	num ++;
		// }while(num==5);

		while(num==5){
			console.log('num3===>'+num);
			num ++;
		}

## break
   例如：
   		var rs = 0;
		// 从0-99中找到一个能被(+5+7)/33整除的数
		// 在找到第一个满足的条件收 没必要进行额外的运算 这时候就可以终止循环 
		for(var i = 0 ; i < 100 ; i ++){
			// 求余数 余数为0  整除
			if((i+5+7)%33==0){
				console.log('找到了值为: '+i);
				rs = i;
				//终止当前循环
				break;
			}
		}
		alert(rs);

## 嵌套循环
   例如：
   		for(var i = 0 ; i < 3 ; i ++){
			for(var j = 0 ; j < 3 ; j ++){
				// for循环是可以嵌套的 
				//注意: for不能无限嵌套. 每嵌套一层,复杂度都会指数上升.
				// break 只能打断当前循环
				if(j==1){
					break;
				}
				console.log('i==>'+i);
				console.log('j==>'+j);
			}
		}

## continue
   		// 跳出当前循环的例子
		// 需求:找到0-100中所有能被3整除或者能被7整除的数
		
		for(var i = 0 ;i <= 100 ;  i++){
			// 只要满足了第一个条件 那么久不需要判断第二个条件
			if(i%3==0){
				console.log('被3整除==>'+i);
				//结束当次循环,直接进入下一次.
				continue;
			}

			if(i%7==0){
				console.log('被7整除==>'+i);
			}
		}

## 9x9乘法表循环
   例如：
   		for(var i = 1 ; i <= 9 ; i ++ ){
			var str = '';
			// 问: 每一行打印几个?
			for(var j = 1 ; j <= 9 ; j ++ ){
				//当j>i的时候 终止当前循环
				if(j>i){
					break;
				}
				str += + i+'*'+j+'='+i*j+' ';
				// console.log(i+'*'+j+'='+i*j);
			}
			console.log(str);
		}

## 数组
   创建数的方法：
   1.通过对象创建
   		var name = '张三';
		var age = 20;
		var arr = new Array();
   2.直接创建
   var ages = [20,21,18,22,28];

### 数组的使用方法，属性
    	//创建一个空数组
		var arr = [3,5,7];
		//注意: 数组一般用于存放同一类的数据集合
		var arr2 = [3,'张三',true,'5'];
		arr[0] = 1;
		arr[1] = 2;
		console.log(arr);
		console.log(arr2);
		//数组的属性:
		// xxx.abc() ==> 通过对象调用方法  小狗跑 小狗跳
		// xxx.abc  ==> 通过对象查看属性	 小狗的体重  小狗的颜色
		console.log('数组长度==>'+arr.length);

### 遍历数组
    	var arr = [3,1,65,283,1,3,32,1];
		//注意: 1. i从0开始
				// 2. i < arr.length
		for(var i = 0 ; i < arr.length ; i++){
			console.log('数组下标为'+i+'的值为==>'+arr[i]);
		}
		var arr = [3,1,23,23,15,213,5];
		// for ... in...
		for(var a in arr){
			// console.log('a==>'+a);
			console.log('下标为'+a+'的值为'+arr[a]);
		}
### 数组的合并
    		var arr1 = [1,3,5];
		var arr2 = [2,4,6];
		// 1.concat 合并  没有影响原来的数组
		console.log(arr1.concat(arr2));
		console.log(arr1);
		console.log(arr2);
		// 2. join  把数组转换为字符串
		var arr3 = ['a','b','c'];
		// 如果没有连接符 默认是,
		var str = arr3.join('^_^');
		console.log(str);
		// 3. split  把字符串打断为数组
		var str2 = 'Hello everyone today is a fine day!';
		// var arr4 = str2.split('o');
		//第二个参数是打断之后 取几个数组的值,可有可无
		var arr4 = str2.split('o',2);
		console.log(arr4);

### 数组插入和删除
    	var arr = [1,2];
		// 1.push  从后面插入一个值 ,并返回新的长度
		arr.push(3);
		// 2.unshift  从前面插入,并返回新的长度
		var rs = arr.unshift(0);
		console.log(arr);
		console.log('从前面插入一个值,返回新的长度为:'+rs);
		// 3.pop    删除最后一个元素 并且返回被删除的值
		// 4.shift   删除第一个元素 并且返回第一个删除的值
		var arr2 = ['a','b','c','d','e'];
		var rs1 = arr2.pop();
		var rs2 = arr2.shift();
		console.log(arr2);
		console.log('pop删除了==>'+rs1);
		console.log('shift删除了==>'+rs2);

## 冒泡泡排序
   冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。
   它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成。
   例如：
   		var arr = [10,8,1,7,5,2];
		for(var j = 0 ; j < arr.length - 1 ; j ++){
			// 第一轮
			for(var i = 0 ; i < arr.length - 1 - j; i ++){
				// 如果顺序错误,交换位置
				if(arr[i]>arr[i+1]){
					var temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;
				}
				// console.log(arr);
			}
			console.log('第'+(j+1)+'轮的结果为:');
			console.log(arr);
		}
		console.log('最终结果为:');
		console.log(arr);

## parseInt
   5种基本数据类型: string  number boolean undefined  null
   通过表单获取的数据  都是string(字符串)类型
   严谨起见: 把字符串 转换为 number类型
			// a) parseInt()
			// b) parseFloat()
   var num = parseInt(prompt('请输入数据?')); // string.

## 选择排序
   选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法。
   案例:
   var arr = [10,7,8,2,4];
		// 外层循环控制次数
		for(var j = 0 ; j < arr.length-1 ; j ++){
			// 1.找到最小值,并放到第一位
			// 默认最小值下标为0;
			var minIndex = j;
			for(var i = j+1 ; i < arr.length ; i ++){
				//如果默认最小下标的值> arr[某]个值
				if(arr[minIndex]>arr[i]){
					minIndex = i; // 1  3 
				}
			}
			// 如果最小下标不是默认值 需要交换,不然无需交换
			if(minIndex != j){
				//交换位置
				var temp = arr[j];
				arr[j] = arr[minIndex];
				arr[minIndex] = temp;
			}
			
			console.log('第'+(j+1)+'轮比完,获取最小值下标为:'+minIndex);
			console.log('第'+(j+1)+'轮交换完毕,结果为:');
			console.log(arr);
		}

## 函数
   var 是声明变量的
   function 关键字声明了一个函数,不调用是不会执行的
   函数就是封装的某些常用功能的对象.
   - 具名函数写法
   function say(){
			alert('Hi,你好!');
		}
		// xx.xx()==>调用对象方法的
		// xx.xx ==> 获取对象的属性
		say();

   - 匿名函数写法
   var say = function () {
			alert('Hi,你好!');
		}

		say();

## 函数注意的问题:
   - 1.具名函数,可以先使用,后声明;
   - 2.匿名函数,必须先赋值,后调用;(匿名函数很少用)
    函数的封装的作用:
	部分代码使用次数可能会很多，所以封装起来，需要的时候调用就可以了。
	函数就是可以重复执行的代码块,简化代码.提高效率;
	面试问题:面向对象编程是一种编程思想。特点：封装、继承、多态。

## 函数的参数
        需要计算两个值的和,首先需要参数.参数是函数和外界进行沟通的桥梁
		function add (x,y) {
		// x,y是add函数的形参 占位用的.
			alert(x+y);
		}
		add(5,8);
		// 5,8 是传递给add方法的实参 实际参数 会参与运算
		// 功能:封装了特定的方法
		// 函数名称一样,参数不同,叫方法(函数)
		 function add (x,y,z) {
		 	alert(x+y+z);
		 }
		 add(5,8,9);
		 // 重载:在java内可以重复使用以上两种方法,但是js内不能使用;
		 // 问题:
		 // 1. 实参比形参个数多 , 可以运算,但是只会计算形参的个数
		 function add (x,y) {
		 	alert(x+y+z);
		 }
		 add(5,8,9);
		 // 2. 实参比形参个数少. 计算错误!
		 function add (x,y,z) {
		 	alert(x+y+z);
		 }
		 add(5,8);

## 函数的返回值
   很多时候,只需要函数计算结果,并不需要处理结果,只需要函数给返回值
		function add (x,y) {
			var sum = x+y;
			return sum;
		}
		var rs = add(3,5);
		alert('收到函数的结果为'+rs);
		console.log('rs==>'+rs);

## 全局变量
   a> 函数的内部可以访问函数外部的变量,如果内部有变量,则优先使用内部变量
   b> 函数外部无法获取函数内部的变量;
   c> 函数内部声明变量,如果不用var直接声明,那么该变量会被当做全局变量!!!
   但是不推荐这样写,这是js语法不严谨导致的,实际上是错误代码!!!

## 立即执行函数
   函数分为三种
   1.具名函数
   function add(x,y) {
			return x+y;
		}
   2.匿名函数
   var sub = function(x,y){
			return x-y;
		}
   3.自执行函数
   ;(function(){
			alert('好难呀!!!');
		})();
	自执行函数开头前,一定要加;号(避免报错)

## 基本数据类型作为参数
   1. 基本数据类型作为参数
   2. 复杂对象类型作为参数
   注意: a++先使用,后执行++; var a = 1; var b = a++;  console.log('b=='+b); console.log('a=='+a);
   非常重要!基本数据类型作为参数传递,函数内部会创建该数据的副本,一切修改不会影响传进来的数据本身.

## 复杂对象作为参数传输
   复杂数据类型作为参数传递,在函数内部对该参数的修改,会直接影响到函数外部的该参数,因为本质上他们是同一个对象.

## 自定义对象
    对象是封装了一些属性和方法的合集
		 以下是js的内置对象的调用方法
		 1.Date
		 2.Math
		 3.自定义对象
			- 1.可以通过Object对象new
			- 2.这里Object是内置对象,所有对象的顶级对象
			- 此时 Object() 就是构造函数对象
			- obj/obj1 是通过对象Object创建出来的两个实例对象
    在js中,所有的对象都是函数,所有的函数也可以称之为'对象'
    在js中 this的指向在调用前是不确定的.
    script 有一个整体的运行对象  window对象 而window对象作为网页js的默认运行环境,一般不写.
	this在调用之前 是不知道指向谁的
	面试: 1. 构造函数对象的this指向new出来的实例对象
	键值对  key:value  key=value

## json
   对象类型是不能通过网络进行传输的,只能是文本形式
   1. 通过JSON.stringify(jsonObj) ==> 可以把json类型的对象转换为文本
   2. 通过JSON.parse ==> 可以把json字符串转换为对象
   对象和json类型的对象都可以通过 JSON.stringify() 转换为字符串,
   但是如果希望字符串转换json对象 必须用""

## 数组api
    1.  concat  连接
	2.  push  unshift   pop  shift
	3.  join
	var arr = [9,6,5,4,7,8,2,3,1];
	var arr2 = [9,6,5,4,7,8,2,3,1];
	var arr3 = ['ab','aa','ca','cb','ba','bb'];
	// 1. toString()  转换为字符串
		console.log(arr.toString());
	// 2. reverse()   翻转数组
		console.log(arr2.reverse());
	// 3. arr2.sort() 按照左边第一位排序
		console.log(arr3.sort());

## indexOf ; slice ; splice 
   - indexOf 可以找到数字对应的下标
   - slice 可以对数组下标进行截取,获取下标对应的数值
   - splice 可以通过下标对数组进行插入或者替换

## 清空数组
   arr.length = 0;一般使用这种方法
   arr = [];这种方法不建议使用

## sort 
   sort对于Unicode编码的字符 按字典顺序排

## string
   		var arr1 = '   hello,world! ';
		// 注意: 字符串里  空格 也算字符,几个空格就按照几个字符处理!!
		var arr2 = 'abcdefdaf';
		var arr3 = [1,2,3,4,5,6];
		var arr4 = '*1*2*3*4*5';
		var arr5 = '1*2*3*4*5*';
		var arr6 = 'ABCDEFDaf';
		// charAt()可以获取相应位置字符,(4)是下标;
		console.log(arr1.charAt(4));
		// charCodeAt()可以获取下标对应位置的字符在 Unicode 编码 的十进制编码
		console.log(arr2.charCodeAt(2));
		// indexOf 可以获取某个字符在字符串中的下标位置
		console.log(arr2.indexOf('z'));
		// 打印结果如果为-1,表示该字符串中没有此字符
		console.log(arr1.indexOf('h'));
		// lastIndexOf 获取某个字符在字符串中的最后的位置
		console.log(arr2.lastIndexOf('f'));
		// 这种写法可以获取该字符串中某个单词首个字母的下标位置
		console.log('asdfsdfkhelloljsadfhh'.indexOf('hello'));
		// concat 可以将字符串拼接
		console.log(arr1.concat(arr3));
		// slice 可以截取从下标为1开始到3截止(不包含3)的字符
		console.log(arr2.slice(1,3));
		// substr 可以获取从下标1开始到3截至(包含3)的字符
		console.log(arr2.substr(1,3));
		// 这种写法是可以从字符串中的下标3的位置开始截取到字符串的最一位字符
		console.log(arr2.substr(3));
		// 案例1:将该字符串'*1*2*3*4*5'第一位的*号去掉.
		console.log(arr4.substr(1));
		// 案例2:将该字符串'1*2*3*4*5*'最后一位的*号去掉.
		console.log(arr5.substr(0,arr5.length-1));
		// toUpperCase 可以将小写字母转换为大写
		console.log(arr2.toUpperCase());
		// toLowerCase 可以将大写字母转换为小写
		console.log(arr6.toLowerCase());