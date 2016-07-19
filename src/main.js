import Selector from './Selector.js';
import {getFromPath} from './util.js';

function c3s(root, option) {
  return new Selector(root, option);
};

c3s.getFromPath = getFromPath;

export default c3s;
