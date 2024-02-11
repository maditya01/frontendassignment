using EMPN0739.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Threading.Tasks;

namespace EMPN0739.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/")]
        public IActionResult Home()
        {
            return Ok("Hello, world!");
        }

        [HttpGet]
        [Route("/GetEmployees")]
        public async Task<IActionResult> GetEmployees()
        {
            string baseURL = "https://dummy.restapiexample.com/api/v1/employees";

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(baseURL);

                try
                {
                    HttpResponseMessage response = await client.GetAsync("");

                    if (response.IsSuccessStatusCode)
                    {
                        string data = await response.Content.ReadAsStringAsync();

                        try
                        {
                            JObject json = JObject.Parse(data);
                            
                            List<Employee> employees = JsonConvert.DeserializeObject<List<Employee>>(json["data"].ToString());
                            Console.WriteLine(employees);
                            SaveDataToJson(employees);
                            return Json(employees);
                        }
                        catch (JsonReaderException)
                        {
                            // Handle JSON parsing errors
                            return BadRequest("Failed to parse JSON data.");
                        }
                    }
                    else
                    {
                        // Handle other HTTP status codes
                        return StatusCode((int)response.StatusCode, $"Failed to retrieve employees. Status code: {response.StatusCode}");
                    }
                }
                catch (HttpRequestException ex)
                {
                    // Handle request exceptions (e.g., network issues)
                    return BadRequest($"Failed to retrieve employees. Exception: {ex.Message}");
                }
            }
        }

        [HttpGet]
        [Route("/GetEmployee/{id}")]
        public async Task<IActionResult> GetEmployee(int id)
        {
            string baseURL = $"https://dummy.restapiexample.com/api/v1/employee/{id}";

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(baseURL);

                HttpResponseMessage response = await client.GetAsync("");

                if (response.IsSuccessStatusCode)
                {
                    string data = await response.Content.ReadAsStringAsync();

                    try
                    {
                        JObject json = JObject.Parse(data);
                        Employee employee = JsonConvert.DeserializeObject<Employee>(json["data"].ToString());
                        
                        return Json(employee);
                    }
                    catch (JsonReaderException)
                    {
                        // Handle JSON parsing errors
                        return BadRequest("Failed to parse JSON data.");
                    }
                }
                else if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    return NotFound($"Employee with ID {id} not found.");
                }
                else
                {
                    // Handle other HTTP status codes
                    return StatusCode((int)response.StatusCode, $"Failed to retrieve employee. Status code: {response.StatusCode}");
                }
            }
        }


        [HttpPost]
        [Route("/AddEmployee")]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            List<Employee> employees = LoadDataFromJson();
            // Ensure the received employeeId doesn't already exist
            if (employees.Any(e => e.Id == employee.Id))
            {
                return BadRequest($"Employee with ID {employee.Id} already exists.");
            }

            employees.Add(employee);

            SaveDataToJson(employees);

            return Json(employee);
        }

        [HttpPut]
        [Route("/UpdateEmployee/{id}")]
        public IActionResult UpdateEmployee(int id, [FromBody] Employee employee)
        {
            List<Employee> employees = LoadDataFromJson();
            Employee employeeToUpdate = employees.Find(e => e.Id == id);

            if (employeeToUpdate != null)
            {
                employeeToUpdate.Employee_name = employee.Employee_name;
                employeeToUpdate.Employee_salary = employee.Employee_salary;
                employeeToUpdate.Employee_age = employee.Employee_age;
                SaveDataToJson(employees);
                return Json(employeeToUpdate);
            }
            else
            {
                return Json("NOT FOUND");
            }
        }

        [HttpDelete]
        [Route("/DeleteEmployee/{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            List<Employee> employees = LoadDataFromJson();
            Employee employeeToDelete = employees.Find(e => e.Id == id);

            if (employeeToDelete != null)
            {
                employees.Remove(employeeToDelete);
                SaveDataToJson(employees);
                return Json(employees);
            }
            else
            {
                return Json("NOT FOUND");
            }
        }
        
        private List<Employee> LoadDataFromJson()
        {
            string data = System.IO.File.ReadAllText("data.json");
            return JsonConvert.DeserializeObject<List<Employee>>(data) ?? new List<Employee>();
        }

        private void SaveDataToJson(List<Employee> employees)
        {
            System.IO.File.WriteAllText("data.json", JsonConvert.SerializeObject(employees));
        }
    }
}
