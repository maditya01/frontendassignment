using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace EMPN0739
{

    public class Partner
    {
        public int PartnerID { get; set; }
        public string PartnerName { get; set; }
        private string partnerContactEmail;
        public string PartnerContactEmail
        {
            get { return partnerContactEmail; }
            set
            {
                if (IsValidEmail(value))
                {
                    partnerContactEmail = value;
                }
                else
                {
                    throw new ArgumentException("Invalid email format");
                }
            }
        }

        public string PartnerGeography { get; set; }
        public List<string> PartnerSpecializations { get; private set; }

        public Partner(int partnerID, string partnerName, string partnerContactEmail, string partnerGeography, string[] partnerSpecializations)
        {
            PartnerID = partnerID;
            PartnerName = partnerName;
            PartnerContactEmail = partnerContactEmail;
            PartnerGeography = partnerGeography;
            PartnerSpecializations = new List<string>(partnerSpecializations);
        }

        public void AddSpecialization(string specialization)
        {
            PartnerSpecializations.Add(specialization);
        }

        public void RemoveSpecialization(string specialization)
        {
            PartnerSpecializations.Remove(specialization);
        }

        public void UpdatePartnerGeography(string newGeography)
        {
            if (!string.IsNullOrEmpty(newGeography))
            {
                PartnerGeography = newGeography;
            }
            else
            {
                throw new ArgumentException("Geography cannot be null or empty");
            }
        }

        private bool IsValidEmail(string email)
        {
            // Perform regex-based validation for email format
            // You can customize the regex pattern based on your specific requirements
            string pattern = @"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
            Regex regex = new Regex(pattern);
            return regex.IsMatch(email);
        }
    }

    public class PartnerAccountManager
    {
        public int EmployeeID { get; set; }
        private string email;
        public string Email
        {
            get { return email; }
            set
            {
                if (IsValidEmail(value))
                {
                    email = value;
                }
                else
                {
                    throw new ArgumentException("Invalid email format");
                }
            }
        }

        public string ManagerEmail { get; set; }
        public string Specialization { get; set; }

        public PartnerAccountManager(int employeeID, string email, string managerEmail, string specialization)
        {
            EmployeeID = employeeID;
            Email = email;
            ManagerEmail = managerEmail;
            Specialization = specialization;
        }

        private bool IsValidEmail(string email)
        {
            // Perform regex-based validation for email format
            // You can customize the regex pattern based on your specific requirements
            string pattern = @"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
            Regex regex = new Regex(pattern);
            return regex.IsMatch(email);
        }
    }

    public class ManagedPartner : Partner
    {
        public DateTime ManagedFrom { get; set; }
        public PartnerAccountManager PartnerAccountManager { get; set; }

        public ManagedPartner(int partnerID, string partnerName, string partnerContactEmail, string partnerGeography, string[] partnerSpecializations, DateTime managedFrom, PartnerAccountManager accountManager)
            : base(partnerID, partnerName, partnerContactEmail, partnerGeography, partnerSpecializations)
        {
            ManagedFrom = managedFrom;
            PartnerAccountManager = accountManager;
        }

        public void UpdatePartnerAccountManager(PartnerAccountManager newAccountManager)
        {
            if (newAccountManager != null && !string.IsNullOrEmpty(newAccountManager.Email) && !string.IsNullOrEmpty(newAccountManager.ManagerEmail))
            {
                PartnerAccountManager = newAccountManager;
            }
            else
            {
                throw new ArgumentException("Invalid PartnerAccountManager object or missing required properties");
            }
        }
    }

    class Program
    {
        static void Main()
        {
            // Test Scenario 1
            try
            {
                var partner = new ManagedPartner(
                    partnerID: 1,
                    partnerName: "ABC Inc.",
                    partnerContactEmail: "abc@example.com",
                    partnerGeography: "North America",
                    partnerSpecializations: new[] { "Finance", "IT" },
                    managedFrom: DateTime.Now,
                    accountManager: new PartnerAccountManager(101, "manager@example.com", "boss@example.com", "Finance")
                );

                Console.WriteLine("Partner Information:");
                Console.WriteLine($"ID: {partner.PartnerID}");
                Console.WriteLine($"Name: {partner.PartnerName}");
                Console.WriteLine($"Contact Email: {partner.PartnerContactEmail}");
                Console.WriteLine($"Geography: {partner.PartnerGeography}");
                Console.WriteLine("Specializations: " + string.Join(", ", partner.PartnerSpecializations));
                Console.WriteLine($"Managed From: {partner.ManagedFrom}");
                Console.WriteLine($"Account Manager: {partner.PartnerAccountManager.Email}");

                // Test add and remove specializations
                partner.AddSpecialization("Marketing");
                partner.RemoveSpecialization("IT");

                // Test update geography
                partner.UpdatePartnerGeography("Europe");

                // Test update account manager
                partner.UpdatePartnerAccountManager(new PartnerAccountManager(102, "newmanager@example.com", "newboss@example.com", "Marketing"));

                Console.WriteLine("Partner Information After Updates:");
                Console.WriteLine($"Geography: {partner.PartnerGeography}");
                Console.WriteLine("Specializations: " + string.Join(", ", partner.PartnerSpecializations));
                Console.WriteLine($"Account Manager: {partner.PartnerAccountManager.Email}");

                //To show output in terminal
                Console.ReadKey();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }
    }
}
