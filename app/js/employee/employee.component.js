

angular
    .module('employee')
    .component('employee', {
        'templateUrl' : 'js/employee/employee.template.html',
        'controller' : ['employeeData', '$scope', '$routeParams', 'localStorageService', function (employeeData, $scope, $routeParams, localStorageService) {
            var self       = this,
                employeeId = $routeParams.employeeId;

            this.photoData = null;
            this.employee = null;
            this.department = null;
            this.isNotValidType = false;
            this.isNotValidSize = false;
            this.avatarFormatRegexp = /^image\/(:?bmp)|(:?jpg)|(:?jpeg)|(:?png)|(:?gif)|(:?svg)$/;
            this.maxAvatarKBSize = 15;
            this.maxAvatarSize = this.maxAvatarKBSize * 1024;

            this.setNewPhoto = function (data) {
                var ids   = localStorageService.get('photosIds'),
                    maxId = Math.max.apply(null, ids),
                    newId = String(parseInt(maxId, 10) + 1);

                ids.push(newId);
                localStorageService.set('photosIds', ids);
                localStorageService.set('photos#' + newId, {
                    data : data,
                    id : newId
                });
                self.photoData = data;
                self.employee.photo = newId;
                localStorageService.set('employees#' + self.employee.id, self.employee);
                $scope.$apply();
            };

            $scope.uploadImage = function (files) {
                var reader = new FileReader(),
                    file = files[0];

                self.isNotValidType = false;
                self.isNotValidSize = false;
                if (!self.avatarFormatRegexp.test(file.type)) {
                    self.isNotValidType = true;
                    $scope.$apply();
                    return;
                } else if (file.size > self.maxAvatarSize) {
                    self.isNotValidSize = true;
                    $scope.$apply();
                    return;
                }

                reader.onload = function(event) {
                    var result = event.target.result;
                    self.setNewPhoto(result);
                };
                reader.readAsDataURL(file);
            };

            this.setEmployee = function (employee) {
                this.employee = employee;
            };
            this.setDepartment = function (department) {
                this.department = department;
            };
            this.onAvatarChange = function () {
                var avatarUrl = this.avatarUrl;
                console.log(avatarUrl);
            };

            employeeData.afterDataIsInLocalStorage(function (data) {
                var employee,
                    photos,
                    photo,
                    department;

                employee = localStorageService.get('employees#' + employeeId);
                if (employee) {
                    photo = localStorageService.get('photos#' + employee.photo);
                    department = localStorageService.get('departments#' + employee.department);
                    if (photo) {
                        self.photoData = photo['data'];
                    }
                    self.setEmployee(employee);
                    self.setDepartment(department);
                }
            });

        }]
    });