














GO

--12--
begin
declare @made int;
declare @matype int;
--SET IDENTITY_INSERT [dbo].[Exams] ON 
INSERT [dbo].[Exams] ( [Name], [Description], [IsDelete]) VALUES ( N'Đề Test', N'Đà Nẵng', 0)
SET IDENTITY_INSERT [dbo].[Exams] off
set @made = @@IDENTITY;

--type 1
--SET IDENTITY_INSERT [dbo].[TypeQuestions] ON 
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 1',N'Mark the latter A, B, C or D to indicate the word whose underlined part differs from the other three in pronunciation in each of the following questions.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions] off
 
set @matype = @@IDENTITY;

--question 1
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'paper', N'receipt', N'complain', N'envelop',2,@matype,0)
--question 2
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'official', N'ocean', N'convenient', N'precious',3,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
 
--type 2
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 2',N'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress in each of the following questions.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 3
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'secretary', N'necessary', N'classify', N'vocabulary',4,@matype,0)
 
--question 4
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'ambitious', N'dangerous', N'mysterious', N'intelligent',2,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 3
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 3',N'Mark the letter A, B, C or D to indicate the underlined part that needs correct in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 5
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Both cattle or railroads helped build the city of Chicago.', N'Both', N'or', N'build', N'the city of Chicago',2,@matype,0)
 
--question 6
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Mrs. Adams was surprise that her son and his friend had gone to the mountains to ski.', N'surprise', N'her', N'had gone', N'to ski',1,@matype,0)
 
--question 7
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' The letter was sent by special delivery must be important.', N'was sent', N'special delivery', N'must be', N'important',1,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 4
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 4',N'Mark the letter A, B, C or D to indicate the correct answer to each of the following question.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;
 
 --question 8
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' It is important today that students should learn one or two_________languages.', N'abroad', N'overseas', N'mother', N'foreign',4,@matype,0)
 
--question 9
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '  ________I was really tired , I couldn’t sleep.', N'Even though', N'So', N'Therefore', N'Because of',1,@matype,0)
 
--question 10
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Lan is very tired. ________, she has to finish her assignment before going to bed.', N'Although', N'So', N'Therefore', N'However',4,@matype,0)
 
--question 11
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I suggest________some money for poor children.', N'raise', N'to raise', N'raised', N'raising',4,@matype,0)
 
--question 12
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' She asked me if I________a laptop computer the following day.', N'buy', N'will buy', N'bought', N'would buy',4,@matype,0)
 
--question 13
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I ________telephone her if I knew her number.', N'would', N'have to', N'will', N'shall',1,@matype,0)

--question 14
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Honda motorbikes________in Viet Nam.', N'produce', N'will produce', N'are produced', N'would be produced',3,@matype,0)
 
--question 15
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' We have learnt English________2001.', N'for', N'since', N'in', N'during',2,@matype,0)
 
--question 16
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' We________already________Huong Pagoda.', N'were / seeing', N'Have / seen', N'are / seeing', N'Will / see',2,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 5
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 5',N'Mark the letter A, B, C or D to indicate the correct response to each of the following exchanges', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 17
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ': Mr. West Hello. Can I help you? - Emma', N'I know it’s difficult to remember', N'Yes, It’s on Saturday', N'Oh no, It’s too expensive ', N'Yes, please I’m looking for a book',4,@matype,0)
 
--question 18
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' -Tom: "It’s a lovely day. Shall we go for a walk?"- Mike:  __________', N'You’re welcome.', N'All right.', N'You’re right.', N'Enjoy yourself.',2,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 6
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 6',N'Mark the letter A, B, C or D to indicate the word(s) CLOSEST in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 19
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' He (resembles) his father in many ways.', N'turns off', N'takes on', N'goes over', N'takes after',4,@matype,0)
 
--question 20
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' We’ll buy you a cat, but you must promise to (take care of) it properly.', N'put on', N'go off', N'take after', N'look after',4,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 7
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 7',N'Mark the letter A, B, C or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 21
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I’m (interested) in teaching profession because I love working with children.', N'unconcerned', N'worried', N'unhappy', N'bored',1,@matype,0)
 
