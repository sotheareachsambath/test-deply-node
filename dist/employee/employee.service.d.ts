import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
export declare class EmployeeService {
    private readonly employees;
    private nextId;
    create(createEmployeeDto: CreateEmployeeDto): Employee;
    findAll(): Employee[];
    findOne(id: number): Employee;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Employee;
    remove(id: number): {
        message: string;
    };
}
