function es6OptionalChaining(obj, badObj) {
  const prop = obj?.a?.b?.c?.d || 2;

  const badProp = badObj?.a?.b?.c?.d || 2;

  return {
    prop,
    badProp,
  };
}

export default es6OptionalChaining;
