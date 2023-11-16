<?php

use MediaWiki\MediaWikiServices;
use MediaWiki\OutputPage;
use MediaWiki\ParserOutput;
use MediaWiki\PPFrame;

class mrdrHooks {

	/**
	 * Register hook for #mirador parser function
	 */
	public static function onParserFirstCallInit( Parser $parser ) {

		// Parser function #mirador:
		$name = 'mirador';
		$functionCallback = [ 'mrdrPF', 'runMiradorPF' ];
		$flags = Parser::SFH_OBJECT_ARGS;
		$parser->setFunctionHook( $name, $functionCallback, $flags );

		$parser->setFunctionHook( 'mirador-change-canvas', [ 'mrdrPF', 'runCanvasBtn' ], $flags ); 
		$parser->setFunctionHook( 'mirador-annot', [ 'mrdrPF', 'runAnnot' ], $flags );

		return true;

	}

	public static function onBeforePageDisplay ( $out, $skin ) {
		//...
	}

	/**
	 * Add links to special page of AdminLinks extension
	 * 
	 * @param ALTree &$adminLinksTree
	 * @return bool
	 */
	public static function addToAdminLinks( ALTree &$adminLinksTree ) {
		if ( ExtensionRegistry::getInstance()->isLoaded( 'Admin Links' ) == false ) {
			return true;
		}
		global $wgScript;
		$linkSection = $adminLinksTree->getSection( 'CODECS' );
		if ( is_null( $linkSection ) ) {
			$section = new ALSection( 'CODECS' );
			$adminLinksTree->addSection(
				$section,
				wfMessage( 'adminlinks_general' )->text()
			);
			$linkSection = $adminLinksTree->getSection( 'CODECS' );
			$extensionsRow = new ALRow( 'extensions' );
			$linkSection->addRow( $extensionsRow );
		}

		$extensionsRow = $linkSection->getRow( 'extensions' );

		if ( is_null( $extensionsRow ) ) {
			$extensionsRow = new ALRow( 'extensions' );
			$linkSection->addRow( $extensionsRow );
		}

		$realUrl = str_replace( '/index.php', '', $wgScript );
		$extensionsRow->addItem(
			ALItem::newFromExternalLink(
				$realUrl . '/index.php/Special:Mirador/About',
				'Mirador'
			)
		);

		return true;
	}

}
