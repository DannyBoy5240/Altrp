<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PageRedirect extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    //
    Schema::table( 'pages', function ( Blueprint $table ) {
      $table->string( 'redirect' )->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    //

    Schema::table( 'pages', function ( Blueprint $table ) {
      $table->dropColumn( 'redirect' );
    } );
  }
}
