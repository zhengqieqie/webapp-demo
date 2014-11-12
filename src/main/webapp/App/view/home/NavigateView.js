Ext.define('App.view.home.NavigateView', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.navigateview',
	layout : 'accordion',
	title : '导航栏',
	items : [{
		xtype : 'treepanel',
		title : '分类1',
		iconCls : 'add',
		useArrows : true,
		rootVisible : false,
		store : Ext.create('Ext.data.TreeStore', {
			root : {
				expanded : true,
				children : [{
					text : "测试项目1",
					leaf : true
				}]
			}
		})
	}, {
		xtype : 'treepanel',
		title : '分类2',
		useArrows : false,
		rootVisible : false,
		store : Ext.create('Ext.data.TreeStore', {
			root : {
				expanded : true,
				children : [{
					text : "测试项目2",
					leaf : true
				}]
			}
		})
	}],
	initComponent : function() {
		this.callParent(arguments);
	}
});