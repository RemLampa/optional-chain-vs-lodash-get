/* eslint-disable no-nested-ternary */
function es5OptionalChaining(obj, badObj) {
  const prop =
    (obj.a == null
      ? undefined
      : obj.a.b == null
      ? undefined
      : obj.a.b.c == null
      ? undefined
      : obj.a.b.c.d) || 2;

  const badProp =
    (badObj.a == null
      ? undefined
      : badObj.a.b == null
      ? undefined
      : badObj.a.b.c == null
      ? undefined
      : badObj.a.b.c.d) || 2;

  return {
    prop,
    badProp,
  };
}

export default es5OptionalChaining;
