//HEAD 
(function(app) {
try { app = angular.module("employeeTemplates"); }
catch(err) { app = angular.module("employeeTemplates", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("js/department/departmentList.template.html","\n" +
    "<div class=\"page-header jumbotron\">\n" +
    "    <h1>Отделы</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"employee-catalog container\">\n" +
    "    <ul>\n" +
    "        <li class=\"col-lg-3 col-md-4 col-sm-6\" ng-repeat=\"department in $ctrl.departmentList\">\n" +
    "            <a class=\"department-button\" href=\"#!/departments/{{department.id}}/employees\">\n" +
    "                <span>{{department.name}}</span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<footer class=\"footer\">\n" +
    "</footer>")

$templateCache.put("js/employee/employee.template.html","\n" +
    "\n" +
    "\n" +
    "<div class=\"page-header jumbotron\">\n" +
    "    <h1 ng-if=\"$ctrl.employee\">\n" +
    "        Сотрудник\n" +
    "    </h1>\n" +
    "    <h1 ng-if=\"!$ctrl.employee\">\n" +
    "        Нет такого сотрудника\n" +
    "    </h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"employee-navbar\">\n" +
    "    <nav class=\"navbar navbar-default container employee-navbar\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <a class=\"navbar-brand\" href=\"#!/departments/\">\n" +
    "                Отделы\n" +
    "            </a>\n" +
    "            <a ng-if=\"$ctrl.department\" class=\"navbar-brand\" href=\"#!/departments/{{$ctrl.department.id}}/employees\">\n" +
    "                {{$ctrl.department.name}}\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"$ctrl.employee\" class=\"employee-catalog container\">\n" +
    "    <div class=\"media employee-item\" ng-if=\"$ctrl.employee\">\n" +
    "        <div class=\"media-left\">\n" +
    "            <img class=\"avatar-image\" data-ng-src=\"{{ $ctrl.photoData }}\">\n" +
    "            <input type=\"file\" ng-model=\"$ctrl.avatarUrl\" onchange=\"angular.element(this).scope().uploadImage(this.files, this.value)\" />\n" +
    "        </div>\n" +
    "        <div class=\"media-body\">\n" +
    "            <h4>{{ $ctrl.employee.name }}</h4>\n" +
    "            <p>\n" +
    "                <span class=\"field-hint\">Телефон:</span> {{ $ctrl.employee.phone }}\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                <span class=\"field-hint\">Отдел:</span> {{ $ctrl.department.name }}\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<footer class=\"footer\">\n" +
    "</footer>\n" +
    "\n" +
    "")

$templateCache.put("js/employee/employeeList.template.html","\n" +
    "<div class=\"page-header jumbotron\">\n" +
    "    <div ng-if=\"$ctrl.department\">\n" +
    "        <h1>Сотрудники</h1>\n" +
    "        <h2>отдела «{{$ctrl.department.name}}»</h2>\n" +
    "    </div>\n" +
    "    <h2 ng-if=\"!$ctrl.department\">\n" +
    "        Нет такого отдела\n" +
    "    </h2>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"employee-navbar\">\n" +
    "    <nav class=\"navbar navbar-default container employee-navbar\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <a class=\"navbar-brand\" href=\"#!/departments/\">Отделы</a>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"$ctrl.department\" class=\"employee-catalog container\">\n" +
    "    <h3 class=\"official-info-header\" ng-if=\"!$ctrl.employeeList.length\">Отдел пуст</h3>\n" +
    "    <h3 class=\"employee-count\">{{ $ctrl.employeeList.length }} сотрудник{{ ($ctrl.employeeList.length > 10 && $ctrl.employeeList.length < 19) ? 'ов' : {\n" +
    "            0 : 'ов',\n" +
    "            1 : '',\n" +
    "            2 : 'а',\n" +
    "            3 : 'а',\n" +
    "            4 : 'а',\n" +
    "            5 : 'ов',\n" +
    "            6 : 'ов',\n" +
    "            7 : 'ов',\n" +
    "            8 : 'ов',\n" +
    "            9 : 'ов',\n" +
    "        }[$ctrl.employeeList.length % 10] }}:</h3>\n" +
    "    <ul>\n" +
    "        <li class=\"media employee-item col-lg-4 col-md-6 col-sm-6\" ng-repeat=\"employee in $ctrl.employeeList\">\n" +
    "            <div class=\"media-body\">\n" +
    "                <h4>{{employee.name}}</h4>\n" +
    "            </div><div class=\"media-right\">\n" +
    "                <a href=\"#!/employees/{{employee.id}}\"\n" +
    "                   class=\"btn btn-default pull-right\" >\n" +
    "                    <div class=\"glyphicon glyphicon-file\"></div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<footer class=\"footer\">\n" +
    "</footer>")
}]);
})();