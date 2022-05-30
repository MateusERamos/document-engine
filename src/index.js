"use strict";

import documentProcessor from "./Engine/DocumentProcessor";

if (typeof exports !== "undefined") {
  module.exports = documentProcessor;
} else {
  window.documentProcessor = documentProcessor;
}
