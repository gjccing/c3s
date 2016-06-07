DEFINE_MACRO(COMPARE_TWO_ARRAY, function (m$array1, m$array2) {
  let m$result = true;

  if (m$array1.length == m$array2.length) {
    var m$i = 0, m$I = m$array1.length;
    while (m$i < m$I) {
      if (m$array1[m$i] !== m$array2[m$i]) {
        m$result = false;
        break;
      }
      
      m$i++;
    }
  } else {
    m$result = false;
  }

  return m$result;
});

DEFINE_MACRO(FOR_EACH, function(m$input, m$visitor) {
  let m$i = 0, m$I = m$input.length;
  while (m$i < m$I) {
    m$visitor(m$input[m$i], m$i, m$input);
    m$i++;
  }
});

DEFINE_MACRO(EVERY, function(m$input, m$visitor) {
  let m$result = true;

  let m$i = 0, m$I = m$input.length;
  while (m$i < m$I) {
    if (!m$visitor(m$input[m$i], m$i, m$input)) {
      m$result = false;
      break;
    }

    m$i++;
  }

  return m$result;
});

DEFINE_MACRO(OFFSET_EVERY, function(m$input, m$offse, m$visitor) {
  let m$result = true;

  let m$i = m$offse, m$I = m$input.length;
  while (m$i < m$I) {
    if (!m$visitor(m$input[m$i], m$i, m$input)) {
      m$result = false;
      break;
    }

    m$i++;
  }

  return m$result;
});

DEFINE_MACRO(SOME, function(m$input, m$visitor) {
  let m$result = false;

  let m$i = 0, m$I = m$input.length;
  while (m$i < m$I) {
    if (m$visitor(m$input[m$i], m$i, m$input)) {
      m$result = true;
      break;
    }

    m$i++;
  }

  return m$result;
});
DEFINE_MACRO(REVERSE_SOME, function(m$input, m$visitor) {
  let m$result = false;

  let m$i = m$input.length-1;
  while(m$i > 0) {
    if (m$visitor(m$input[m$i], m$i, m$input)) {
      m$result = true;
      break;
    }

    m$i--;
  }

  return m$result;
});


DEFINE_MACRO(FILTER, function(m$input, m$visitor) {
  const m$filtered = [];

  let m$i = 0, m$I = m$input.length, m$val;
  while (m$i < m$I) {
    m$val = m$input[m$i];
    if (m$visitor(m$val, m$i, m$input)) {
      m$filtered.push(m$val);
    }

    m$i++;
  }

  return m$filtered;
});

DEFINE_MACRO(MAP, (m$input, m$visitor) => {
  const m$length = m$input.length;
  const m$result = new Array(m$length);

  let m$i = 0, m$I = m$input.length;
  while (m$i < m$I) {
    m$result[m$i] = m$visitor(m$input[m$i], m$i, m$input);
    m$i++;
  }
  
  return m$result;
});

DEFINE_MACRO(REDUCE_BY_INITVAL, function(m$input, m$visitor, m$initialValue) {
  let m$result = m$initialValue;

  let m$i = 0, m$I = m$input.length;
  while (m$i < m$I) {
    m$result = m$visitor(m$result, m$input[m$i], m$i, m$input);
    m$i++;
  }

  return m$result;
});


DEFINE_MACRO(MAP_PUSH, function(m$map, m$key, m$newVal) {
  let m$array = m$map.get(m$key);
  if (m$array instanceof Array) {
    m$array.push(m$newVal);
  } else {
    m$map.set(m$key, [m$newVal]);
  }
});