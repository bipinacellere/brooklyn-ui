/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
import angular from 'angular';
import template from './suggestion-dropdown.html';

const MODULE_NAME = 'brooklyn.components.custom-config-widget.suggestion-dropdown';

angular.module(MODULE_NAME, [])
    .directive('suggestionDropdown', ['$rootScope', suggestionDropdownDirective]);

export default MODULE_NAME;

export function suggestionDropdownDirective($rootScope) {
    return {
        restrict: 'E',
        scope: {
            item: '=',
            params: '=',
        },
        template: template,
        link: link,
    };

    function link(scope) {
        scope.specEditor = scope.$parent;
        scope.getSuggestions = () => {
            var result = [];
            if (scope.params['suggestion-values']) {
                scope.params['suggestion-values'].forEach( (v) => {
                    if (v["value"]) {
                        result.push(v);
                    } else {
                        result.push({value: v});
                    }
                });
                return result;
            }
        };
    }
    
}