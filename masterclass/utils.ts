// const util = require("util");
import * as util from "util";

export const log = (val: any) =>
  console.log(util.inspect(val, false, null, true));
