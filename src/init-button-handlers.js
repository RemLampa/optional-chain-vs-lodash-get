import { enableButtons, disableButtons } from './toggle-buttons';

import es5OptionalChaining from './test-functions/es5-optional-chaining';
import es6OptionalChaining from './test-functions/es6-optional-chaining';
import lodashGet from './test-functions/lodash-get';

import getPerformance from './get-performance';

function createClickHandler(callback, cssSelector) {
  return function handleClick() {
    disableButtons();

    const {
      runs,
      prop,
      badProp,
      runTime,
      operationsPerSecond,
    } = getPerformance(callback);

    const resultElement = document.querySelector(cssSelector);

    resultElement.innerHTML = `Runs = ${runs} | Prop = ${prop} | Bad Prop = ${badProp} | Runtime = ${runTime} ms | Ops/Sec = ${operationsPerSecond}`;

    enableButtons();
  };
}

function initButtonHandlers() {
  const es5Button = document.querySelector('.button__es5-optional-chaining');
  const es6Button = document.querySelector('.button__es6-optional-chaining');
  const lodashGetButton = document.querySelector('.button__lodash-get');

  es5Button.onclick = createClickHandler(
    es5OptionalChaining,
    '.result__es5-optional-chaining span',
  );
  es6Button.onclick = createClickHandler(
    es6OptionalChaining,
    '.result__es6-optional-chaining span',
  );
  lodashGetButton.onclick = createClickHandler(
    lodashGet,
    '.result__lodash-get span',
  );
}

export default initButtonHandlers;
