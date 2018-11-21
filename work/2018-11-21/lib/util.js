// 当前util.js为工具类 任何人都可以使用
// 动态添加class
function addClass(el,className) {
	var oldClassStr = '';
	// 给标添加属性 添加之前应该先合并之前的class
	// 如果有class属性 ; 0 '' null  undefined false  ==> 在if()语句中都是false
	if (el.getAttribute('class')) {
		// 添加之前应该判断调用addClass的对象传入el有没有值 如果已经存在 直接return
		// 创建老class字符串 = 调用addClass的对象传入el的值
		oldClassStr = el.getAttribute('class');// null
		// 将老class字符串转换为数组oldClassArr,danger strong ==> ['danger','strong'];
		var oldClassArr = oldClassStr.split(' ');
		// 判断数组['danger','strong']是否存在className
		// 如果数组内下标对应的位置有class属性,不等于空(-1代表空)
		if (oldClassArr.indexOf(className)!=-1) {
			// 不等于空(已存在className),直接返回
			return ;
			// 否则
		}else {
			// 老class字符串 = 老class字符串 + '' ;
			oldClassStr += ' ';
		}
		// 追加 oldClassStr = oldClassStr + className;
		oldClassStr += className;
		// 将调用addClass的对象传入的el值,进行添加(setAttribute = 集合属性)
		el.setAttribute('class',oldClassStr);
	}
}
function delClass(el,className){
	// 判断调用delClass的对象传入el有没有class属性
	if (!el.getAttribute('class')) {
		// 如果没有属性直接返回
		return ;
	}
	var oldClassStr = el.getAttribute('class');
	var oldClassArr = oldClassStr.split(' ');
	var index = oldClassArr.indexOf(className);
	// 如果!=-1(不等于空),再执行
	if(index!=-1){
		// 执行删除
		oldClassArr.splice(index,1);
	}
	// 将数组转换字符串.重新赋值,['danger','active'] ==> 'danger active';
	oldClassStr = oldClassArr.join(' ');
	// 将新数值传回调用者
	el.setAttribute('class',oldClassStr);
}