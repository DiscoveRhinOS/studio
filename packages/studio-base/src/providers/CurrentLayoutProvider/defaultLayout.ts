// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { PanelsState } from "@foxglove/studio-base/context/CurrentLayoutContext/actions";
import { defaultPlaybackConfig } from "@foxglove/studio-base/providers/CurrentLayoutProvider/reducers";

/**
 * This is loaded when the user has no layout selected on application launch
 * to avoid presenting the user with a blank layout.
 */
export const defaultLayout: PanelsState = {
  "configById": {
    "Plot!3fa5k5u": {
      "title": "Plot",
      "paths": [
        {
          "value": "/topic.data",
          "enabled": true,
          "timestampMethod": "receiveTime"
        }
      ],
      "showXAxisLabels": true,
      "showYAxisLabels": true,
      "showLegend": true,
      "legendDisplay": "floating",
      "showPlotValuesInLegend": false,
      "isSynced": true,
      "xAxisVal": "timestamp",
      "sidebarDimension": 240
    }
  },
  "globalVariables": {},
  "userNodes": {},
  "linkedGlobalVariables": [],
  "playbackConfig": {
    "speed": 1,
    "messageOrder": "receiveTime"
  },
  "layout": "Plot!3fa5k5u"
} as const;
