use [englishdb]


GO
/****** Object:  Table [dbo].[EssayQuestions]    Script Date: 25-05-2021 20:14:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EssayQuestions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[QuestionContent] [nvarchar](max) NULL,
	[Suggestions] [nvarchar](max) NULL,
	[Answer] [nvarchar](max) NULL,
	[TypeQuestionId] [int] NOT NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.EssayQuestions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExamResults]    Script Date: 25-05-2021 20:14:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExamResults](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[QuestionId] [int] NOT NULL,
	[UserAnswer] [nvarchar](max) NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.ExamResults] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Exams]    Script Date: 25-05-2021 20:14:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Exams](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.Exams] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MultipleChoiceQuestions]    Script Date: 25-05-2021 20:14:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MultipleChoiceQuestions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[QuestionContent] [nvarchar](max) NULL,
	[Answer1] [nvarchar](max) NULL,
	[Answer2] [nvarchar](max) NULL,
	[Answer3] [nvarchar](max) NULL,
	[Answer4] [nvarchar](max) NULL,
	[Answer] [int] NOT NULL,
	[TypeQuestionId] [int] NOT NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.MultipleChoiceQuestions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeQuestions]    Script Date: 25-05-2021 20:14:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeQuestions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Tillte] [nvarchar](max) NULL,
	[ContentTypeQuestion] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[ExamId] [int] NOT NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.TypeQuestions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 25-05-2021 20:14:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.UserRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 25-05-2021 20:14:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[UserRoleId] [int] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[EssayQuestions]  WITH CHECK ADD  CONSTRAINT [FK_dbo.EssayQuestions_dbo.TypeQuestions_TypeQuestionId] FOREIGN KEY([TypeQuestionId])
REFERENCES [dbo].[TypeQuestions] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[EssayQuestions] CHECK CONSTRAINT [FK_dbo.EssayQuestions_dbo.TypeQuestions_TypeQuestionId]
GO
ALTER TABLE [dbo].[ExamResults]  WITH CHECK ADD  CONSTRAINT [FK_dbo.ExamResults_dbo.Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ExamResults] CHECK CONSTRAINT [FK_dbo.ExamResults_dbo.Users_UserId]
GO
ALTER TABLE [dbo].[MultipleChoiceQuestions]  WITH CHECK ADD  CONSTRAINT [FK_dbo.MultipleChoiceQuestions_dbo.TypeQuestions_TypeQuestionId] FOREIGN KEY([TypeQuestionId])
REFERENCES [dbo].[TypeQuestions] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[MultipleChoiceQuestions] CHECK CONSTRAINT [FK_dbo.MultipleChoiceQuestions_dbo.TypeQuestions_TypeQuestionId]
GO
ALTER TABLE [dbo].[TypeQuestions]  WITH CHECK ADD  CONSTRAINT [FK_dbo.TypeQuestions_dbo.Exams_ExamId] FOREIGN KEY([ExamId])
REFERENCES [dbo].[Exams] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TypeQuestions] CHECK CONSTRAINT [FK_dbo.TypeQuestions_dbo.Exams_ExamId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Users_dbo.UserRoles_UserRoleId] FOREIGN KEY([UserRoleId])
REFERENCES [dbo].[UserRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_dbo.Users_dbo.UserRoles_UserRoleId]
GO



GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 25-05-2021 20:19:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [Model], [ProductVersion]) VALUES (N'202105251103022_InitialCreate', N'EnglishV2.DAL.EnglishV2Context', 0x1F8B0800000000000400ED5DDD6EE33616BE5FA0EF20E8AABB48E3C4998B36B05BA4F959049D4C66E3E960EF068CC438C24A9457A452078B7DB25EEC23ED2B94142559FC9328C952ECA931C02091783EFE7DE7F0F09047F9FFEFFF9BFDB48E42E705263888D1DC3D3D3E711D88BCD80FD072EEA6E4E9BBEFDD9F7EFCE62FB36B3F5A3B9F8B7267AC1C954478EE3E13B23A9F4CB0F70C23808FA3C04B621C3F91632F8E26C08F27D393931F26A7A71348215C8AE538B38714912082D92FF4D7CB187970455210DEC53E0C71FE9CBE5964A8CE071041BC021E9CBBD7681906F8F9F3F4F8EAE2BDEB5C8401A08D58C0F0C975004231018436F1FC570C172489D172B1A20F40F8E9750569B92710629837FD7C53DCB6172753D68BC946B080F2524CE2A825E0E9593E2C1359BCD3E0BAE5B0D181BBA6034C5E59AFB3C1A3E3863178FD470A31C7976B3CBF0C1356BA3AC0194600F1B1207BE494258E4A4650E2B07F47CE651A9234817304539280F0C8F9983E8681F70B7CFD14FF0BA2394AC3B0DA50DA54FA4E78401F7D4CE2154CC8EB037CCA9B7FEBBBCE44949BC882A5584586F7E91691B3A9EB7CA09583C710963CA8F47F41E204FE1D22980002FD8F801098208601B391546A97EA2A468752995089A262CA41AA49AE7307D6EF215A92E7B94B7F749D9B600DFDE249DE985F5140158F0A9124854DF52DD2E592D78807AFEB02E1DF603278350CBE18C6E6A9ABC7BAC55730840416283FC77108016AC6F9005E8265C6889AD6B9CE030CB342F8395871EB232AC917B1F84D12470F7128ABA150EACB224E138FB5386E2CFA09244B48C4C6CF261B9DAFB50462D35A1982AAE8C10EE8EA62FF0FAF29411892E1ABC96D99C89781EBBC82D84B82D528755DAF41B47B8686B54A6F60E80BC10C60C1B0286F4B2B511A14B54861733A1912DED2769E041539188E37331C636AD7B04B30DE8E8A286BAE598B3AABC803C494D31D14850B1ED4455717DDDF257D6DF7B69C4DD696917CE4ED2B156BBC51973803BFF032A222555E69B5A8FABE970AF1CA5B290F1339A88D89AAA3AC341F01C6BFC5893F7845A3F4860D1BA3765F4BB1DFEB6F310A5A739129FAA6C4C658082F145321BEED6D2878E5AD8D05133B188C3753AFDD570B6B12DE519E04AB105E3EC781D735CCA20739105457D7D88157EEE89D8E54CF74A47ACE46AAE7DDC8C1EA6ECBF49E47A2F5E6C31892B628AE2CDB36326D16F30B8C632FC83A52D9394B5B79717CAE91EF34EFEB39D98AFD0CE51B6F78E0D146CCDD53573680F7884F9773E1F173BC4B803DE0ABD3433BE2B76850198BDB34489C0FB1617F53EAA3161926CC2482909A3A4C6D7C80886ABE03E4052B10368E8C246969FA59BFCB3AE43757700511B3DA8DA3605379119C551B50D6234D48D308CD2615963590CF7C96639C738B839D0A19C5D3D8A6C9B7AAA625C5B6CAFD6EEC6CECCB182C6D9C379B46C82BC69BB056DC82991864D88F6D48C3032EF694D46FE12440BE31DB35066A9B3E02E9B47360536F3510F13696518A0AD62D81DA10A1B82017B1F11606D0105B6C20F0DB73CDD0F0911662CD5CD8F2EDCDB866E3C79A68D2CAA9DD50C7B47DB7E7671BCF786F56EA169D1A81CF2DE67647D76EBE0962210B2A0193C2B616E19D2C96B1D61D19527DCC034738DF0ECB3C64C00B48748E2C769DCDEE4BEF882AB416E1A4A355054D64710318334BDA26651B350B616ED34C10C5D2D200C42C9C0E822F2216C28C932600EEF53480E8E9AC83345927A9820AE9C401938FC62B05CD07E8B23658EDBBCB3E96D3AC6895D576B98223B55D367462A76D06A4E6BE9E66602C77846DF784D5819274B56EC49A7781038E9C74D4A30E56CD46C4622B526979AE9C3523A1DF7C4810B98AF6A78C7C24AE5720A37F6CE5214BAA531AB90605D2F9C44D23D96108AC628BEAB0B476E53A3B73953E1B0D6BCD50B671DFB6A062453CB47405CA77B309CF7DC81FCC26862489D91D58AD02B4AC244DE44F9C05CF98B8FC6ED13E9F20E218134F580064C7A5AC89C4095842E92DBB41EAC39B20C1E40A10F0085894FBD28F94628AE36358308BEAB4BE8D3AA7C5EA5988B19F254F8B2591483E90EA32E6F237B48B11F342B3132B93E156E51D96C6024290684EC92EE3308D90D92B364B2BE75E5528E5A53DAE905850C5145ED8E315E73155A8E2993D8AECA357D19AFCF79A1928CF668479289FAA48B389440665AFA0D04ED9908964B6A27A934766CBF43A7B6B41F47AF16178CE2F2054E5F99316DCC96FCB0B9CC99FD9A3682FC35721B505ECF1853B10555CE1853D5E717E5285329DA9D4CCDDBE6808DF65F45803D8A6B383E9D78AEDAA266C9B637BC58EC291EEC7913CAAD08D2926E161F852C46EAB08A678AE19C5B4EA765B71AB57A5E576B5F70AF6867F7CF7D59D79BAADA405E7F462C3B14DB5509BA7F6489BABC355A4CDD3312D66F5BC4DEE97E91CCE8CF6A7B5BF9B204C3F1DD0C5932CF5402F7A58A9778C29A6984D77DE1882E6ED59640BB45FFBFDF23EABBA413F6D8F33D5E14CDBE39CE970CEDAE3BCD3E1BC3BC42F06D16A25982917296B2F839A52F0729607129B3F03A344167911D7A143F412F82CAAB878C50446C7ACC0F1E2DFE1651864AA5114B8032878A2A3CEAFC7BBD393D3A9F43999DDF9B4CB04633FD40462AB99A6E620E41817FD0336B48D57F93B26684A77FBD10B48BC67907C1B81F55FABA01D3F9CD20B4FBC6FDE0B4A7FED3C1B59E522C02DF2E17AEEFE27133D776EFFF945943E72EE134AF273E7C4F96FEF3BEB8F01D9567E4CCDE59D7D6529F7EDB631FFC2673D7A41D57CBAA317AE2653AB179EF8090E5BAA73A95DA5B81A133C507BDBBC1978FA7481BABD9D44F15309B63AC6A57AE998612DEBFD75855D658EE642F43E73666BCA2F7F0BA017D8D65AA5E6F4B7510D2ED94B3DF6C8261A924AF695DD7FC665CD267AB5B7133AC446514AF4DE02D6748B58675BC47AB745AC3E2BFD57B8FFED9DD7FC5629CCBA9DE39859CB63E49134DC86DAFF9CE44E9338544EBC9868624E41198452ADA77A9B59C5BB9A85D42783985FFDD7A6BB8C42277EFF5EC9D719843C3527CF8364067F5D99C0563335E087388A3C30437AD8608C1937B3F7EBCEE6DDA585CC9484576955D72CE2BD58DAACEF53ECC41A279D4897C723725E8A3CDB3569B4CD59B4FC2C7AEEFA8F31E505DF34D467F7D566DA3626DAEAEAABCF48D2A5D31A5371B5DDD16575D664E93624E99AAA3064BF6913718D49BC3A707D3E9C0E963B355A68FECA04AFCF3A94AB30D90AA54253415DF596996FA3660A2B998DB579783AFEAB39287B9105DCA92B757B2763EAD98EA5F6563547BC87D994D1AB48ED5AF2AE55238DAEA83E2D604F9373FBD3BBDE04D6DDBD1C24D156BD8346FD8FCA1F2CA31E110E961B08F6E7CB10F404CFA32C738B9EE2C211925A541491828F7790009FBA251709099E8047E86B0F629C7D2DF3330853C6A5E811FAB7E83E25AB94D02EC3E831143E94CA1CA9BAFAB36C62B1CDB3FBEC18036FA30BB49901ED02BC473FA741E897EDBED1044E0D10CC43CB0F08D85C127650B07C2D913EC4C812281FBED2B1FC04A35548C1F03D5A8017D8A56D54D7DFC325F05E8BAB846690E68910877D76158065425DAB1C63234F7FA51CF6A3F58F7F00A0A242DEB76F0000, N'6.4.4')
GO












 GO
SET IDENTITY_INSERT [dbo].[UserRoles] ON 
GO
INSERT [dbo].[UserRoles] ( [Name], [Description], [IsDelete]) VALUES ( N'admin', NULL, 0)
GO
INSERT [dbo].[UserRoles] ( [Name], [Description], [IsDelete]) VALUES ( N'user', NULL, 0)
GO
SET IDENTITY_INSERT [dbo].[UserRoles] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ( [UserName], [Password], [Name], [UserRoleId], [Description], [IsDelete]) VALUES ( N'admin', N'123456', N'admin', 1, NULL, 0)
GO
INSERT [dbo].[Users] ( [UserName], [Password], [Name], [UserRoleId], [Description], [IsDelete]) VALUES (N'quang', N'123456', N'quang', 2, NULL, 0)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO


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