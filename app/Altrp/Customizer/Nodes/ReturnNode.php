<?php


namespace App\Altrp\Customizer\Nodes;


use Illuminate\Support\Collection;

class ReturnNode extends BaseNode implements NodeInterface
{
  public $data = null;



  public function getChildren(): array
  {
    // TODO: Implement getChildren() method.
    return [];
  }
  public function getContent(): string
  {
    // TODO: Implement getContent() method.
    return '';
  }
  function parseCustomizerData( Collection $data  ): bool
  {
    // TODO: Implement parseData() method.
    if( ! $data ) {
      $data = [];
    }
    $data = collect( $data );
    $this->data = $data->filter( function ( $item ) {
      return data_get( $item, 'type' ) === 'start';
    })->first();
    return true;
  }

  /**
   * @return string
   */
  public function getRequestType():string{
    return data_get( $this->data, 'data.request_type', 'get' );
  }

  public function getProperty(): array
  {
    return data_get( $this->data, 'data.property', [] );
  }
  public function getPHPContent(): string
  {
    $property = $this->getProperty();
    $property = property_to_php( $property );
    return "return " . $property . ";";
  }
}
