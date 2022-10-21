<?php
use MediaWiki\MediaWikiServices;
use MediaWiki\MainConfigNames;
use MediaWiki\OutputPage;
use MediaWiki\ParserOutput;
use MediaWiki\PPFrame;

/* Required: */
use MediaWiki\Revision\RevisionRecord;

class mrdrPF {

  public static function runMiradorPF ( $parser, $frame, $params ) {
    $paramManifestURL = ''; //default
    $paramCanvasID = null;
    $paramTheme = 'light'; //light, dark
    $paramWorkspaceType = 'mosaic';  //mosaic, elastic
    $paramThumbNavPosition = 'off';  //off, far-bottom or far-right
    $paramImageToolsOpen = false;
    $paramImageToolsEnabled = false;
    $paramCanvasLinkEnabled = false;
    $paramPageUrl = 'undefined';
    if ( $params == null || $params == 'undefined' ) {
      return false;
    }
    $parser->getOutput()->addModules( [ 'ext.mirador.core' ] );
    foreach ( $params as $i => $param ) {
      $paramExpanded = $frame->expand($param);
      $keyValPair = explode( '=', $paramExpanded, 2 );
      $paramName = trim( $keyValPair[0] );
      $value = trim( $keyValPair[1] );
      switch ( $paramName ) {
        case 'manifest': $paramManifestURL = $value;
        break;
        case 'canvasid': $paramCanvasID = $value;
        break;
        case 'theme': $paramTheme = $value;
        break;
        case 'workspacetype': $paramWorkspaceType = $value;
        break;
        case 'thumbnavposition': $paramThumbNavPosition = $value;
        break;
        case 'imagetoolsopen': $paramImageToolsOpen = $value;
        break;
        case 'imagetoolsenabled': $paramImageToolsEnabled = $value;
        break;
        case 'canvaslinkenabled': $paramCanvasLinkEnabled = $value;
        break;
        case 'pageurl': $paramPageUrl = $value;
        break;
      }
    }//foreach
    $str = "<div id='miradorframe' class='miradorframe' data-manifest-url='{$paramManifestURL}' data-canvasid='{$paramCanvasID}' data-theme='{$paramTheme}' data-workspace-type='{$paramWorkspaceType}' data-thumbnav-position='{$paramThumbNavPosition}' data-imagetools-open='{$paramImageToolsOpen}' data-canvaslink-enabled='{$paramCanvasLinkEnabled}' data-page-url='{$paramPageUrl}'></div>";
    return $str;
  }//f

}
