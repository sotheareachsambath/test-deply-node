import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): import("./entities/employee.entity").Employee;
    findAll(): import("./entities/employee.entity").Employee[];
    findOne(id: number): import("./entities/employee.entity").Employee;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): import("./entities/employee.entity").Employee;
    remove(id: number): {
        message: string;
    };
}
