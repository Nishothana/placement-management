USE placement_db;

-- Student Table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    cgpa FLOAT,
    department VARCHAR(100),
    skills TEXT,
    status ENUM('Eligible', 'Not Eligible'),
    applied_companies TEXT
);

-- Company Table
CREATE TABLE companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    criteria FLOAT,  -- Minimum CGPA required
    job_role VARCHAR(100)
);

-- Applications Table
CREATE TABLE applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    company_id INT,
    status ENUM('Applied', 'Shortlisted', 'Rejected'),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (company_id) REFERENCES companies(id)
);
DROP DATABASE placement_db;
CREATE DATABASE placement_db;
USE placement_db;

