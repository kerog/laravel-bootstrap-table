/**
 * @author: KEROGOS
 * @version: v0.0.1
 */

(function ($) {
	'use strict';

	$.extend($.fn.bootstrapTable.defaults, {
		originalUrl: '',
		query: '',
	});

	var BootstrapTable = $.fn.bootstrapTable.Constructor,
		_updatePagination = BootstrapTable.prototype.updatePagination,
		_initServer = BootstrapTable.prototype.initServer;

	BootstrapTable.prototype.updatePagination = function(){
		if(this.options.sidePagination === 'server'){
			this.options.url = this.options.originalUrl + (this.options.pageNumber ? '?page='+ this.options.pageNumber :'');
		}
		_updatePagination.apply(this, Array.prototype.slice.apply(arguments));
	};

	BootstrapTable.prototype.initServer = function (silent, query) {
		if(this.options.sidePagination === 'server'){
			if(query === null || query === undefined){
				query= this.options.query;
			} else
				this.options.query = query;
//			_initServer.apply(this, Array.prototype.slice.apply(arguments));
			_initServer.apply(this, [silent, query]);
		}
	};

})(jQuery);
