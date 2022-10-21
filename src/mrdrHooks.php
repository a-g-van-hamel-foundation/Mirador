<?php

use MediaWiki\MediaWikiServices;
//use MediaWiki\ExtensionRegistry;
use MediaWiki\OutputPage;
//use MediaWiki\Parser;
use MediaWiki\ParserOutput;
use MediaWiki\PPFrame;

class mrdrHooks {

  /* Register hook for #cetei parser function */
  public static function onParserFirstCallInit( Parser $parser ) {

    // Parser function #mirador:
    $name = 'mirador';
    $functionCallback = [ 'mrdrPF', 'runMiradorPF' ];
    $flags = Parser::SFH_OBJECT_ARGS;
    $parser->setFunctionHook( $name, $functionCallback, $flags );
    return true;

  }

  public static function onBeforePageDisplay ( $out, $skin ) {
    //...
  }

}
