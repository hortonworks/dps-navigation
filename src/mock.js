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

let menu = [
    {
        "id": 1,
        "name": "clusters",
        "displayName": "Clusters",
        "link": "clusters",
        "parentId": 1,
        "position": 0,
        "icon": "fa fa-server",
        "subMenu": [
            {
                "id": 3,
                "name": "templates",
                "displayName": "Templates",
                "link": "templates",
                "parentId": 1,
                "position": 1,
                "subMenu": [
                    {
                        "id": 7,
                        "name": "test",
                        "displayName": "Test",
                        "link": "test",
                        "parentId": 4,
                        "position": 3,
                        "subMenu": []
                    }
                ]
            },
            {
                "id": 4,
                "name": "blueprints",
                "displayName": "Blue Prints",
                "link": "blueprints",
                "parentId": 2,
                "position": 1,
                "subMenu": []
            },
            {
                "id": 5,
                "name": "recipes",
                "displayName": "Recipes",
                "link": "recipes",
                "parentId": 3,
                "position": 1,
                "subMenu": []
            },
            {
                "id": 6,
                "name": "subscription",
                "displayName": "Subscription",
                "link": "subscription",
                "parentId": 4,
                "position": 1,
                "subMenu": []
            }
        ]
    },
    {
        "id": 2,
        "name": "cloud_manager",
        "displayName": "Cloud Manager",
        "link": "cloud-manager",
        "parentId": 1,
        "position": 0,
        "icon": "fa fa-cogs",
        "subMenu": []
    },
    {
        "id": 7,
        "name":"doc",
        "displayName":"Documentation",
        "link":"https://docs.hortonworks.com/HDPDocuments/DP/DP-1.2.0/installation/content/dps_installation_overview_dps_services_engines_and_agents.html",
        "external":true,
        "icon":"fa fa-book"
     }
]

export default menu
