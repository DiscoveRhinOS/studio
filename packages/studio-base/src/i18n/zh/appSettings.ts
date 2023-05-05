// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { TypeOptions } from "i18next";

export const appSettings: Partial<TypeOptions["resources"]["appSettings"]> = {
  settings: "设置",
  colorScheme: "配色方案",
  dark: "暗色",
  light: "亮色",
  followSystem: "跟随系统",
  language: "语言",
  displayTimestampsIn: "显示时间戳在",
  timestampFormat: "时间戳格式",
  messageRate: "消息速率",
  openLinksIn: "打开链接",
  webApp: "网页应用",
  desktopApp: "桌面应用",
  askEachTime: "每次询问",
  general: "通用",
  ros: "ROS",
  privacy: "隐私",
  privacyDescription: "更改将在下次启动 Foxglove Studio 时生效",
  sendAnonymizedUsageData: "发送匿名使用数据以帮助我们改进 Foxglove Studio",
  sendAnonymizedCrashReports: "发送匿名崩溃报告",
  experimentalFeatures: "实验性功能",
  experimentalFeaturesDescription: "这些功能不稳定，不建议日常使用。",
  studioDebugPanels: "Studio 调试面板",
  studioDebugPanelsDescription: "在“添加面板”列表中显示 Foxglove Studio 调试面板。",
  memoryUseIndicator: "内存使用指示器",
  memoryUseIndicatorDescription: "在侧边栏显示应用程序的内存使用情况。",
  newNavigation: "新版导航栏",
  newNavigationDescription: "使用新版导航栏。",
  restartTheAppForChangesToTakeEffect: " 重新启动应用程序以使更改生效。",
  layoutDebugging: "布局调试",
  layoutDebuggingDescription: "显示用于开发和调试布局存储的额外控件。",
  extensions: "扩展",
  about: "关于",
  noExperimentalFeatures: "目前没有实验性的功能。",
  ros2NativeConnection: "ROS 2 的本地连接",
  ros2NativeConnectionDescription: "启用已废弃的 ROS 2 本地连接器",
};
