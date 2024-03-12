using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;

namespace EMPN0739_Scenario2.Models
{
    public class Employee
    {
        [JsonPropertyName("id")]
        public int? id { get; set; }
        [JsonPropertyName("employee_name")]
        public string name { get; set; }
        [JsonPropertyName("employee_salary")]
        public int salary { get; set; }
        [JsonPropertyName("employee_age")]
        public int age { get; set; }
        [JsonPropertyName("profile_image")]
        public string image { get; set; }

        public static HttpClient GetClient()
        {
            var client = new HttpClient
            {
                BaseAddress = new Uri("https://dummy.restapiexample.com")
            };

            client.DefaultRequestHeaders.Clear();
            //Define request data format  
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return client;
        }

        public static async Task<IEnumerable<Employee>> GetEmployees()
        {
            List<Employee> employees = [];
            using (var client = GetClient())
            {
                var res = await client.GetAsync("/api/v1/employees");
                if (res.IsSuccessStatusCode)
                {
                    var data = res.Content.ReadAsStringAsync().Result;
                    var emps = JsonSerializer.Deserialize<EmployeeSetPayload>(data);
                    if (emps != null)
                        employees = emps.data;
                }
            }
            return employees;
        }
        public static async Task<IEnumerable<Employee>> GetEmployee(int id)
        {
            List<Employee> employees = [];
            using (var client = GetClient())
            {
                var res = await client.GetAsync("/api/v1/employee/" + id.ToString());
                if (res.IsSuccessStatusCode)
                {
                    var data = res.Content.ReadAsStringAsync().Result;
                    var emps = JsonSerializer.Deserialize<EmployeePayload>(data);
                    if (emps != null)
                        employees = [emps.data];
                }
            }
            return employees;
        }

        public static async Task<HttpResponseMessage> InsertEmployee(EmployeeInsertPayload emp_data)
        {

            var payload = JsonSerializer.Serialize(emp_data);
            StringContent content = new StringContent(payload, Encoding.UTF8, "application/json");

            using var client = GetClient();
            return await client.PostAsync("api/v1/create", content);
        }
        public static async Task<HttpResponseMessage> UpdateEmployee(Employee emp)
        {
            var emp_data = new Models.Employee.EmployeeInsertPayload
            {
                employee_name = emp.name,
                employee_age = emp.age,
                employee_salary = emp.salary
            };
            var payload = JsonSerializer.Serialize(emp);
            StringContent content = new StringContent(payload, Encoding.UTF8, "application/json");

            using var client = GetClient();
            return await client.PutAsync($"api/v1/update/{emp.id}", content);
        }
        public static async Task<HttpResponseMessage> DeleteEmployee(int id)
        {
            using var client = GetClient();
            return await client.DeleteAsync($"api/v1/delete/{id}");
        }

        public class EmployeeSetPayload
        {
            public string status { get; set; }
            public List<Employee> data { get; set; }
            public string message { get; set; }
        }
        public class EmployeePayload
        {
            public string status { get; set; }
            public Employee data { get; set; }
            public string message { get; set; }
        }

        public class EmployeeInsertPayload
        {
            public string employee_name { get; set; }
            public int employee_salary { get; set; }
            public int employee_age { get; set; }
        }

    }
}
