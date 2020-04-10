import { enableButtons } from './toggle-buttons';
import initButtonHandlers from './init-button-handlers';

window.onload = function run() {
  initButtonHandlers();

  enableButtons();
};
