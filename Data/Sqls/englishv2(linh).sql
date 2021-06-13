use [englishdb]


GO
SET IDENTITY_INSERT [dbo].[UserRoles] OFF

GO
INSERT [dbo].[UserRoles] ( [Name], [Description], [IsDelete]) VALUES ( N'admin', NULL, 0)
GO
INSERT [dbo].[UserRoles] ( [Name], [Description], [IsDelete]) VALUES ( N'user', NULL, 0)
SET IDENTITY_INSERT [dbo].[UserRoles] OFF

GO
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
INSERT [dbo].[Users] ( [UserName], [Password], [Name], [UserRoleId], [Description], [IsDelete]) VALUES ( N'admin', N'123456', N'admin', 1, NULL, 0)
GO
INSERT [dbo].[Users] ( [UserName], [Password], [Name], [UserRoleId], [Description], [IsDelete]) VALUES (N'quang', N'123456', N'quang', 2, NULL, 0)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO


















GO
--14--
begin
declare @made int;
declare @matype int;
--SET IDENTITY_INSERT [dbo].[Exams] ON 
INSERT [dbo].[Exams] ( [Name], [Description], [IsDelete]) VALUES ( N'Đề 1',N'Thành phố Hồ Chí Minh', 0)
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
VALUES ( '', N'historical', N'system', N'landscape', N'business',4,@matype,0)

--question 2
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'carved', N'impressed', N'embroidered', N'weaved',2,@matype,0)
 
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 2
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 2',N'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 3
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'embroider', N'lantern', N'impress', N'desire',1,@matype,0)
 
--question 4
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'workshop', N'remind', N'outskirts', N'village',2,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 3
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 3',N'Mark the letter A, B, C or D to indicate the correct answer to each of the following question.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 5
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Jenny can’t go out with us to see a movie now because she’s_______________ meal.', N'preparing', N'making', N'arranging', N'keeping',1,@matype,0)
 
--question 6
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I’m responsible for cooking dinner as my mother usually works_______________.', N'lately', N'early', N'later', N'late',4,@matype,0)
 
--question 7
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I usually_______________ my younger sisters when my parents are away on business.', N'pick up', N'take care of', N'look for', N'take charge of',2,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--question 8
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Ms. Mai asked me how she could_______________ household chores equally in her family.', N'make', N'divide ', N'give ', N'contribute',2,@matype,0)
 
--question 9
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' In my family, my father always take charge of doing the_______________ lifting.', N' ', N' ', N' ', N'',3,@matype,0)
 
--question 10
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Her husband is very kind. He always cares____her and never puts on of the housework ______ her.', N'about-in ', N'for-in ', N'about-on ', N'with-on',3,@matype,0)
 
--question 11
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Mr. Hoang found it difficult to be in charge of the household _______________.', N'financial', N'financially', N'finances ', N'financier',3,@matype,0)
 
--question 12
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' We _______________ in doing the washing-up, cleaning the floor and watering the flowers', N' turn', N'out ', N' around', N'turns',4,@matype,0)
 
--question 13
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' _______________ is a person who work at home and take care of the house and family', N' Breadwinner', N'Homemaker ', N'Servant ', N'Houseman',2,@matype,0)
 
 --type 4
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 4',N'Mark the letter A, B, C or D to indicate the underlined part that needs correct in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 14
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'Lam and his friends often go to the cinema to enjoy the new films last year', N'his', N'friends', N'go', N'cinema',3,@matype,0)
 
--question 15
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'They were walking through Nguyen Hue Avenue while  an accident happened.', N'walking', N'Nguyen Hue Avenue', N'while', N'happened',3,@matype,0)
 
--question 16
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'Tourists can’t be enter the War Remnants Museum after 10pm.', N'Tourists', N'can’t', N'be enter', N'War Remnants Museum',3,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 5
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 5',N'Mark the letter A, B, C or D to indicate the correct response to each of the following exchanges', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 17
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'A: "I love studying science as it allows me to answer questions about natural world." 
	B: "_________________"', N'No, I won’t.', N'Neither do I.', N'Yes, I like it.', N'So do I',4,@matype,0)
 
