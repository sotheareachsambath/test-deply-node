"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
let EmployeeService = class EmployeeService {
    employees = [];
    nextId = 1;
    create(createEmployeeDto) {
        const employee = {
            id: this.nextId++,
            ...createEmployeeDto,
        };
        this.employees.push(employee);
        return employee;
    }
    findAll() {
        return this.employees;
    }
    findOne(id) {
        const employee = this.employees.find((item) => item.id === id);
        if (!employee) {
            throw new common_1.NotFoundException(`Employee with id ${id} not found`);
        }
        return employee;
    }
    update(id, updateEmployeeDto) {
        const employee = this.findOne(id);
        const updatedEmployee = { ...employee, ...updateEmployeeDto };
        const index = this.employees.findIndex((item) => item.id === id);
        this.employees[index] = updatedEmployee;
        return updatedEmployee;
    }
    remove(id) {
        const index = this.employees.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Employee with id ${id} not found`);
        }
        this.employees.splice(index, 1);
        return { message: `Employee with id ${id} deleted` };
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
//# sourceMappingURL=employee.service.js.map