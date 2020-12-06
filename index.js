/**
 * @author: KEROGOS
 * @version: v0.0.4
 */

(function ($) {
	'use strict';

	var BootstrapTable = $.fn.bootstrapTable.Constructor,
		_initServer = BootstrapTable.prototype.initServer;

	BootstrapTable.prototype.initServer = function (silent, query) {
		if(this.options.sidePagination === 'server'){
			if(query === null || query === undefined){
				query= this.options.query || {};
			} else
				this.options.query = query;
				query.page = this.options.pageNumber
			_initServer.apply(this, [silent, query]);
		} else {
			_initServer.apply(this, [silent, query]);
		}
	};
})(jQuery);
