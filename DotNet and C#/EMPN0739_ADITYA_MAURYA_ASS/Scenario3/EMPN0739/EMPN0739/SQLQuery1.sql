CREATE TABLE Projects
(
    ProjectID  NVARCHAR(255) PRIMARY KEY,
    Name NVARCHAR(255),
    Status NVARCHAR(50),
    Revenue  NVARCHAR(255)
);

INSERT INTO Projects (ProjectID, Name, Status, Revenue)
VALUES
    ('1', 'Project1', 'InProgress', '50000'),
    ('2', 'Project2', 'Completed', '75000'),
    ('3', 'Project3', 'Pending', '30000'),
    ('4', 'Project4', 'InProgress', '90000'),
    ('5', 'Project5', 'Completed', '60000');

    select*from Projects;
    
Drop table Projects;