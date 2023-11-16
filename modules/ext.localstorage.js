( function ( mw, $ ) {
	'use strict';
/**
 * Library of methods for use with ext.mirador.js
 */

const LocalStorageUtil = {

	/**
	 * Gets annotations from local storage
	 * And prints JSON to a textarea
	 */
	initFetchAnnotations: function( canvasIds = [] ) {
		//console.log( canvasIds );
		var storageKeys = LocalStorageUtil.getLocalStorageKeys();
		var annotationArr = LocalStorageUtil.getAnnotationsFromLocalStorage( storageKeys, canvasIds );
		return annotationArr;
	},

	/**
	 * Get items keys in local storage that match canvasIds in manifest
	 * Then get relevant annotation pages
	 * e.g. localStorage://?canvasId=https://www.isos.dias.ie/manuscript/CLON_The_Shield_of_Fionn/seq/04.tif
	 * 
	 * @param array storageKeys 
	 * @param array canvasIds
	 */
	getAnnotationsFromLocalStorage: function( storageKeys, canvasIds ) {
		var intersectionArr = canvasIds.filter( val => storageKeys.includes( val ));
		//var jsonStr = annotationArr.toString(); // convert json to object
		var annotationArr = [];
		intersectionArr.forEach( function ( canvasId ) {
			var storid = "localStorage://?canvasId=" + canvasId;
			annotationArr.push( localStorage.getItem(storid) );
		});
		return annotationArr;
	},

	getAnnotationKeysFromLocalStorage: function( canvasIds ) {
		var storageKeys = LocalStorageUtil.getLocalStorageKeys();
		var intersectionArr = canvasIds.filter( val => storageKeys.includes( val ));
		var annotationIds = [];
		intersectionArr.forEach( function ( canvasId ) {
			var storid = "localStorage://?canvasId=" + canvasId;
			annotationIds.push( storid );
		});
		return annotationIds;
	},

	/**
	 * get canvas ids from manifest
	 * Call this function rightaway so the ids are available
	 * @todo drop this
	 * @todo IIIF v3
	 * @param {*} manifest 
	 * @param {*} version 
	 * @returns array
	 */
	getCanvasIds: function ( manifest, version = 2 ) {
		var canvasIds = [];
		$.getJSON( manifest, function( data ) {
			//console.log( data );
			var canvases = data.sequences[0].canvases;
			canvases.forEach( function (canvas) {
				canvasIds.push( canvas['@id'] );
			});
		});
		return canvasIds;
	},

	/**
	 * Get keys used in Local Storage, without prefix
	 * only those beg. with "localStorage://?canvasId="
	 * @returns Get keys used in Local Storage
	 */
	getLocalStorageKeys: function() {
		var keys = [];
		for ( var i = 0; i < localStorage.length; i++ ) {
			var storkey = localStorage.key(i);
			if ( storkey.startsWith( "localStorage://?canvasId=" ) ) {
				keys[i] = storkey.replace( "localStorage://?canvasId=", "" );
				//or push to array keys.push( ... );
			}
		}
		return keys;
	},

	/**
	 * If annotations are imported from a manifest
	 * Remove the duplicates from localStorage
	 */
	clearDuplicateStorage: function ( keys ) {
		//
	},

	/**
	 * id, items, type=AnnotationPage
	 * @param string rawStr
	 */
	addItemStrToLocalStorage: function( rawStr ) {
		// envelop in array even if there is one only
		//console.log( rawStr );
		var rawStr = ( rawStr.startsWith( "[" ) ) ? rawStr : `[${rawStr}]`;
		var jsonObj = $.parseJSON( rawStr );
		for ( const [ key, value ] of Object.entries( jsonObj ) ) {
			// key is numeric
			// val consists of id (same as storage id), items (annotation items) and type (AnnotationPage)
			var annotPageStr = JSON.stringify( value );
			var storId = value['id'];
				// var valStr = JSON.stringify( value );
			//console.log( "storId: " + storId );
			//console.log( "annotPageStr: " + annotPageStr );
			localStorage.setItem( storId, annotPageStr );
			// Should override existing 
		}
	}

};

mw.LocalStorageUtil = LocalStorageUtil;
module.exports = LocalStorageUtil;

}( mediaWiki, jQuery ) );

