using System.Data.SqlClient;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace EMPN0739.Models
{
    public class Project
    {
        public string project_id { get; set; }
        public string name { get; set; }
        public string status { get; set; }
        public string revenue { get; set; }
    }
    public class ProjectViewModel
    {

        const string connectionString = "Server=MAQN0739\\SQLEXPRESS;Database=WideWorldImportersDW;User Id=sa2;Password=Mssql@7881;";
        public IEnumerable<Project> GetProjects()
        {
            List<Project> projects = [];
            const string queryString =
                    "SELECT [ProjectID], [Name], [Status], [Revenue]"
                    + "FROM [WideWorldImportersDW].[dbo].[Projects]";

            using SqlConnection connection = new(connectionString);
            Console.WriteLine(connection);
            SqlCommand command = new(queryString, connection);
            Console.WriteLine(command);
            try
            {
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    projects.Add(
                        new Project
                        {
                            project_id = (string)reader[0],
                            name = (string)reader[1],
                            status = (string)reader[2],
                            revenue = (string)reader[3]
                        }
                    );
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            Console.WriteLine(projects);
            return projects;
        }
        public IActionResult AddProject(Project project)
        {
            string queryString =
                    "INSERT INTO [WideWorldImportersDW].[dbo].[Projects] ([ProjectID], [Name], [Status], [Revenue])"
                    + $" VALUES ('{project.project_id}', '{project.name}', '{project.status}', {project.revenue})";

            using SqlConnection connection = new(connectionString);
            SqlCommand command = new(queryString, connection);
            try
            {
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new OkResult();
        }
        public IActionResult DeleteProject(string id)
        {
            string queryString =
                    "DELETE FROM [WideWorldImportersDW].[dbo].[Projects]" + $" WHERE [ProjectID]='{id}'";

            using SqlConnection connection = new(connectionString);
            SqlCommand command = new(queryString, connection);
            try
            {
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new OkResult();
        }
        public IActionResult UpdateProject(string id)
        {
            string queryString1 =
     "SELECT [ProjectID], [Name], [Status], [Revenue] " +
     "FROM [WideWorldImportersDW].[dbo].[Projects] " +
     $"WHERE [ProjectID]='{id}'";


            string queryString =
                "UPDATE [WideWorldImportersDW].[dbo].[Projects] " +
                "SET [Name] = @Name, [Status] = @Status, [Revenue] = @Revenue " +
                "WHERE [ProjectID] = @ProjectID";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(queryString, connection);
                // command.Parameters.AddWithValue("@ProjectID", project.project_id);
                // command.Parameters.AddWithValue("@Name", project.name);
                // command.Parameters.AddWithValue("@Status", project.status);
                // command.Parameters.AddWithValue("@Revenue", project.revenue);

                try
                {
                    connection.Open();
                    command.ExecuteNonQuery();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    // You might want to handle the exception more gracefully, like returning a specific IActionResult
                    return new StatusCodeResult(StatusCodes.Status500InternalServerError); // Internal Server Error
                }
            }

            return new OkResult(); // Operation successful
        }

    }
}
