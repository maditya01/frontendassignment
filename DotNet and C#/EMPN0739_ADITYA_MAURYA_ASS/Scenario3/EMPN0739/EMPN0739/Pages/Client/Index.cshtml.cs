using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;

namespace Scenerio3_EMPN0784.Pages.Client
{
    public class IndexModel : PageModel
    {
        public List<ClientInfo> listclients = new List<ClientInfo>();
        public void OnGet()
        {
            try
            {
                String connectionString = "Data Source=MAQN0739\\\\SQLEXPRESS;Initial Catalog=WideWorldImporters;User ID=sa2;Password=Mssql@7881;TrustServerCertificate=True\r\n;";
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    String sql = "Select*from Projects";
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                ClientInfo clientinfo = new ClientInfo();
                                clientinfo.ProjectID = reader.GetString(0);
                                clientinfo.Name = reader.GetString(1);
                                clientinfo.Status = reader.GetString(2);
                                clientinfo.Revenue = reader.GetString(3);

                                listclients.Add(clientinfo);
                            }

                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception:" + ex.ToString());
            }
        }
    }
    public class ClientInfo
    {
        public string ProjectID;
        public string Name;
        public string Status;
        public string Revenue;

    }

}
