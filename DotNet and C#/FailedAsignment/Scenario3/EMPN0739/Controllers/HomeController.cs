using EMPN0739.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace EMPN0739.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            // Assuming you have a ProjectViewModel class to handle project-related operations
             ProjectViewModel projectViewModel = new ProjectViewModel();
             IEnumerable<Project> projects = projectViewModel.GetProjects();
            Console.WriteLine(projects);
            return View(projects);
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