--question 18
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '	A: "I have taken part in the science club for 3 months."
	B: "_________________”', N'So have I.', N'So have me', N'I have so.', N'So I have.',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 6
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 6',N'Mark the letter A, B, C or D to indicate the word(s) CLOSEST in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 19
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'We always split the housework equally – my mom cooks, my dad cleans the house and I do the washing – up.(split)', N'join', N'break', N'share', N'pick up',3,@matype,0)
 
--question 20
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'Parent are recommended to collaborate with teachers in educating children.(collaborate)', N'part', N'cooperate', N'separate', N'disagree',2,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 7
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 7',N'Mark the letter A, B, C or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 21
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'From my point of view, parental divorce can cause lasting negative consequences for children.(divorce)', N'beginning of a marriage', N'the situation of not marrying', N'single person', N'ending of a marriage',1,@matype,0)
 
--question 22
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'It is important to create a daily routine so as to improve your work-life balance today.(balance)', N'a situation in which two or more things are not treated the same', N'a state that things are of equal weight or force', N'a state that things are of importance', N'a situation that things change frequently in amount',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 8
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES
(  N'Exercise 8',N'Read the following passage and mark the letter A, B, C or D to indicate the correct word or phrase that best fits each of the numbered blanks.',
	N'When Scotsman Alexander Graham  Bell (23)_______the telephone in 1876, it was a revolution  in communication. (24)_____the first time, people could talk to each other over great distances almost as clearly as if they were in the same room. Nowadays, though, 
	we (25)_______use Bell’s invention for taking photographs,
	(26)_____the Internet or watching video clips rather than talking. Over the last two decades a new (27)____of spoken communication has emerged: the mobile phone.', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 23
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'invent', N'is invented', N'invented', N'was invented',3,@matype,0)
 
--question 24
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'As', N'By', N'For', N'Since',3,@matype,0)
 
--question 25
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'increase', N'increased', N'increasing', N'increasingly',4,@matype,0)
 
--question 26
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'accessing', N'contacting', N'entering', N'searching',1,@matype,0)
 
--question 27
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'aids', N'means', N'tools', N'ways',2,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
--type 9
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 9',N'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.', N'Did you know that on average we forget about 80% of the medical information a doctor might give us? This fascinating information came to light as a result of a study carried out by Utrecht University. 
	What is even more interesting is that almost half of what we think we remember is wrong.
	Why do you think this is? Well, it’s not as complicated as you may think. You see, going to the doctor fills most people with anxiety and when we are really nervous and stressed we are more likely to focus on the diagnosis rather than the treatment. Therefore, we know what is wrong with as but have no idea what to do about it.
	Here are some good tips to keep in mind when seeing a doctor. Always write down any important information. What would be even better is, if your doctor agreed, to record your consultation. This way, you can replay the advice at home, where you are more likely to absorb it. 
	If you believe the situation is serious or you’re really worried, seek the help of a family member. Just ask them to accompany you to listen in. This way you can be absolutely sure about what the doctor has told you and avoid falling into the same trap that most people do.(Source: Traveller 6)', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 28
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' According to the passage, the information doctors give us__.', N'is about 50% wrong', N'is only 80% correct', N'is mostly forgotten', N'is usually not enough',3,@matype,0)
 
--question 29
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' The word “complicated” in the passage is opposite in meaning to____________.', N'good', N'quick', N'short', N'simple',4,@matype,0)
 
--question 30
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' The author says that when people consult a doctor, ____________.', N'they always believe that their situation is serious', N'they are interested in knowing what they should do', N'they only want to know what is wrong with them', N'they usually have a family member with them',3,@matype,0)
 
--question 31
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( N' The word “absorb” in the passage is closest in meaning to', 'digest', N'inhale', N'swallow', N'take in',4,@matype,0)
 
--question 32
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' The author suggests recording the consultant in order to.', N'play it to your family members to get their opinions', N'refer to it later to better understand your condition', N'replay it to write down any important information', N'use it as evidence against your doctor if necessary',2,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off 

