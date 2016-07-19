import macro from './util.macro.js';
import macro from './traversal.macro.js';
import NodeInfo from './NodeInfo.js';

export function getFromPath(root, path, delimiter='/') {
  if (path.charAt(0) == delimiter) {
    path = path.substr(1);
  }
  
  return getFromPathArray(root, path.split(delimiter));
}

export function getFromPathArray(root, path) {
  var result = root;
  EVERY(path, (val, index, array) => {
    result = result[val];
    return (result != null);
  });
  return result;
}

export function listStruct(target, type='bfs') {
  var result = [];
  type = type.toLowerCase();
  if (type == 'bfs') {
    BREADTH_FIRST_TRAVERSAL(new NodeInfo(target), 0, Infinity, (nodeInfo)=>{
      result.push(nodeInfo);
    });
  } else if (type == 'dfs') {
    DEPTH_FIRST_TRAVERSAL(new NodeInfo(target), 0, Infinity, (nodeInfo)=>{
      result.push(nodeInfo);
    });
  }

  return result;
}
