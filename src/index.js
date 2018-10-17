/** @jsx h */

/*
 * Copyright (c) 2018, Hortonworks Inc.  All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied.  See the License for the specific language governing permissions and limitations
 * under the License.
 */

import { h, render } from "preact";
import DPSNavWidget from "./components/menu";
import '!style-loader!css-loader!@fortawesome/fontawesome-free/css/all.min.css';

export function init(options) {
  render(<DPSNavWidget collapseOnInit={options.collapseOnInit} standalone={options.standalone}
    urlPrefix={options.urlPrefix}
    onCollapse={options.onCollapse} onExpand={options.onExpand} navigate={options.navigate} />,
    document.getElementById(options.id));
}
