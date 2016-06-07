
DEFINE_MACRO(BREADTH_FIRST_TRAVERSAL, (m$target, m$depth, m$visitor) => {
  var m$buffer = [[m$target, [], []]];
  var m$tmp, m$node, m$path, m$parent;
  var m$key, m$newNode;
  while (m$buffer.length) {
    m$tmp = m$buffer.shift();
    m$node = m$tmp[0];
    m$path = m$tmp[1];
    m$parent = m$tmp[2];
    if (m$depth === undefined || m$path.length == m$depth) {
      m$visitor(m$node, m$path, m$parent);
    }
    if (typeof m$node == 'object' && (m$depth === undefined || m$path.length < m$depth)) {
      m$parent = m$parent.slice();
      m$parent.push(m$node);
      for (m$key in m$node) {
        m$newNode = m$node[m$key];
        if (m$parent.indexOf(m$newNode) == -1) {
          m$buffer.push([m$newNode, m$path.concat(m$key), m$parent]);
        }
      }
    }
  }
});

DEFINE_MACRO(BREADTH_FIRST_SEARCH, (m$target, m$depth, m$visitor) => {
  var m$result;

  var m$buffer = [[m$target, [], []]];
  var m$tmp, m$node, m$path, m$parent;
  var m$key, m$newNode;
  while (m$buffer.length) {
    m$tmp = m$buffer.shift();
    m$node = m$tmp[0];
    m$path = m$tmp[1];
    m$parent = m$tmp[2];
    if (m$depth === undefined || m$path.length == m$depth) {
      if (m$visitor(m$node, m$path, m$parent)){
        m$result = [m$node, m$path, m$parent];
        break;
      }
    } else if (typeof m$node == 'object' && (m$depth === undefined || m$path.length < m$depth)) {
      m$parent = m$parent.slice();
      m$parent.push(m$node);
      for (m$key in m$node) {
        m$newNode = m$node[m$key];
        if (m$parent.indexOf(m$newNode) == -1) {
          m$buffer.push([m$newNode, m$path.concat(m$key), m$parent]);
        }
      }
    }
  }

  return m$result;
});

DEFINE_MACRO(DEPTH_FIRST_TRAVERSAL, (m$target, m$visitor) => {
  var m$traverse = function m$traverse(m$node, m$path, m$parent) {
    m$visitor(m$node, m$path, m$parent);
    if (typeof m$node == 'object') {
      var m$key, m$newNode;
      m$parent = m$parent.slice();
      m$parent.push(m$node);
      for (m$key in m$node) {
        m$newNode = m$node[m$key];
        if (m$parent.indexOf(m$newNode) == -1) {
          m$traverse(m$newNode, m$path.concat(m$key), m$parent)
        }
      }
    }
  };

  m$traverse(m$target, [], []);
});

DEFINE_MACRO(DEPTH_FIRST_SEARCH, (m$target, m$visitor) => {
  var m$traverse = function m$traverse(m$node, m$path, m$parent) {
    if (m$visitor(m$node, m$path, m$parent)) {
      return [m$node, m$path, m$parent];
    }

    if (typeof m$node == 'object') {
      var m$key, m$newNode, m$tmp;
      m$parent = m$parent.slice();
      m$parent.push(m$node);
      for (m$key in m$node) {
        m$newNode = m$node[m$key];
        if (m$parent.indexOf(m$newNode) == -1) {
          if (m$tmp = m$traverse(m$newNode, m$path.concat(m$key), m$parent)) {
            return m$tmp;
          }
        }
      }
    }
  };

  return m$traverse(m$target, [], []);
});
