using System.Data.SqlClient;
namespace EMPN0741_Scenario3.Models
{
    public class Project
    {
        public string project_id { get; set; }
        public string name { get; set; }
        public string status { get; set; }
        public double revenue { get; set; }
    }

    public class ProjectDB
    {
        const string connectionString = "Server=MAQN0739\\SQLEXPRESS;Database=WideWorldImporters;User Id=sa2;Password=Mssql@7881;";
        public IEnumerable<Project> GetProjects()
        {
            List<Project> projects = [];
            const string queryString =
                    "SELECT [project_id], [name], [status], [revenue]"
                    + "FROM [WideWorldImporters].[Sales].[Projects]";

            using SqlConnection connection = new(connectionString);
            SqlCommand command = new(queryString, connection);
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
                            revenue = (double)reader[3]
                        }
                    );
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return projects;
        }
    }
}