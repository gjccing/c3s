
DEFINE_MACRO(BREADTH_FIRST_TRAVERSAL, (m$nodeInfo, m$startDepth, m$endDepth, m$visitor) => {
  var m$buffer = [m$nodeInfo];
  var m$tmpNodeInfo, m$key, m$newNode;
  while (m$buffer.length) {
    m$tmpNodeInfo = m$buffer.shift();
    if (m$startDepth <= m$tmpNodeInfo.path.length) {
      m$visitor(m$tmpNodeInfo);
    }

    if (typeof m$tmpNodeInfo.node == 'object' && m$tmpNodeInfo.path.length < m$endDepth) {
      for (m$key in m$tmpNodeInfo.node) {
        m$newNode = m$tmpNodeInfo.node[m$key];
        if (m$tmpNodeInfo.parent.indexOf(m$newNode) == -1) {
          m$buffer.push(m$tmpNodeInfo.getChild(m$key));
        }
      }
    }
  }
});

DEFINE_MACRO(BREADTH_FIRST_SEARCH, (m$nodeInfo, m$startDepth, m$endDepth, m$visitor) => {
  var m$result;
  var m$buffer = [m$nodeInfo];
  var m$tmpNodeInfo, m$key, m$newNode;
  while (m$buffer.length) {
    m$tmpNodeInfo = m$buffer.shift();
    if (m$startDepth <= m$tmpNodeInfo.path.length) {
      if (m$visitor(m$tmpNodeInfo)) {
        m$result = m$tmpNodeInfo;
        break;
      }
    } 

    if (typeof m$tmpNodeInfo.node == 'object' && m$tmpNodeInfo.path.length < m$endDepth) {
      for (m$key in m$tmpNodeInfo.node) {
        m$newNode = m$tmpNodeInfo.node[m$key];
        if (m$tmpNodeInfo.parent.indexOf(m$newNode) == -1) {
          m$buffer.push(m$tmpNodeInfo.getChild(m$key))
        }
      }
    }
  }

  return m$result;
});

DEFINE_MACRO(DEPTH_FIRST_TRAVERSAL, (m$nodeInfo, m$startDepth, m$endDepth, m$visitor) => {
  var m$traverse = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
    if (m$_startDepth <= m$_nodeInfo.path.length) {
      m$visitor(m$_nodeInfo);
    }

    if (typeof m$_nodeInfo.node == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
      var m$key, m$newNode;
      for (m$key in m$_nodeInfo.node) {
        m$newNode = m$_nodeInfo.node[m$key];
        if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
          m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth);
        }
      }
    }
  };

  m$traverse(m$nodeInfo, m$startDepth, m$endDepth);
});

DEFINE_MACRO(DEPTH_FIRST_SEARCH, (m$nodeInfo, m$startDepth, m$endDepth, m$visitor) => {
  var m$traverse = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
    if (m$_startDepth <= m$_nodeInfo.path.length) {
      if (m$visitor(m$_nodeInfo)) {
        return m$_nodeInfo;
      }
    }

    if (typeof m$_nodeInfo.node == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
      var m$key, m$newNode, m$tmp;
      for (m$key in m$_nodeInfo.node) {
        m$newNode = m$_nodeInfo.node[m$key];
        if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
          if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
            return m$tmp;
          }
        }
      }
    }
  };

  return m$traverse(m$nodeInfo, m$startDepth, m$endDepth);
});