--type 10
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 10',N'Rewrite the following sentences using the provided word and keep meaning as that of the root one.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 33
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' Their teacher is making them study hard.', N'They.............................', N'They are being made to study hard.',@matype, 0)
 
--question 34
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' As I get older, I want to travel less.', N'The older .............................', N'The older I get, the less I want to travel.', @matype, 0)
 
--question 35
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' I have never been to Liverpool in my life.', N'Never ...........................', N'Never have I been to Liverpool in my life.', @matype, 0)

--question 36
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' My father speaks very little French.', N'My father speaks hardly ................................', N'My father speak hardly any French.', @matype, 0)
 SET IDENTITY_INSERT [dbo].[EssayQuestions] off

--type 11
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 11',N'Complete the second sentence so that it has a similar meaning to the first sentence, using the word in brackets.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 37
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' I will return to Hoi An to have another week of adventure this summer. (COME)', '', N'I will come back to Hoi An to have an another week of adventure this summer.', @matype, 0)

 --question 38
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' After leaving college, he started his own business with a bank loan. (SET)', '', N'After leaving college, he set up his own business with a bank loan.', @matype, 0)

 --question 39
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' She promised to meet me at the cinema this evening, but she didn’t arrive. (TURN)', '', N'She promised to meet me at the cinema this evening, but she didn’t turn up.', @matype, 0)

 --question 40
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' Nicholas began his trip to the remote farmhouse in Connecticut yesterday. (SET)', '', N'Nicholas set off to the remote farmhouse in Connecticut yesterday.', @matype, 0)
SET IDENTITY_INSERT [dbo].[EssayQuestions] off
end

GO

--15--
begin
declare @made int;
declare @matype int;
--SET IDENTITY_INSERT [dbo].[Exams] ON 
INSERT [dbo].[Exams] ( [Name], [Description], [IsDelete]) VALUES ( N'Đề 2', N'Thành phố Hồ Chí Minh', 0)
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
VALUES ( '', N'education', N'graduate', N'individual', N'confident',4,@matype,0)
--question 2
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'embarrassed', N'awareness', N'abandoned', N'captain',2,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
 
--type 2
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 2',N'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress in each of the following questions.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 3
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'recognize', N'concentrate', N'assignment', N'cognitive',3,@matype,0)
 
--question 4
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'teenager', N'vehicle', N'activate', N'nationwide',4,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 3
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 3',N'Mark the letter A, B, C or D to indicate the correct answer to each of the following question.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 5
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'Last Wednesday witnessed a sudden drop in raw oil price.(sudden)', N'Significant', N'gradual', N'sharp', N'considerable',3,@matype,0)
 
--question 6
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'It was unprofessional __________ casual clothes to the international conference.', N'Of her to wear', N'for her wearing', N'for her to wear', N'of her wear',1,@matype,0)
 
--question 7
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'The very first metro is being built to ____________ the travel demands of Saigonese.', N'Solve', N'make', N'see', N'meet',4,@matype,0)

--question 8
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '________ ease traffic congestion, it is necessary to promote the development of public transport.', N'Because of', N'despite', N'in order to', N'since',3,@matype,0)
 
--question 9
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'I think life today is __________ comfortable than it was in the past.', N'About as', N'a lot more', N'more and more', N'the more',3,@matype,0)
 
--question 10
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'My friend were all extremely ________ when they heard I’d lost my job.', N'Tolerant', N'sympathetic', N'obedient', N'confident',2,@matype,0)
 
--question 11
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'Vietnamese prefer riding motorbike _________ walking to work', N'to', N'for', N'than', N'rather than',1, @matype,0)
 
--question 12
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' It is hard ____________ us to persuade him to believe what we said.', N'to', N'of', N'for', N'with',3,@matype,0)
 
--question 13
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'A lot of __________ were built to solve the traffic jam problem at intersections.', N'Trams', N'flyovers', N'skytrains', N'tunnels',2,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 4
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 4',N'Mark the letter A, B, C or D to indicate the underlined part that needs correct in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;
 
