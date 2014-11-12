delete Ext.tip.Tip.prototype.minWidth; // 去掉在谷歌浏览器下的bug

Ext.application({
	name : 'App',
	appFolder : 'App',
	views : ['home.TopBar', 'home.NavigateView'],
	launch : function() {
		// version=1.0.0
		Ext.create('Ext.container.Viewport', {
			layout : 'border',
			items : [{
				region : 'north',
				html : '<h1 class="x-panel-header">Page Title</h1>',
				borde1r : false,
				margins : '0 0 5 0'
			}, {
				xtype : 'navigateview',
				region : 'west',
				collapsible : true,
				width : 150
			}, {
				region : 'center',
				xtype : 'tabpanel', // TabPanel itself has no title
				activeTab : 0, // First tab active by default
				items : {
					title : 'Default Tab',
					html : 'The first tab\'s content. Others may be added dynamically'
				}
			}]
		});
	}
});