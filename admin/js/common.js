
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 检测是否登录
	$.ajax({
		url: '/api/employee/checkRootLogin',
		type: 'get',
		success: function (info) {
			// console.log(info);
			if (info.error) return location.href = '/admin/login.html';
		}
	});

	// 退出登录
	$('.fa-sign-out').parents('li').on('click', function () {
		$.ajax({
			url: '/api/employee/employeeLogout',
			type: 'get',
			success: function(info) {
				// 退出成功就返回到登录页面
				if (info.success) {
					// 完成用户从哪里来 回哪里去
					return location.href = '/admin/login.html?url=' + location.href;
				}
				
			}
		})
	})