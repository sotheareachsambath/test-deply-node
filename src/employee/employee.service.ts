import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  private readonly employees: Employee[] = [];
  private nextId = 1;

  create(createEmployeeDto: CreateEmployeeDto): Employee {
    const employee: Employee = {
      id: this.nextId++,
      ...createEmployeeDto,
    };
    this.employees.push(employee);
    return employee;
  }

  findAll(): Employee[] {
    return this.employees;
  }

  findOne(id: number): Employee {
    const employee = this.employees.find((item) => item.id === id);
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto): Employee {
    const employee = this.findOne(id);
    const updatedEmployee = { ...employee, ...updateEmployeeDto };
    const index = this.employees.findIndex((item) => item.id === id);
    this.employees[index] = updatedEmployee;
    return updatedEmployee;
  }

  remove(id: number): { message: string } {
    const index = this.employees.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    this.employees.splice(index, 1);
    return { message: `Employee with id ${id} deleted` };
  }
}
