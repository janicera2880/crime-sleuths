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

u1 = User.create(username: "JessaKleine", password: "aquariousgirl", image_url: "https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: "I'm Jessa Kleine, 29-year-old clerk at a law firm who has a passion for true crime. With a background in criminal justice, I'm fascinated by the inner workings of the criminal justice system and is always eager to learn more. In my spare time, I enjoy listening to true crime podcasts, watching the ID channel and documentaries that explore real-life criminal cases. I am also a keen observer of human behavior, and enjoys using my analytical skills to better understand the motivations behind the crimes I studied. My love for true crime has given me a unique perspective on the world, always eager to share my insights with others who share same interests. Despite the sometimes-gruesome subject matter of my hobbies, I am likewise warm and compassionate person who is always willing to lend a helping hand to those in need.", location: "San Diego CA")
u2 = User.create(username: "HanaStone", password: "taurusfly", image_url: "https://images.unsplash.com/photo-1619887806327-251c7a951dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", bio: "Hey Everyone! My name is Hanael Stone is a 35-year-old librarian with a passion for mystery books and justice. I love for reading books and has led me to become fascinated with shows about detectives and solving crimes. Has a keen eye for detail and enjoys using my analytical skills to solve puzzles and uncover hidden truths. I have a strong desire to help people in need and give a voice to the voiceless. Loving mother to 15-year-old daughter and 10-year-old son and enjoys spending time with family. Despite that I have a quiet demeanor, in the inside I am a strong advocate for justice and fairness, and always willing to stand up for what I believe in.", location: "Albuquerque NM")
u3 = User.create(username: "GenevieveR", password: "sagitarious", image_url: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", location: "Houston TX")
u4 = User.create(username: "XavierV17", password: "scorpioman", image_url: "https://images.unsplash.com/photo-1528440562732-4fd65468049d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60", location: "Bronx NY")
u5 = User.create(username: "GiovanniLi", password: "spiderman", image_url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60", location: "Orlando FL")
u6 = User.create(username: "ClaireJ74", password: "marvelydc", image_url: "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60", location: "Winston-Salem NC")


puts "✅ Done seeding!"