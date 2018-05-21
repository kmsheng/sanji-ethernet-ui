import angular from 'angular';
import './sanji-ethernet-info.tpl.html';
import EthernetInfoContainer from './ethernet-info.container';
import EthernetInfoComponent from './ethernet-info.component';

const sjEthernetInfo = angular
  .module('sanji.ethernet.info', [])
  .component('sanjiEthernetInfoContainer', EthernetInfoContainer)
  .component('sanjiEthernetInfo', EthernetInfoComponent).name;

export { sjEthernetInfo };
