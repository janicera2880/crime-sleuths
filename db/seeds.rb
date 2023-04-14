# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding data..."
puts "Deleting old data..."

User.destroy_all
Channel.destroy_all
Post.destroy_all



u1 = User.create(username: "JessaKleine", password: "aquariousgirl", image_url: "https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: "I\'m Jessa Kleine, 29-year-old clerk at a law firm who has a passion for true crime. With a background in criminal justice, I\'m fascinated by the inner workings of the criminal justice system and is always eager to learn more. In my spare time, I enjoy listening to true crime podcasts, watching the ID channel and documentaries that explore real-life criminal cases. I am also a keen observer of human behavior, and enjoys using my analytical skills to better understand the motivations behind the crimes I studied. My love for true crime has given me a unique perspective on the world, always eager to share my insights with others who share same interests. Despite the sometimes-gruesome subject matter of my hobbies, I am likewise warm and compassionate person who is always willing to lend a helping hand to those in need.", location: "San Diego CA")
u2 = User.create(username: "HanaStone", password: "taurusfly", image_url: "https://images.unsplash.com/photo-1619887806327-251c7a951dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", bio: "Hey Everyone! My name is Hanael Stone is a 35-year-old librarian with a passion for mystery books and justice. I love for reading books and has led me to become fascinated with shows about detectives and solving crimes. Has a keen eye for detail and enjoys using my analytical skills to solve puzzles and uncover hidden truths. I have a strong desire to help people in need and give a voice to the voiceless. Loving mother to 15-year-old daughter and 10-year-old son and enjoys spending time with family. Despite that I have a quiet demeanor, in the inside I am a strong advocate for justice and fairness, and always willing to stand up for what I believe in.", location: "Albuquerque NM")
u3 = User.create(username: "GenevieveR", password: "sagitarious", image_url: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", bio: "Genevieve R. Jackson is the critically acclaimed author of Allegedly, Mondays Not Coming, and Let Me Hear a Rhyme. A Walter Dean Myers Honor Book and Coretta Scott King and John Steptoe New Talent Award winner, she received her bachelor of arts in film from Howard University, earned her master of arts in media studies from the New School, and has over a decade in TV and film experience. The Houston native still resides in the Houston Heights she loves.", location: "Houston TX")
u4 = User.create(username: "XavierV17", password: "scorpioman", image_url: "https://images.unsplash.com/photo-1528440562732-4fd65468049d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60", bio: "Xavier Anderson is a 33-year-old High School Geography Teacher with a deep passion for the outdoors, sports, and solving mysteries. In his free time, he enjoys hiking with his loyal companion, Kobe, and exploring nature. He is a natural adventurer, always seeking new challenges and experiences, and enjoys pushing his limits.", location: "Bronx NY")
u5 = User.create(username: "GiovanniLi", password: "spiderman", image_url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60", bio: "As a science teacher, Giovanni Li is passionate about helping his students explore the world around them and gain a deeper understanding of geography. He is patient, kind, and dedicated to helping his students succeed both in and out of the classroom. His love for sports and the outdoors also translates into his teaching, as he frequently incorporates physical activity and outdoor exploration into his lesson plans.", location: "Orlando FL")
u6 = User.create(username: "ClaireJ74", password: "marvelydc", image_url: "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", bio: "Claire Lopez is a professional photographer who grew up in Vancouver, Canada. As a child, she loved spending her days outdoors, playing and exploring. On rainy days, he would draw pictures of mountains and rivers. During her teen years, she discovered photography. She immediately fell in love with nature photography, and now, she has delved into writing books about mystery and novels.", location: "Winston-Salem NC")

c1 = Channel.create(name: "Unlikely Suspects", description: "A fascinating exploration of cases where the perpetrator of a murder was the last person you would expect. Join us as we unravel the stories of everyday individuals who, to the shock of their communities, were revealed to have committed heinous crimes. From upstanding citizens to model employees, we examine the clues that led investigators to the unexpected killer and uncover the shocking secrets that lay hidden beneath the surface. Don't miss out on this captivating series that will leave you questioning everything you thought you knew about crime and the people around you, only on our channel.")
c2 = Channel.create(name: "Deadly Betrayal", description: "Introducing our gripping, shocking and heart-wrenching exploration of marriages that ended in murder. Join us as we delve into the twisted and often tumultuous relationships that ended in the ultimate betrayal - the death of a partner. From the outside, these couples appeared to have it all, but behind closed doors, tensions simmered until someone snapped. We examine the warning signs that were missed, the clues that were ignored, and the explosive moments that led to fatal consequences. Don\'t miss out on this harrowing stories that will leave you questioning the true nature of love and trust, only on our channel.")
c3 = Channel.create(name: "Cold Cases: Solved and Unsolved", description: "A captivating exploration of cases that have stumped investigators for years. Join us as we take a deeper look into the details of both solved and unsolved cases, examining the forensic evidence, witness testimony, and the investigative techniques used to crack these complex cases. From notorious serial killers to elusive perpetrators, we take you on a journey through some of the most fascinating and puzzling cold cases in history.")
c4 = Channel.create(name: "Death In The Dorm", description: "The category focuses on the heartbreaking topic of death in college dorms. It sheds light on the unfortunate truth that these supposed safe havens can sometimes be the setting of tragedy and loss, particularly among young individuals. Through this category, we confront the sobering reality of unsafe living conditions and the devastating impact it can have on those affected.")
c5 = Channel.create(name: "Signs Of A Psychopath", description: "A riveting exploration into the mind of a psychopath and the heinous crimes they commit. Join us as we uncover the psychology behind some of the most notorious crimes ever committed and the twisted motives and methods of these dangerous individuals. From serial killers to mass murderers, we examine the dark side of the human psyche and shed light on the factors that drive individuals to commit such atrocities. Don\'t miss out on this chilling and thought-provoking stories, only on our channel.")
c6 = Channel.create(name: "A Crime To Remember", description: "Talks about crimes that took place in the US that caught a lot of media attention. A true-crime stories that explores some of America\'s most notorious and infamous murders, when headlines were dominated by sensational acts of violence.")

p1 = Post.create(title: "The Black Widow: The Stacey Castor Case",
image: "https://www.oxygen.com/sites/oxygen/files/styles/blog-post-embedded--tablet/public/2021/02/stacey-and-michael-exhumed-108.jpg?itok=HV72GWCA", 
content: "Stacey Castor almost got away with it. She wanted people to believe that her life had been crippled by tragedy - that her first husband had died of a heart attack, her second husband had died by poisoning himself with antifreeze, and that her daughter had also attempted suicide. But, according to police, all of it was a lie - and the seemingly unfortunate wife and mother was actually a cold-blooded killer, now known by many as the Black Widow. Stacey Ruth Castor may have been one of the most sociopathic female serial killers in modern times. She poisoned her first husband Michael Wallace with anti-freeze after he becomes an inconvenience to her and did the same to her second husband David Castor years later. When she caught wind that the police were onto her methods, she poisoned her own daughter and wrote a confession letter on her behalf. She tried to pin the crimes on her daughter. Dubbed the Black Widow by the national media, recent findings have opened up the possibility that Stacey killed her own father as well. Cool, calm and collected, Stacey maintained her innocence throughout the court proceedings, adamantly pointing the finger of blame at her own daughter. But what possessed her to kill not only her husbands but her own flesh and blood?", 
user_id: u1.id, channel_id: c2.id)

p2 = Post.create(title: "The Unraveling of Chris Watts", 
image: "https://akns-images.eonline.com/eol_images/Entire_Site/202092/rs_1200x1200-201002153419-1200-chris-watts-american-murder-netflix.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
content: "Chris Watts is now known as a calculating and ruthless killer, as well as an adulterer and a liar. But before the horrific crimes he committed in the early hours of Aug. 13, 2018, Chris possessed the facade of a consummate family man. Then 33 years old, Chris lived with his family in Frederick, Colorado, southeast of Longmont. Married for nearly six years, he and wife Shanann had two daughters — Bella, age 4, and Celeste, age 3 — and were expecting a third. Chris was employed by Anadarko Petroleum, while Shanann, 34, worked at a call center for a children\'s hospital. They appeared happy in family photos. But looks, as is so often the case, can be deceiving. The Watts had filed for bankruptcy in June 2015, after becoming buried in debt by their mortgage, credit cards, medical bills and student loans. By late summer 2018, Chris was having an affair with Nichol Kessinger, whom he met through work. He purportedly claimed to be separated from his wife, and that a divorce was imminent. Instead, however, Chris was coldly planning the murder of his family, including their unborn child. Chris felt trapped by his marriage and growing family, and wanted to start a new life with Nichol. But rather than seeking therapy, or filing for divorce and working out terms for support and custody, Chris chose to do the unimaginable.",
user_id: u2.id, channel_id: c1.id)

p3 = Post.create(title: "Cold Case Murders From 1980s Solved With Genetic Genealogy",
image:"https://s.abcnews.com/images/US/lloyd-cuevas-w-01-ht-iwb-220726_1658840916055_hpMain_16x9_992.jpg",
content: "Shannon Lloyd was killed in 1987 and Renee Cuevas in 1989. Two decades-old cold case murders in California have been solved through the novel investigative tool of genetic genealogy, authorities announced. The first victim was 23-year-old Shannon Rose Lloyd, who was was sexually assaulted and strangled to death in her Garden Grove bedroom in May 1987, Garden Grove Deputy Police Chief Amir El Farra said. Renee Cuevas, 27, was killed two years later, he said. In 2003, police determined the same man committed both crimes and his DNA was submitted to the law enforcement database CODIS. No suspect was identified, El Farra said. Then last year, authorities turned to genetic genealogy, which uses an unknown suspect\'s DNA to trace his or her family tree. Genetic genealogy made headlines in 2018 when it was used to find the Golden State Killer. Genetic genealogy takes an unknown suspect\'s DNA left at a crime scene and identifies it using family members who voluntarily submit DNA samples to a DNA database. Police can then create a much larger family tree than if they only used databases like CODIS. Genetic genealogy identified Reuben Smith, who lived in Orange County in the 1980s, as a possible suspect.",
user_id: u3.id, channel_id: c3.id)

p4 = Post.create(title: "The Laci Peterson Murder",
image: "https://www.rollingstone.com/wp-content/uploads/2018/06/gettyimages-563554565-027ba8c5-b43a-46a7-a24f-8574bc601b69.jpg",
content: "Peterson went missing on Christmas Eve 2002 while she was eight months pregnant with a son she had named Connor. Throughout early 2003, her disappearance dominated the TV news right alongside the hunt for Saddam Hussein. The tragic story established a cast of characters who covered tabloid magazines for years, including Laci\'s handsome husband Scott Peterson, Scott\'s mistress, and a gaggle of celebrity lawyers. The tangled drama proved that even with other, more serious problems in the world, Americans had a bottomless appetite for true crime. Before you dive back into the story that captivated—and distracted—millions, here\'s what you need to know about Laci Peterson\'s disappearance and death. On December 24th, 2002, Scott and Laci Peterson woke together at their home in Modesto, California. After eating breakfast and watching some TV, Scott left to go fishing while Laci took the couple\'s dog for a walk. Later that day, a neighbor found their dog, still wearing a leash, wandering in front of the house by himself. Scott Peterson told police he first drove to his nearby warehouse to send emails and retrieve his boat, which he brought to Berkeley Marina. Indeed, the evidence - timestamped emails and a receipt from the marina backed him up. After about 90 minutes of fishing, Scott said, he returned his boat to the warehouse, went home to an empty house and showered. Scott told investigators that he assumed Laci had gone to her mother\'s house. He called his mother-in-law, looking for his wife. Half an hour later, Laci\'s stepfather called 911 to report that she was missing.",
user_id: u4.id, channel_id: c6.id)

p5 = Post.create(title: "Jeffrey Dahmer: Psychopathy And Neglect",
image: "https://i2-prod.chroniclelive.co.uk/incoming/article25099948.ece/ALTERNATES/s615/0_Netflixs-Monster-The-Jeffrey-Dahmer-Story-is-the-latest-documentary-to-follow-the-notorious-cannib.jpg",
content: "Throughout history, people around the world have been captivated by the topic of serial murderers, primarily because they can\'t understand why an individual would be willing to take not only one life but multiple. Numerous sociologists and criminologists have dedicated their entire lives to the research of individuals who prey upon other human beings. As a result, there is never a shortage of information about what makes a serial killer and even how that serial killer grew up. With an estimated 500 serial killers living and working in unsuspecting communities, understanding the origins and or causes for their anti-social and psychopathic tendencies is of the utmost interest and importance to researchers and law enforcement officials. Statistically, these sadistic individuals are believed to be responsible for 3500 to 5000 murders every year. Current research on individuals with anti-social and psychopathic tendencies has revealed copious amounts of information on the serial murderer\'s psyche, biological development, and environmental development, very little research has focused on the elements of a serial murderer\'s youth, which may have played a crucial part in violent behavior later in life. In this exploratory case study, the author will focus on the American serial killer Jeffrey Dahmer, tracing the source of his psychopathic tendencies back to his childhood neglect and resulting emotional abuse, his fascination with death, and discussing how this may have influenced his opinion of the value of his own life in comparison to the value of the lives of his seventeen young victims.",
user_id: u5.id, channel_id: c5.id)

p6 = Post.create(title: "The Idaho Murders",
image: "https://e3.365dm.com/22/12/2048x1152/skynews-martha-kelner-idaho_5996110.jpg",
content: "University of Idaho murders suspect Bryan Kohberger may have held onto an ID belonging to one of the four killed in the shocking November stabbings, sources claimed this week. Kohberger, 28, was arrested in Pennsylvania on Dec. 30 - six weeks after Kaylee Goncalves, Madison Mogen, Xana Kernodle and Ethan Chapin were murdered in their off-campus home in Moscow. At the time of the killings, Kohberger was a doctoral student in criminal justice at Washington State University in Pullman, just 15 miles from Moscow. Kohberger, who has not yet entered a plea to four counts of murder and one of felony burglary, is in custody in Latah County, Idaho. He is due back in court on June 26. The killings of four University of Idaho students in mid-November at an off-campus residence stunned the small community of Moscow, where investigators grappled with what the town's police chief would later describe as a very complex case. A vigil is held at the University of Idaho in honor of the victims, with some family members in attendance. We\'re going to get our justice, Steven Goncalves, Kaylee\'s father, says, adding that his daughter and Mogen had been best friends since the sixth grade and he had learned that they were in the same bed when they were killed. They went to high school together, then they started looking at colleges, they came here together. They eventually get into the same apartment together, he said. And in the end, they died together.",
user_id: u6.id, channel_id: c4.id)

p7 = Post.create(title: "Lori Vallow Trial",
image: "https://www.nydailynews.com/resizer/XXkRu1vJAvyO1OU3ch4H2Ck2Bj4=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/PXTOCUYGU5BBZJ32J2RPLHR67A.JPG",
content: "Vallow, 49, is charged with first-degree murder in the deaths of her children, Tylee Ryan and JJ Vallow, as well as the murder of Tammy Daybell, her husband Chad Daybell\'s ex-wife. Vallow has pleaded not guilty to all charges. As the images were shared in court on Tuesday afternoon, the grandfather of one of the slain children sobbed in the back of the room. The kids went missing in 2019, sparking a nationwide search that ended when their bodies were found buried in an Eastern Idaho yard the following year. The yard belonged to Chad Daybell, Lori Vallow\'s fifth husband. He is also charged with multiple counts of conspiracy, murder and grand theft in connection with the deaths of the children. Prosecutors charged them with the 2019 murder of Daybell\'s ex-wife, too. Rexburg, Idaho, Det. Ray Hermosillo was the only witness to take the stand Tuesday. He discussed the origins of the investigation, as well the condition of the children\'s bodies when they were found. Photos shared Tuesday were exceedingly graphic. In one image, JJ could be seen in red pajamas and socks, with duct tape covering his mouth and tying his arms and legs together. His arms were heavily bruised and his body had partially decomposed after having been buried for the eight months it took authorities to find them. In other images, Tylee\'s remains were shown destroyed and burned, packed into a melted green bucket and buried at various locations on Daybell\'s property. The evidence was so graphic that at one point, Vallow\'s defense attorneys requested that she be removed for the rest of the day\'s testimony to protect her already-distraught mental state. But Judge Steven Boyce had her remain in the courtroom, claiming her presence was vital to a fair trial.",
user_id: u1.id, channel_id: c1.id)
        
puts "✅ Done seeding!"

p "Created #{Channel.count} channels"
p "Created #{User.count} users"
p "Created #{Post.count} posts"