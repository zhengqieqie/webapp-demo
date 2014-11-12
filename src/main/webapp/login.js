Ext.application({
	name : 'login',
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : {
				type : 'vbox',
				align : 'center',
				pack : 'center'
			},
			items : [{
				xtype : 'container',
				items : [{
					xtype : 'form',
					title : '我的第一个网页-用户登录',
					frame : true,
					defaults : {
						xtype : 'textfield',
						padding : 10,
						labelWidth : 50,
						allowBlank : false
					},
					items : [{
						fieldLabel : '用户名',
						name : '用户名',
						afterLabelTextTpl : '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
					}, {
						fieldLabel : '密码',
						name : '密码',
						inputType : 'password',
						afterLabelTextTpl : '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
					}],
					buttons : [{
						xtype : 'button',
						text : '登陆',
						formBind : true,
						handler : function() {
							var info = this.up('form').getForm().getValues();
							if (info['用户名'] == 'admin' && info['密码'] == 'bangsun') {
								Ext.MessageBox.alert('登录成功', '正在跳转页面，请稍后...');
								window.location = 'index.html';
							} else {
								Ext.MessageBox.alert('登录失败', '用户名或密码不正确');
							}
							this.up('form').getForm().reset();
						}
					}, {
						xtype : 'button',
						text : '重置',
						handler : function() {
							this.up('form').getForm().reset();
						}
					}]
				}]
			}]
		});
	}
});