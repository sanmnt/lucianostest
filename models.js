const Sequelize = require("sequelize");

const sequelize = new Sequelize("db", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  maxConcurrentQueries: 100,
  dialect: "mysql",
  dialectOptions: {
    ssl: "Amazon RDS",
  },
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: "en",
  logging: false,
});

let Section = sequelize.define("section", {
  ClassCapacity: Sequelize.INTEGER,
  ClassNumber: Sequelize.INTEGER,
  ClassTitle: Sequelize.STRING,
  Component: Sequelize.STRING,
  CourseNumber: Sequelize.STRING,
  EndDate: Sequelize.DATEONLY,
  EndTime: Sequelize.TIME,
  Friday: Sequelize.BOOLEAN,
  InstructionMode: Sequelize.STRING,
  InstructorFirst: Sequelize.STRING,
  InstructorLast: Sequelize.STRING,
  Location: Sequelize.STRING,
  Monday: Sequelize.BOOLEAN,
  Saturday: Sequelize.BOOLEAN,
  Section: Sequelize.STRING,
  StartDate: Sequelize.DATEONLY,
  StartTime: Sequelize.TIME,
  Subject: Sequelize.STRING,
  Sunday: Sequelize.BOOLEAN,
  Term: Sequelize.STRING,
  Thursday: Sequelize.BOOLEAN,
  Tuesday: Sequelize.BOOLEAN,
  TotalEnrollment: Sequelize.INTEGER,
  Units: Sequelize.FLOAT,
  Wednesday: Sequelize.BOOLEAN,
  A: Sequelize.INTEGER,
  "A-": Sequelize.INTEGER,
  "B+": Sequelize.INTEGER,
  B: Sequelize.INTEGER,
  "B-": Sequelize.INTEGER,
  "C+": Sequelize.INTEGER,
  C: Sequelize.INTEGER,
  "C-": Sequelize.INTEGER,
  "D+": Sequelize.INTEGER,
  D: Sequelize.INTEGER,
  "D-": Sequelize.INTEGER,
  F: Sequelize.INTEGER,
});

let Professor = sequelize.define("professor", {
  InstructorFirst: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  InstructorLast: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  AvgGPA: Sequelize.FLOAT,
});

let Course = sequelize.define("course", {
  Subject: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  CourseNumber: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  AvgGPA: Sequelize.FLOAT,
});

exports.sequelize = sequelize;
exports.Section = Section;
exports.Professor = Professor;
exports.Course = Course;
