CREATE TABLE [account] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [username] nvarchar(255) NOT NULL,
  [password] nvarchar(255) NOT NULL,
  [name] nvarchar(150) NOT NULL,
  [age] integer,
  [gender] varchar(1),
  [address] nvarchar(300),
  [salt] varchar(62),
  [status] integer,
  [descreption] nvarchar(300),
  [roleId] integer,
  [createdDate] datetime,
  [createdBy] varchar(50),
  [updatedDate] datetime,
  [updatedBy] varchar(50)
)
GO

CREATE TABLE [scholar] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [accountId] integer,
  [facultyId] integer,
  [batchId] integer
)
GO

CREATE TABLE [role] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(100) NOT NULL,
  [descreption] varchar(50),
  [createdDate] datetime,
  [createdBy] varchar(50)
)
GO

CREATE TABLE [faculty] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(100),
  [facultyCode] varchar(50),
  [descreption] nvarchar(200),
  [createdDate] datetime,
  [createdBy] varchar(50),
  [updatedDate] datetime,
  [updatedBy] varchar(50)
)
GO

CREATE TABLE [batch] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(100),
  [fromDate] datetime,
  [toDate] datetime,
  [batchCode] varchar(50),
  [facultyId] integer,
  [createdDate] datetime,
  [createdBy] varchar(50),
  [updatedDate] datetime,
  [updatedBy] varchar(50)
)
GO

CREATE TABLE [course] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [courseCode] varchar(100),
  [name] nvarchar(150),
  [tuitionFees] decimal(15,8),
  [courseType] nvarchar(255),
  [descreption] text,
  [createdDate] datetime,
  [createdBy] varchar(50),
  [updatedDate] datetime,
  [updatedBy] varchar(50)
)
GO

CREATE TABLE [exam] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [examCode] varchar(100),
  [startDate] datetime,
  [endDate] datetime,
  [courseId] integer,
  [descreption] text,
  [createdDate] datetime,
  [createdBy] varchar(50),
  [updatedDate] datetime,
  [updatedBy] varchar(50)
)
GO

CREATE TABLE [reportScholar] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(100),
  [path] varchar(200),
  [type] varchar(50),
  [scholarId] integer,
  [createdDate] datetime,
  [createdBy] varchar(50),
  [updatedDate] datetime,
  [updatedBy] varchar(50)
)
GO

CREATE TABLE [scholarCourse] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [status] integer,
  [purchased] decimal(15,8),
  [tuitionFees] decimal(15,8),
  [assignmetPoint] integer,
  [testPoint] integer,
  [scholarId] integer,
  [courseId] integer,
  [createdDate] datetime
)
GO

CREATE TABLE [scholarExam] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [status] integer,
  [point] integer,
  [scholarId] integer,
  [examId] integer,
  [createdDate] datetime
)
GO

CREATE TABLE [batchCourse] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [status] integer,
  [point] integer,
  [batchId] integer,
  [courseId] integer
)
GO

ALTER TABLE [account] ADD FOREIGN KEY ([roleId]) REFERENCES [role] ([id])
GO

ALTER TABLE [scholar] ADD FOREIGN KEY ([facultyId]) REFERENCES [faculty] ([id])
GO

ALTER TABLE [scholar] ADD FOREIGN KEY ([batchId]) REFERENCES [batch] ([id])
GO

ALTER TABLE [scholarCourse] ADD FOREIGN KEY ([scholarId]) REFERENCES [scholar] ([id])
GO

ALTER TABLE [scholarCourse] ADD FOREIGN KEY ([courseId]) REFERENCES [course] ([id])
GO

ALTER TABLE [scholarExam] ADD FOREIGN KEY ([scholarId]) REFERENCES [scholar] ([id])
GO

ALTER TABLE [scholarExam] ADD FOREIGN KEY ([examId]) REFERENCES [exam] ([id])
GO

ALTER TABLE [exam] ADD FOREIGN KEY ([courseId]) REFERENCES [course] ([id])
GO

ALTER TABLE [reportScholar] ADD FOREIGN KEY ([scholarId]) REFERENCES [scholar] ([id])
GO

ALTER TABLE [batchCourse] ADD FOREIGN KEY ([batchId]) REFERENCES [batch] ([id])
GO

ALTER TABLE [batchCourse] ADD FOREIGN KEY ([courseId]) REFERENCES [course] ([id])
GO

ALTER TABLE [scholar] ADD FOREIGN KEY ([accountId]) REFERENCES [account] ([id])
GO
