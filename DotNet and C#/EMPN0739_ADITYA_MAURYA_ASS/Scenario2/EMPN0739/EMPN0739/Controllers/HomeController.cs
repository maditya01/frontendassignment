using EMPN0739_Scenario2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace EMPN0739_Scenario2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public async Task<IActionResult> Index(int? id)
        {
            if (id == null)
            {
                var employees = await Models.Employee.GetEmployees();
                return View("Employee", employees);
            }
            else
            {
                var employees = await Models.Employee.GetEmployee((int)id);
                return View("Employee", employees);

            }
        }

        [HttpPost]
        public async Task<IActionResult> AlterEmployees(IFormCollection fc)
        {
            if (fc["id"] == "")
            {
                var emp_data = new Models.Employee.EmployeeInsertPayload
                {
                    employee_name = fc["name"],
                    employee_age = int.Parse(fc["age"]),
                    employee_salary = int.Parse(fc["salary"])
                };
                var res = await Models.Employee.InsertEmployee(emp_data);
            }
            else
            {
                var emp = new Models.Employee
                {
                    id = int.Parse(fc["id"]),
                    name = fc["name"],
                    age = int.Parse(fc["age"]),
                    salary = int.Parse(fc["salary"]),
                };
                var res = await Models.Employee.UpdateEmployee(emp);
            }

            return RedirectToAction("Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
