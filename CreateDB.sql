USE [English]
 
begin
declare @made int;
declare @matype int;
--SET IDENTITY_INSERT [dbo].[Exams] ON 
INSERT [dbo].[Exams] ( [Name], [Description], [IsDelete]) VALUES ( N'Đề 1', NULL, 0)
SET IDENTITY_INSERT [dbo].[Exams] off
set @made = @@IDENTITY;
--type 1
--SET IDENTITY_INSERT [dbo].[TypeQuestions] ON 
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise', N'Mark the latter A, B, C or D to indicate the word whose underlined part differs from the other three in pronunciation in each of the following questions.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions] off
 
set @matype = @@IDENTITY;
--question 1

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
--question 2

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 



 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
 


--type 2

INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 2', N'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 3

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 4

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 3
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 3', N'Mark the letter A, B, C or D to indicate the underlined part that needs correct in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 5

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 6

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 7

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 4
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 4', N'Mark the letter A, B, C or D to indicate the correct answer to each of the following question.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 8

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 9

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 10

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 11

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 12

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 13

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 14

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 15

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 16

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 5
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 5', N'Mark the letter A, B, C or D to indicate the correct response to each of the following exchanges.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 17

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 18

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 6
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 6', N'Mark the letter A, B, C or D to indicate the word(s) CLOSEST in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 19

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 20

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 7
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 7', N'Mark the letter A, B, C or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 21

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 22

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 8
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES
( N'Exercuse 8', N'Read the following passage and mark the letter A, B, C or D to indicate the correct word or phrase that best fits each of the numbered blanks.', N'It might sound strange to you but these are some important rules. If you want to pass examinations, then study grammar ____________(23), if you want to become fluent in English, try to learn English without studying too much grammar because that will only ____________(24) you down and confuse you.
You will think about rules when creating sentences ____________ (25) than speaking naturally like a native speaker. Some native speakers do not know so many grammatical rules as non-native students.
Everyone can speak at least one language whether they are intelligent or lack some brain power. This could be achieved by being surrounded by that language at all times. You may notice that there are also some people ____________(26) study abroad and learn very little. That is because they go to an English speaking school, but find friends from their own country and don''t practice English. Some others can speak English well ____________(27) they live in an English speaking environment.', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 23

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 24

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 25

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 26

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 27

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 9
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 9', N'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.', N'One of the most devastating forces on Earth is a hurricane. A hurricane begins as a tropical storm. The storm winds blow in circles around a center, called the "eye." Gradually, the winds get stronger and stronger. A tropical storm becomes a hurricane when the winds are 120 kilometers per hour or more.
The word "hurricane" comes from Huracan, an evil god of a Central American Indian tribe. In other parts of the world, hurricanes are known by different names. In East Asia, they are usually called typhoons, from the Chinese tai-feng, meaning "great wind." In Bangladesh, Pakistan, India, and Australia, they are known as cyclones. Finally, in the Philippines, they are called baguios.
Few things in nature have as much power as hurricanes. They can destroy coastal areas with heavy rains and winds of 250 kilometers per hour or more. Sometimes a hurricane causes the ocean to flood onto land in an event called a storm surge. The total power of a hurricane may be equal to 10,000 nuclear bombs.', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 28

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 29

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 30

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 31

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
--question 32

INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( NULL, N'collapsed ', N'hiked ', N'striped ', N'claimed',1,@matype,0)
 
 
 
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off 
--type 10
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 10', N'Rewrite the following sentences using the provided word and keep meaning as that of the root one.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 33

INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'The factory is producing more and more pollution.', N'More and more', N'More and more pollution is being produced by that factory.',@matype, 0)
 
--question 34

INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'The factory is producing more and more pollution.', N'More and more', N'More and more pollution is being produced by that factory.', @matype, 0)
 
--question 35

INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'The factory is producing more and more pollution.', N'More and more', N'More and more pollution is being produced by that factory.', @matype, 0)

--question 36

INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'The factory is producing more and more pollution.', N'More and more', N'More and more pollution is being produced by that factory.', @matype, 0)
 SET IDENTITY_INSERT [dbo].[EssayQuestions] off


--type 11
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercuse 11', N'Complete the second sentence so that it has a similar meaning to the first sentence, using the word in brackets.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 37
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'The factory is producing more and more pollution.', '', N'More and more pollution is being produced by that factory.', @matype, 0)

 --question 38
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'The factory is producing more and more pollution.', '', N'More and more pollution is being produced by that factory.', @matype, 0)

 --question 39
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'The factory is producing more and more pollution.', '', N'More and more pollution is being produced by that factory.', @matype, 0)

 --question 40
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'The factory is producing more and more pollution.', '', N'More and more pollution is being produced by that factory.', @matype, 0)
SET IDENTITY_INSERT [dbo].[EssayQuestions] off
 end