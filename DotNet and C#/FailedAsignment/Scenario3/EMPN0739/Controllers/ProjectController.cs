using EMPN0739.Models;
using Microsoft.AspNetCore.Mvc;

namespace EMPN0739.Controllers
{
    public class ProjectController : Controller
    {
        private readonly ILogger<ProjectController> _logger;

        public ProjectController(ILogger<ProjectController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetProjects()
        {
            var projectdb = new Models.ProjectViewModel();
            var projects = projectdb.GetProjects();
            return View("Index", projects);
        }
        [HttpPost]
        public IActionResult AddProject(IFormCollection fc)
        {
            var projectdb = new Models.ProjectViewModel();
            var project = new Project
            {
                project_id = fc["add_id"],
                name = fc["add_name"],
                status = fc["add_status"],
                revenue = (fc["add_revenue"]),
            };
            projectdb.AddProject(project);
            return Redirect("GetProjects");
        }
        
        [HttpPost]
        public IActionResult DeleteProject(IFormCollection fc)
        {
            var projectdb = new Models.ProjectViewModel();
            projectdb.DeleteProject(fc["ToBeDeleted"]);
            return Redirect("GetProjects");
        }
    }
}
