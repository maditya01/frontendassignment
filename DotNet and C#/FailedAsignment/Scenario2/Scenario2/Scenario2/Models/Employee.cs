using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace EMPN0739.Models
{
    public class Employee
    {
        public int? id { get; set; }
        public string name { get; set; }
        public int salary { get; set; }
        public int age { get; set; }
        public string image { get; set; }

        public static async Task<IEnumerable<Employee>> GetEmployees()
        {
            var jsonData = await File.ReadAllTextAsync("data.json");
            var employees = JsonSerializer.Deserialize<List<Employee>>(jsonData);
            return employees;
        }

        public static async Task<Employee> GetEmployee(int id)
        {
            var employees = await GetEmployees();
            return employees.FirstOrDefault(emp => emp.id == id);
        }

        public static async Task UpdateEmployee(Employee emp)
        {
            var employees = await GetEmployees();
            var existingEmployee = employees.FirstOrDefault(e => e.id == emp.id);
            if (existingEmployee != null)
            {
                existingEmployee.name = emp.name;
                existingEmployee.salary = emp.salary;
                existingEmployee.age = emp.age;
                existingEmployee.image = emp.image;
                await WriteToJsonFile(employees);
            }
        }

        public static async Task InsertEmployee(Employee emp)
        {
            var employees = (await GetEmployees()).ToList(); // Convert to List<Employee>
            if (employees == null)
            {
                employees = new List<Employee>();
            }

            emp.id = employees.Any() ? employees.Max(e => e.id) + 1 : 1;
            employees.Add(emp);
            await WriteToJsonFile(employees);
        }

        public static async Task DeleteEmployee(int id)
        {
            var employees = await GetEmployees();
            employees = employees.Where(emp => emp.id != id).ToList();
            await WriteToJsonFile(employees);
        }

        private static async Task WriteToJsonFile(IEnumerable<Employee> employees)
        {
            var jsonData = JsonSerializer.Serialize(employees);
            await File.WriteAllTextAsync("data.json", jsonData);
        }
    }
}
