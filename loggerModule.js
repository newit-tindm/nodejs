import { TYPE_LOG } from './constants.js';

function loggerModule(log, type = TYPE_LOG) {
    console[type](log);
}

export default loggerModule;