'use strict';

angular.module('regattaViewer.version', [
  'regattaViewer.version.interpolate-filter',
  'regattaViewer.version.version-directive'
])

.value('version', '0.1');