--question 14
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'If you slept under a mosquito net, you weren’t bitten so often.', N'slept', N'mosquito net', N'weren’t', N'so often',3,@matype,0)
 
--question 15
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Unfortunately,  the catering committee can never agree between themselves.', N'Unfortunately', N'the', N'can never', N'between',4,@matype,0)
 
--question 16
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'We went by a train to the west of England last month.', N'went', N'by', N'to', N'of',2,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 5
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 5',N'Mark the letter A, B, C or D to indicate the correct response to each of the following exchanges', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 17
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '“ What a meaningful thing you’ve done for your less fortunate friend, my son!”
-	“_____________”', N'Thanks for talking care of me, Mom.', N'What a wonderful gift you’ve made for me.', N'I don’t really care. I must go now.', N'Thank you mom that’s just a bit I can do for them.',4,@matype,0)
 
--question 18
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' “ New Year is coming. I’ll repaint the house for Mrs. Poor Old Amada.”
-	“_____________”', N'No, not for me', N'That would be great help.', N'It is very expensive', N'Not at all',2,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 6
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 6',N'Mark the letter A, B, C or D to indicate the word(s) CLOSEST in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 19
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'The old blood cells are broken down by the sleep and (eliminated) from the body.', N'Cut out', N'exhaled', N'removed', N'held',3,@matype,0)
 
--question 20
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'Humans will enjoy longer life expectancy when they are move (conscious of) what they eat and do.', N'Aware of', N'capable of', N'responsible for', N'suitable for',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 7
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 7',N'Mark the letter A, B, C or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 21
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'Global warming may lead to many negative changes, including (harsher) weather conditions.', N'More unbearable', N'milder', N'more extreme', N'more serious',2,@matype,0)
 
--question 22
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( 'The physical therapy helped Jim (overcome) his fear of height.', N'Overwhelm', N'control', N'neglect', N'conquer',1,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 8
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES
(  N'Exercise 8',N'Read the following passage and mark the letter A, B, C or D to indicate the correct word or phrase that best fits each of the numbered blanks.',
	N'Living in a city has a number of drawbacks. Firstly, there is the problem of traffic (23)________ and traffic accidents. The increase in population and the increasing number of vehicles have 
	(24)_________ many accidents to happen every day. Secondly, air pollution (25) __________ affects people is health, and it also has a bad (26)__________ on the environment More and more city dwellers suffer from coughing or breathing problems. 
	Thirdly, the city is noisy, even at night. Noise pollution comes from the traffic and from construction sites. Buildings are always being knocked down and rebuilt. These factors contribute to making city life (27)________ difficult for its residents.', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 23
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'calm', N'jams', N'light', N'legacy',2,@matype,0)
 
--question 24
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'caused', N'made', N'done', N'got',1,@matype,0)
 
--question 25
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'actively', N'negatively', N'positively', N'weakly',2,@matype,0)
 
--question 26
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'pressure', N'consequence', N'influence', N'result',3,@matype,0)
 
--question 27
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'mostly', N'very', N'much', N'more',4,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 9
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 9',N'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.', 
	N'Every year students in many countries learn English. Some of these students are young children. Others are teenagers. Many are adults. Some learn at school. Others study by themselves. A few learn English just by hearing the language in films, on television, in the office or among their friends.
	But not many are lucky enough to do that. Most people must work hard on their lessons to learn another language.Many boys and girls learn English at school because it is one of their subjects. 
	They study their own language, mathematics and English. In England, America or Australia, many boys and girls study their own language, which is English and another language, perhaps French, German or Spanish.
	Many adults learn English because it is useful for their work. Teenagers often learn English for their higher studies because some of their books are in English at the college or university. Other people learn English because they want to read newspapers or magazines in English', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 28
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' According to the writer:', N'Only adults learn English', N'English is useful only for teenagers', N'no children like to learn English', N'English is popular all over the world',4,@matype,0)
 
--question 29
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Most people learn English by __________.', N'watching videos only', N'working hard on their lessons', N'hearing the language in the office', N'talking with the foreigners',2,@matype,0)
 
