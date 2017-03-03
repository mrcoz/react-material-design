/**
 *
 * PATCH to make React work with custom attributes.
 *
 */
HTMLDOMPropertyConfig.isCustomAttribute = function(attr) {
      // Strip off custom attributes React puts for its working.
      if ({children: 1}[attr]) { return false; }

      // Take any attribute (with correct syntax) as custom attribute.
      return /^(data|aria)*-*[a-z_][a-z\d_.\-]*$/.test(attr)
};
