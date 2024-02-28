// Skipping imports
import * as example from "example.js";
import * as example from "example.js";

import { get_data, get_data2 } from "example.js";

/// Saying things over
/// multiple lines of code

/* Multiline comments */
/**
 * Multiline comments 2
 *
 */

function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}