--question 30
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Many boys and girls learn English because __________.', N'it is included in their study courses', N'English can give them a job', N'they are forced to learn it', N'they have to study their own languages',1,@matype,0)
 
--question 31
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' In America and Australia, many school children study __________.', N'English as a foreign language', N'English and mathematics only', N'such foreign languages as French, German or Spanish', N'their own language and no foreign language',3,@matype,0)
 
--question 32
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Many adults learn English because __________.', N'English is spoken in their office', N' they want to go abroad', N'most of their books are in English', N'it helps them in their work',4,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off 

--type 10
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 10',N'Rewrite the following sentences using the provided word and keep meaning as that of the root one.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 33
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N'  It is a three-hour drive from Hanoi to Nam Dinh.', N'It takes.........................', N'It takes three hours to drive from Hanoi to Nam Dinh.',@matype, 0)
 
--question 34
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' It is a pity you didnt tell us about this.', N'I wish........................', N'I wish you had told us about it.', @matype, 0)

--question 35
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' They think the owner of the house is abroad.', N'The owner.....................................', N'The owner of the house is thought to be abroad.', @matype, 0)

--question 36
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' The children couldnt go swimming because the sea was very rough.', N'The sea was too…………………', N'The sea was too rough for the children to go swimming.', @matype, 0)
 SET IDENTITY_INSERT [dbo].[EssayQuestions] off

--type 11
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 11',N'Complete the second sentence so that it has a similar meaning to the first sentence, using the word in brackets.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 37
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' I can’t understand him because he speaks so quickly. (IF)', '', N'If he didn’t speak so quickly, I could understand him.', @matype, 0)

 --question 38
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' The suitcase is so heavy that I can’t carry it. (SUCH)', '', N'It is such a heavy suitcase that I can’t carry it.', @matype, 0)

 --question 39
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' It will be very cold tomorrow. (WISH)', '', N'I wish it wouldn’t be cold tomorrow.', @matype, 0)

 --question 40
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' The sun is much hotter than the moon. (SO…..AS)', '', N'The moon isn’t so hot as the sun.', @matype, 0)
SET IDENTITY_INSERT [dbo].[EssayQuestions] off
 end

GO

--11--
begin
declare @made int;
declare @matype int;
--SET IDENTITY_INSERT [dbo].[Exams] ON 
INSERT [dbo].[Exams] ( [Name], [Description], [IsDelete]) VALUES ( N'Đề 3', N'Hà Nội', 0)
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
VALUES ( '', N'typhoon', N'roof', N'flood', N'moon',3,@matype,0)
--question 2
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'collapsed', N'hiked', N'striped', N'claimed',4,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off
 
--type 2
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 2',N'Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress in each of the following questions.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 3
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'tragedy', N'tolerant', N'productive', N'socialize',3,@matype,0)
 
--question 4
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'receive', N'install', N'persuade', N'cover',4,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 3
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 3',N'Mark the letter A, B, C or D to indicate the underlined part that needs correct in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 5
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Energy-saving bulbs should use  to save  electricity.', N'Energy-saving', N'use', N'to save', N'electricity',2,@matype,0)
 
--question 6
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' He tried to go to work in spite of he was ill.', N'tried', N'to work', N'in spite of ', N'was',3,@matype,0)
 
--question 7
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' There were  so much beautiful flowers that I couldn’t decide what to buy.', N'were', N'so much', N'decide', N'to buy',2,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 4
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 4',N'Mark the letter A, B, C or D to indicate the correct answer to each of the following question.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;
 
--question 8
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' She won’t get married until she......25 years old.', N'is', N'will be', N'would be', N'can be',1,@matype,0)
 
--question 9
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' He.......a letter from her yet.', N'don’t receive', N'didn’t receive', N'hasn’t received', N'won’t receive',3,@matype,0)
 
--question 10
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Linda made me.......her next week.', N'promise to visit', N'to promise to visit', N'promise visiting', N'promising visit',1,@matype,0)
 
--question 11
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I can’t speak English well. I wish I.....English well.', N'can speak', N'could speak', N'spoken', N'had spoken',2,@matype,0)
 
