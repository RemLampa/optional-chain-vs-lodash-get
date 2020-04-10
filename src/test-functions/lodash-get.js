import get from 'lodash.get';

function lodashGet(obj, badObj) {
  const prop = get(obj, 'a.b.c.d', 2);
  const badProp = get(badObj, 'a.b.c.d', 2);

  return {
    prop,
    badProp,
  };
}

export default lodashGet;
