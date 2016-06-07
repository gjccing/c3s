import Selector from './selector.js';
import {getFromPath, getFromPathArray, listStruct} from './util.js';

function c3s(root, option) {
  return new Selector(root, option);
};

c3s.getFromPath = getFromPath;

export default c3s;
