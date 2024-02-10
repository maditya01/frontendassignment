using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;
using EMPN0739.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using System.Net.Http;

namespace EMPN0739.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("/GetEmployees")]
    public async Task<IActionResult> Index()
    {
        List<Employee> employees = new List<Employee>();
        string baseURL = "https://dummy.restapiexample.com/api/v1/employees";
        var client = new HttpClient();
        client.BaseAddress = new Uri(baseURL);
        HttpResponseMessage response = await client.GetAsync("");
        if (response.IsSuccessStatusCode)
        {
            string data = await response.Content.ReadAsStringAsync();
            // convert this string to json object 
            JObject json = JObject.Parse(data);
            employees = JsonConvert.DeserializeObject<List<Employee>>(json["data"].ToString());
            // print all the employees
            foreach (Employee employee in employees)
            {
                ViewData["EmployeesList"] = employees;
            }
        }
        System.IO.File.WriteAllText("data.json", JsonConvert.SerializeObject(employees));
        return Json(employees);
    }


    // Add and action to get the details of an employee based on id input from view and return JSON data
    [HttpGet]
    [Route("/GetEmployee/{id}")]
    public async Task<IActionResult> GetEmployee(int id)
    {
        Employee employee = new Employee();
        string baseURL = "https://dummy.restapiexample.com/api/v1/employee/" + id;
        var client = new HttpClient();
        System.Diagnostics.Debug.WriteLine("OTHER SIDE");
        client.BaseAddress = new Uri(baseURL);
        HttpResponseMessage response = await client.GetAsync("");
        Debug.WriteLine(response);
        // System.Diagnostics.Debug.WriteLine("Hello from the response: " + response);
        if (response.IsSuccessStatusCode)
        {
            string data = await response.Content.ReadAsStringAsync();
            // convert this string to json object 
            JObject json = JObject.Parse(data);
            Debug.WriteLine("GET EMPLOYEE BY ID");
            employee = JsonConvert.DeserializeObject<Employee>(json["data"].ToString());
        }
        else
        {
            System.Diagnostics.Debug.WriteLine("ELSE PART");
            employee = null;
        }

        return employee != null ? Json(employee) : Json("NOT FOUND");
    }

    // Add an action to add a new employee and we have to take input from the view which will not contain the id field
    // it will contain all the other fields
    // we have to assign the id field in the controller
    // dont add debug statements
    [HttpPost]
    [Route("/AddEmployee")]
    public IActionResult AddEmployee(Employee employee)
    {
        // add employee in data.json file
        List<Employee> employees = new List<Employee>();

        // read the data from the file
        string data = System.IO.File.ReadAllText("C:\\Users\\v-adimaurya\\Desktop\\frontend\\EMPN0739_AdityaMaurya\\webapiproject\\backend\\EMPN0739\\data.json");
        Debug.WriteLine(data);
        // add id to the employee
        employee.Id = employees.Count + 1;
        // convert this string to json object
        // JObject json = JObject.Parse(data);
        employees = JsonConvert.DeserializeObject<List<Employee>>(data.ToString());
        // add the new employee to the list
        employees.Add(employee);
        // write the data back to the file
        System.IO.File.WriteAllText("data.json", JsonConvert.SerializeObject(employees));
        // return the employee object
        return Json(employee);

    }

    // Call an put api to update the employee details with the input id http://dummy.restapiexample.com/api/v1/update/21
    // and the input data in the body
    [HttpPut]
    [Route("/UpdateEmployee")]
    public IActionResult UpdateEmployee(Employee employee)
    {
        // add employee in data.json file
        List<Employee> employees = new List<Employee>();
        // read the data from the file
        string data = System.IO.File.ReadAllText("data.json");
        // convert this string to json object
        // JObject json = JObject.Parse(data);
        employees = JsonConvert.DeserializeObject<List<Employee>>(data.ToString());
        // find the employee with the given id
        Employee employeeToUpdate = employees.Find(e => e.Id == employee.Id);
        // update the employee details
        employeeToUpdate.Employee_name = employee.Employee_name;
        employeeToUpdate.Employee_salary = employee.Employee_salary;
        employeeToUpdate.Employee_age = employee.Employee_age;
        // write the data back to the file
        System.IO.File.WriteAllText("data.json", JsonConvert.SerializeObject(employees));
        // return the employee object
        return Json(employeeToUpdate);
    }

    [HttpDelete]
    [Route("/DeleteEmployee/{id}")]
    // delete using the update api with the id in the url
    public IActionResult DeleteEmployee(int id)
    {
        // add employee in data.json file
        List<Employee> employees = new List<Employee>();
        // read the data from the file
        string data = System.IO.File.ReadAllText("data.json");
        // convert this string to json object
        // JObject json = JObject.Parse(data);
        employees = JsonConvert.DeserializeObject<List<Employee>>(data.ToString());
        // find the employee with the given id
        Employee employeeToDelete = employees.Find(e => e.Id == id);
        // remove the employee from the list
        employees.Remove(employeeToDelete);
        // write the data back to the file
        System.IO.File.WriteAllText("data.json", JsonConvert.SerializeObject(employees));
        // return the employee object
        return Json(employees);
    }


}