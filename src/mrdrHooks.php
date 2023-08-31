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

    return true;

  }

  public static function onBeforePageDisplay ( $out, $skin ) {
    //...
  }

}
