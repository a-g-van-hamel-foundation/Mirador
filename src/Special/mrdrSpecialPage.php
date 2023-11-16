<?php
/**
 * List basic information about the extension
 *
 * @author: Dennis Groenwegen
 * @file
 * @ingroup
 */
namespace mrdr\Special;

class mrdrSpecialPage extends \SpecialPage {

	public function __construct( $name = 'Mirador' ) {
		parent::__construct( $name );
	}

	function isExpensive() {
		return false;
	}

	function isSyndicated() {
		return false;
	}

	public function execute( $subPage ) {
		$out = \RequestContext::getMain()->getOutput();
		$res = '';
		$this->setHeaders();

		$this->getOutput()->addModuleStyles( [ 'ext.mirador.special' ] );
		$pageHeader = self::buildPageHeader();

		$res = $pageHeader;
		$out->addWikiTextAsContent( $res );

	}

    private function buildPageHeader( ) {
        $res = $headerItems = '';
		$extJsonStr = self::fetchExtensionJson();
        if ( $extJsonStr == false ) {
            return $res;
        }

		$extDescription = $extJsonStr['description'];
		$headerItems .= "<div class='mirador-item'><strong class='label'>Description</strong><div class='description'>{$extDescription}</div></div>";

		$extCurrentVersion = $extJsonStr['version'];
		$headerItems .= "<div class='mirador-item'><strong class='label'>Extension version</strong><div class='description'>{$extCurrentVersion}</div></div>";

		$extAuthors = $extJsonStr['author']; //array
		$extAuthorInfo = '';
		foreach ( $extAuthors as $i => $author ) {
			$extAuthorInfo .= "<div>{$author}</div>";
		}
		$headerItems .= "<div class='mirador-item'><strong class='label'>Authors</strong><div class='description'>{$extAuthorInfo}</div></div>";

		$githubUrl = $this->msg( 'mirador-github-url' )->text();
		//$githubUrl = \Html::element( '', null, $this->msg( 'mirador-github-url' )->text() );
		$headerItems .= "<div class='mirador-item'><strong class='label'>Code repository</strong><div class='description'>[{$githubUrl} Github]</div></div>";

		$labUrl = $this->msg( 'mirador-lab-url' )->text();
		$headerItems .= "<div class='mirador-item'><strong class='label'>Usage</strong><div class='description'>[{$githubUrl} Github] (general)<br>[{$labUrl} CODECS Lab] (additional)</div></div>";

		$libVersion = $this->msg( 'mirador-lib-version' );
		$libUrl = $this->msg( 'mirador-lib-url' )->text();
		$headerItems .= "<div class='mirador-item'><strong class='label'>Mirador library</strong><div class='description'>[{$libUrl} Mirador {$libVersion}]</div></div>";

		$pluginAnnot = $this->msg( 'mirador-plugin-annotations' )->text();
		$pluginImageTools = $this->msg( 'mirador-plugin-imagetools' )->text();
		$pluginImageCropper = $this->msg( 'mirador-plugin-imagecropper' )->text();
		$pluginCanvasLink = $this->msg( 'mirador-plugin-canvaslink' )->text();
		$pluginTextOverlay = $this->msg( 'mirador-plugin-textoverlay' )->text();
		$headerItems .= "<div class='mirador-item'><strong class='label'>Mirador plugins</strong><div class='description'>{$pluginAnnot}, {$pluginImageTools}, {$pluginImageCropper}, {$pluginCanvasLink}, {$pluginTextOverlay}</div></div>";

        $res .= "<div class='mirador-specialpage-header'>{$headerItems}</div>";
		return $res;
    }

    private static function fetchExtensionJson() {
		global $IP;
		$jsonSource = "$IP/extensions/Mirador/extension.json";
		if ( file_exists( $jsonSource ) ) {
			$jsonContents = file_get_contents( $jsonSource );
			$jsonStr = json_decode( $jsonContents, true );
			if ( $jsonStr !== false ) {
				return $jsonStr;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

}
