package com.cognizant.Employee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class EmployeeApplication {

    private static EmployeeService employeeService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(EmployeeApplication.class, args);
        employeeService = context.getBean(EmployeeService.class);

        System.out.println("=== All Employees ===");
        testGetAllEmployees();
    }

    private static void testGetAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        for (Employee emp : employees) {
            System.out.println(emp);
        }
        System.out.println("=====================");
    }
}