--question 22
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '  We live in a (small) flat above the corner shop in Tay Son Street.', N'huge', N'immense', N'titanic', N'big',4,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 8
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES
(  N'Exercise 8',N'Read the following passage and mark the letter A, B, C or D to indicate the correct word or phrase that best fits each of the numbered blanks.',N'Today our (23) __________ of food and what it does for our bodies is far more advanced than that of the ancient. Now we know (24) __________ vitamins and how each kind of vitamins helps in the growth of a particular part of our bodies. 
	There are on the market all kinds of vitamin pills one can take to make up for one’s lack of certain important things (25) __________  are needed for normal health. 
	Of course, if we eat well and properly, the food that we eat will take care of our bodies without these pills. Just take vitamin pills if our doctor tells us that our bodies are short of something that (26) __________ by them. 
	Generally speaking, everything that we eat does some good to our bodies, but if we eat too much of one kind of food and pay no (27) __________  to others, we may have too much of one kind of chemical substance and not enough of others. 
	Then, we may be in trouble. Therefore the best advice about what to eat is that we should eat all kinds of food but never too much.', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 23
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'knowledge', N'know', N'knowledgeable', N'knowledgeably',1,@matype,0)
 
--question 24
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'in', N'for', N'about', N'on',3,@matype,0)
 
--question 25
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'ưho', N'which', N'whom', N'whose',2,@matype,0)
 
--question 26
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'can supply', N'supply', N'can be supplied', N'supplied',3,@matype,0)
 
--question 27
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'attraction', N'action', N'vision', N'attention',4,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 9
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 9', N'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.',N'Over the past 600 years, English has grown from a language of few speakers to become the dominant language of international communication. 
	English as we know it today emerged around 1350, after having incorporated many elements of French that were introduced following the Norman invasion of 1066. 
	Until the 1600s, English was, for the most part, spoken only in England and had not extended even as far as two centuries, English began to spread around the globe as a result of exploration, trade (including slave trade), colonization, and missionary work. 
	Thus, small enclaves of English speakers became established and grew in various parts of the world. As these communities proliferated, English gradually became the primary language of international business, banking and diplomacy.
	Currently, about 80 percent of the information stored on computer systems worldwide is English. Two - thirds of the world’s science writing is in English, and English is the main language of technology, advertising, media, 
	international airports, and air traffic controllers - Today there are more than 700 million English users in the world, and over half of these are nonnative speakers, constituting the largest number of nonnative users than any other language in the world.', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 28
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' What is the main topic of this passage?', N'The French influence on the English Language.', N'The English history.', N'The expansion of English as an international language.', N'The use of English for science and Technology.',3,@matype,0)
 
--question 29
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Approximately when did English begin to be used beyond England?', N'in 1066', N'around 1350', N'before 1600', N'after 1600',4,@matype,0)
 
--question 30
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' According to the passage, all of the following contributed to the spread of English around the world except.', N'the slave trade', N'the Norman invasion', N'missionaries', N'colonization',2,@matype,0)
 
--question 31
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' The word “enclaves” in line 6 could be best replaced by which of the following.', N'communities', N'organizations', N'regions', N'countries',1,@matype,0)
 
--question 32
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' The word “proliferated” in line 7 is closest in meaning to which of the following', N'prospered', N'organized', N'disbanded', N'expanded',1,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off 

--type 10
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 10',N'Rewrite the following sentences using the provided word and keep meaning as that of the root one.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 33
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N': “Turn off the faucets after using". said the mother.', N'The mother told …………', N'The mother told her son to turn of the faucets after using.',@matype, 0)
 
--question 34
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N': They have finished their French exercise since yesterday.', N'Their French exercise...............', N'Their English exercise has been finished since yesterday.', @matype, 0)

--question 35
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N': I think you should hand in your homework on time', N'If I were you, ……………', N'If I were you, I would hand in my homework on time.', @matype, 0)

--question 36
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N': No boy in my class is more handsome than Ba.', N'Ba is .......................', N'Ba is the most handsome in my class.', @matype, 0)
 SET IDENTITY_INSERT [dbo].[EssayQuestions] off

--type 11
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 11',N'Complete the second sentence so that it has a similar meaning to the first sentence, using the word in brackets.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 37
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' Nga didn’t go to school. She was ill. (Because)', '', N'Nga didn’t go to school Because She was ill.', @matype, 0)

 --question 38
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' “I think we should turn on the TV to watch the weather forecast” (suggest + V-ing)', '', N'I suggest turning on the TV to watch the weather forecast.', @matype, 0)

 --question 39
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' I felt so tired last night. I tried to finish all my homework before going to bed.', '', N'I felt so tired last night. However, I tried to finish all my homework before going to bed.', @matype, 0)

 --question 40
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'   Ha wants to get lots of money. She must work harder. (If)', '', N'If  Ha wants to get lots of money. She must work harder.', @matype, 0)
SET IDENTITY_INSERT [dbo].[EssayQuestions] off
 end

GO
