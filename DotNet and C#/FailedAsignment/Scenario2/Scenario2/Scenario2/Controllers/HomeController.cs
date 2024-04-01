using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Threading.Tasks;
using EMPN0739.Models;

namespace EMPN0739.Controllers
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
                var employees = await EMPN0739.Models.Employee.GetEmployees();
                return View("Employee", employees);
            }
            else
            {
                var employee = await EMPN0739.Models.Employee.GetEmployee((int)id);
                return View("Employee", new List<EMPN0739.Models.Employee> { employee });
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployees(IFormCollection fc)
        {
            var emp_data = new EMPN0739.Models.Employee
                {
                    id = int.Parse(fc["id"]),
                    name = fc["name"],
                    age = int.Parse(fc["age"]),
                    salary = int.Parse(fc["salary"])
                };
                await EMPN0739.Models.Employee.InsertEmployee(emp_data);
            return RedirectToAction("Index");
        }
        [HttpPost]
        public async Task<IActionResult> UpdateEmployee(IFormCollection fc)
        {
            var emp_data = new EMPN0739.Models.Employee
            {
                id = int.Parse(fc["id"]),
                name = fc["name"],
                age = int.Parse(fc["age"]),
                salary = int.Parse(fc["salary"])
            };
            await EMPN0739.Models.Employee.UpdateEmployee(emp_data);
            return RedirectToAction("Index");
        }
        [HttpPost]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            await EMPN0739.Models.Employee.DeleteEmployee(id);
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