--question 12
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I don’t know what to do. If my mother.......here now, she would help me.', N'is', N'be', N'will be', N'were',4,@matype,0)
 
--question 13
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' If you had arrived at the sale early, you......a better selection.', N'would have found', N'found', N'had found', N'would find',1,@matype,0)
--question 14
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I often come back to Hanoi, ......I grew up.', N'which', N'what', N'whose', N'where',4,@matype,0)
 
--question 15
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' There is a cave in France.......is 1,490 meters deep.', N'that', N'who', N'what', N'it',1,@matype,0)
 
--question 16
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' .......the solar system may seem big, it is a very small part of the universe.', N'Despite', N'Although', N'Even though it', N'Because',2,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 5
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 5',N'Mark the letter A, B, C or D to indicate the correct response to each of the following exchanges', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off
 
set @matype = @@IDENTITY;

--question 17
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Kate: "I thought the film was really boring." Andy: "___"', N'If you like', N'So did I', N'I’m afraid not', N'I do too',2,@matype,0)
 
--question 18
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Peter: "How often do you go to school?"Harry:"_______"', N'I go there early', N'Everyday except Sunday', N'I don’t think so', N'I go there by bus',2,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 6
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 6',N'Mark the letter A, B, C or D to indicate the word(s) CLOSEST in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 19
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' Never (put off) until tomorrow what you can do today.', N'do', N'let', N'delay', N'leave',3,@matype,0)
 
--question 20
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' My father (gave up) smoking two years ago.', N'liked', N'continued', N'stopped', N'enjoyed',3,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 7
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 7',N'Mark the letter A, B, C or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s) in each of the following questions.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 21
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I drink some cups of tea, have a (quick) breakfast and then lead the buffalo to the field.', N'weak', N'strict', N'slow', N'thin',3,@matype,0)
 
--question 22
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ' I leave the house at a quarter past five and arrive in the field at (exactly) 5.30.', N'quickly', N'weakly', N'successfully', N'wrongly',4,@matype,0)
  SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 8
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES
(  N'Exercise 8', N'Read the following passage and mark the letter A, B, C or D to indicate the correct word or phrase that best fits each of the numbered blanks.',N'It might sound strange to you but these are some important rules. If you want to pass examinations, then study grammar ____________(23), if you want to become fluent in English, 
	try to learn English without studying too much grammar because that will only ____________(24) you down and confuse you.
	You will think about rules when creating sentences ____________ (25) than speaking naturally like a native speaker. Some native speakers do not know so many grammatical rules as non-native students.
	Everyone can speak at least one language whether they are intelligent or lack some brain power. This could be achieved by being surrounded by that language at all times. 
	You may notice that there are also some people ____________(26) study abroad and learn very little. That is because they go to an English speaking school, but find friends from their own country and do not practice English. 
	Some others can speak English well ____________(27) they live in an English speaking environment.',
	NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 23
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'Therefore', N'However', N'Although', N'Though',2,@matype,0)
 
--question 24
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'slow', N'make', N'get', N'think',2,@matype,0)
 
--question 25
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'more', N'better', N'rather', N'less',3,@matype,0)
 
--question 26
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'who', N'what', N'which', N'whose',1,@matype,0)
 
--question 27
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( '', N'but', N'because', N'so', N'and',2,@matype,0)
 SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off

--type 9
INSERT [dbo].[TypeQuestions] ([Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 9', N'Read the following passage and mark the letter A, B, C or D to indicate the correct answer to each of the questions.',N'One of the most devastating forces on Earth is a hurricane. A hurricane begins as a tropical storm. The storm winds blow in circles around a center, called the "eye." 
	Gradually, the winds get stronger and stronger. A tropical storm becomes a hurricane when the winds are 120 kilometers per hour or more.
	The word "hurricane" comes from Huracan, an evil god of a Central American Indian tribe. In other parts of the world, hurricanes are known by different names. In East Asia, they are usually called typhoons, from the Chinese tai-feng, meaning "great wind." 
	In Bangladesh, Pakistan, India, and Australia, they are known as cyclones. Finally, in the Philippines, they are called baguios.
	Few things in nature have as much power as hurricanes. They can destroy coastal areas with heavy rains and winds of 250 kilometers per hour or more. 
	Sometimes a hurricane causes the ocean to flood onto land in an event called a storm surge. The total power of a hurricane may be equal to 10,000 nuclear bombs.', NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 28
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ': The word devastating in the passage is closest in meaning to _______.', N'powerful', N'destructive', N'natural', N'enormous',2,@matype,0)
 
--question 29
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ': According to the passage, which of the following is TRUE?', N'Hurricanes always cause a storm surge.', N'Hurricanes have winds of 120 kilometers per hour or higher.', N'All tropical storms become hurricanes.', N'Hurricanes are most common in Central America.',1,@matype,0)
 
