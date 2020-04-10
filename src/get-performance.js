import getIterations from './get-iterations';

const obj = { a: { b: { c: { d: 1 } } } };
const badObj = {};

function formatNumber(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function getPerformance(callback) {
  const iterations = parseInt(getIterations());

  let prop;
  let badProp;

  const benchmarkStart = performance.now();

  for (let i = 0; i < iterations; i += 1) {
    const results = callback(obj, badObj);

    if (i === iterations - 1) {
      prop = results.prop;
      badProp = results.badProp;
    }
  }

  const benchmarkEnd = performance.now();

  const runTime = benchmarkEnd - benchmarkStart;

  const operationsPerSecond = (iterations / runTime) * 1000;

  return {
    runs: formatNumber(iterations),
    prop,
    badProp,
    runTime: Math.round(runTime),
    operationsPerSecond: formatNumber(operationsPerSecond),
  };
}

export default getPerformance;
