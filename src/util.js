import macro from './util.macro.js';
import macro from './traversal.macro.js';

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
    return (result !== undefined && result !== null);
  });
  return result;
}

export function listStruct(target, type='bfs', depth) {
  var result = [];
  type = type.toLowerCase();
  if (type == 'bfs') {
    BREADTH_FIRST_TRAVERSAL(target, depth, (val, path, parent)=>{
      result.push([path, parent, val]);
    });
  } else if (type == 'dfs') {
    DEPTH_FIRST_TRAVERSAL(target, (val, path, parent)=>{
      result.push([path, parent, val]);
    });
  }

  return result;
}
