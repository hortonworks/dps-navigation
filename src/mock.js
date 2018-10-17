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
       "id":"27f3d642-a24d-4428-8a0a-4f2a0351333e",
       "name":"clusters",
       "displayName":"Clusters",
       "link":"/clusters",
       "external":null,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fas fa-server",
       "subMenu":[
 
       ]
    },
    {
        "id": "27f3d642-a24d-4428-8a0a-4f2a03514445",
        "name": "cluster-templates",
        "link": "cluster-templates",
        "displayName": "Cluster Templates",
        "icon": "fas fa-project-diagram"
      },
    {
       "id":"4b4cf6cd-2cd6-4c27-9cdc-819d77de5538",
       "name":"users",
       "displayName":"User Management",
       "link":"/users",
       "external":null,
       "prefix":"/caas",
       "parentId":null,
       "icon":"fa fa-users",
       "subMenu":[
 
       ]
    },
    {
       "id":"912755aa-93e5-4bcd-9b33-34302edb531d",
       "name":"applications",
       "displayName":"Applications",
       "link":"/services",
       "external":null,
       "prefix":"/core",
       "parentId":null,
       "icon":"fa fa-th-large",
       "subMenu":[
 
       ]
    },
    {
       "id":"7df4091a-da43-4816-a10e-e3deeed02395",
       "name":"credentials",
       "displayName":"Credentials",
       "link":"/credentials",
       "external":null,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fa fa-key",
       "subMenu":[
 
       ]
    },
    {
       "id":"8bc5c06a-acf7-4149-a555-03e1e70bfc51",
       "name":"blueprints",
       "displayName":"Blueprints",
       "link":"/blueprints",
       "external":null,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fa fa-th",
       "subMenu":[
 
       ]
    },
    {
       "id":"538ec2d5-0d4d-48bd-9dcc-1eee1d671992",
       "name":"cluster-extensions",
       "displayName":"Cluster Extensions",
       "link":"/cluster-extensions",
       "external":null,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fa fa-puzzle-piece",
       "subMenu":[
             {
                "id":"0e2014e9-d4fd-4c39-9ba9-25e6d8c969ca",
                "name":"recipes",
                "displayName":"Recipes",
                "link":"/cluster-extensions/recipes",
                "external":null,
                "prefix":"/cloudbreak",
                "parentId":"538ec2d5-0d4d-48bd-9dcc-1eee1d671992",
                "icon":"fa fa-file-code-o",
                "subMenu":[
 
                ]
             },
             {
                "id":"60042265-d95f-4fa7-b587-62f7bccf0001",
                "name":"management-packs",
                "displayName":"Management Packs",
                "link":"/cluster-extensions/mpacks",
                "external":null,
                "prefix":"/cloudbreak",
                "parentId":"538ec2d5-0d4d-48bd-9dcc-1eee1d671992",
                "icon":"fa fa-archive",
                "subMenu":[
 
                ]
             }
        ]
    },
    {
       "id":"fc355e8b-d010-41d5-9b65-3e031cc421b0",
       "name":"external-sources",
       "displayName":"External Sources",
       "link":"/shared-services",
       "external":null,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fa fa-share-alt-square",
       "subMenu":[
             {
                "id":"714af302-39a3-4193-bc72-5c3644a3e736",
                "name":"authentication-sources",
                "displayName":"Authentication Configurations",
                "link":"/shared-services/authentication-sources",
                "external":null,
                "prefix":"/cloudbreak",
                "parentId":"fc355e8b-d010-41d5-9b65-3e031cc421b0",
                "icon":"fa fa-key",
                "subMenu":[
 
                ]
             },
             {
                "id":"058d28f7-bf96-4440-a338-cddeea3c7231",
                "name":"metastores",
                "displayName":"Database Configurations",
                "link":"/shared-services/metastores",
                "external":null,
                "prefix":"/cloudbreak",
                "parentId":"fc355e8b-d010-41d5-9b65-3e031cc421b0",
                "icon":"fa fa-database",
                "subMenu":[
 
                ]
             },
             {
                "id":"499d9c72-6fc5-400e-8f81-84bade4bce58",
                "name":"imagecatalogs",
                "displayName":"Image Catalogs",
                "link":"/imagecatalogs",
                "external":null,
                "prefix":"/cloudbreak",
                "parentId":"fc355e8b-d010-41d5-9b65-3e031cc421b0",
                "icon":"fa fa-file-text-o",
                "subMenu":[
 
                ]
             },
             {
                "id":"a9a94a20-2218-47ae-9e3b-333177d90ade",
                "name":"proxies",
                "displayName":"Proxy Configurations",
                "link":"/shared-services/proxies",
                "external":null,
                "prefix":"/cloudbreak",
                "parentId":"fc355e8b-d010-41d5-9b65-3e031cc421b0",
                "icon":"fa fa-plug",
                "subMenu":[
 
                ]
             }
        ]
    },
    {
       "id":"135d9b8a-dc52-49e9-9345-9c98baa24c27",
       "name":"settings",
       "displayName":"Settings",
       "link":"/settings",
       "external":null,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fa fa-cogs",
       "subMenu":[
 
       ]
    },
    {
       "id":"248a7137-4200-43d5-9352-8ce7f14f8d98",
       "name":"documentation",
       "displayName":"Documentation",
       "link":"https://docs.hortonworks.com/HDPDocuments/Cloudbreak/Cloudbreak-2.9.0/index.html",
       "external":true,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fa fa-book",
       "subMenu":[
 
       ]
    },
    {
       "id":"2be010b5-19a0-4cc2-b9a1-486f937c6682",
       "name":"help",
       "displayName":"Help",
       "link":"https://community.hortonworks.com/topics/hortonworks-cloud.html",
       "external":true,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fa fa-question-circle",
       "subMenu":[
 
       ]
    },
    {
       "id":"03690978-04a5-4572-b3db-3f4930313e4e",
       "name":"logout",
       "displayName":"Logout",
       "link":"/logout",
       "external":null,
       "prefix":"/cloudbreak",
       "parentId":null,
       "icon":"fas fa-sign-out-alt",
       "subMenu":[
 
       ]
    }
 ]

export default menu