--question 30
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ': The word “hurricane” in the second paragraph comes from ______.', N'the Philippines', N'China', N'Central America', N'Bangladesh',3,@matype,0)
 
--question 31
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ': The dangers of a hurricane include the following EXCEPT', N'earthquake', N'storm surge', N'heavy rain', N'strong winds',1,@matype,0)
 
--question 32
INSERT [dbo].[MultipleChoiceQuestions] ([QuestionContent], [Answer1], [Answer2], [Answer3], [Answer4], [Answer], [TypeQuestionId], [IsDelete])
VALUES ( ': Which of the following is the best title for the passage?', N'How To Prepare For A Hurricane', N'Some Facts About Hurricanes', N'The Biggest Hurricanes In History', N'The Difference Between Tropical Storms And Hurricanes',1,@matype,0)
SET IDENTITY_INSERT [dbo].[MultipleChoiceQuestions] off 

--type 10
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 10',N'Rewrite the following sentences using the provided word and keep meaning as that of the root one.', NULL, NULL, @made,0)
 SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 33
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' The factory is producing more and more pollution.', N'More and more..................', N'More and more pollution is being produced by that factory.',@matype, 0)
 
--question 34
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' He drives carelessly, so he usually has accidents.', N'He is such....................', N'He is such a careless driver that he usually has accidents.', @matype, 0)

--question 35
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' He has been collecting stamps for three years.', N'He started.....................', N'He started collecting stamps three years ago.', @matype, 0)

--question 36
INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' I don’t really want to go to the museum.', N'I’d rather.................', N'I’d rather not go to the museum.', @matype, 0)
 SET IDENTITY_INSERT [dbo].[EssayQuestions] off

--type 11
INSERT [dbo].[TypeQuestions] ( [Name], [Tillte], [ContentTypeQuestion], [Description], [ExamId], [IsDelete]) VALUES 
( N'Exercise 11',N'Complete the second sentence so that it has a similar meaning to the first sentence, using the word in brackets.', NULL, NULL, @made,0)
SET IDENTITY_INSERT [dbo].[TypeQuestions]  off

set @matype = @@IDENTITY;

--question 37
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' She didn’t wake up early, but now she does. (USED)', 'She ____________________ early.', N'She used to wake up early.', @matype, 0)

 --question 38
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' They haven’t talked to each other for two years. (SINCE)', 'It’s _______________to each other.', N'It’s two years since They last talked  to each other.', @matype, 0)

 --question 39
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' She has never heard such a ridiculous lie. (MOST)', 'It’s the ____________ever heard.', N'It’s the most ridiculous lie she has ever heard.', @matype, 0)

 --question 40
 INSERT [dbo].[EssayQuestions] ( [QuestionContent], [Suggestions], [Answer], [TypeQuestionId], [IsDelete]) VALUES
( N' He hasn’t been to school for four days. (ABSENT)', 'He ______________school for four days.', N'He has been absent from school for four days.', @matype, 0)
SET IDENTITY_INSERT [dbo].[EssayQuestions] off
 end







GO

--12--
begin
declare @made int;
declare @matype int;
--SET IDENTITY_INSERT [dbo].[Exams] ON 
INSERT [dbo].[Exams] ( [Name], [Description], [IsDelete]) VALUES ( N'Đề 4', N'Đà Nẵng', 0)
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
