const d = document;

const obj = d.getElementById('obj');

const edu = d.getElementById('edu');

const exp = d.getElementById('exp')

const s = d.getElementById('skills')

const FSU = d.getElementById('school')

const p = d.createElement('p')

const geico = d.getElementById('claims')

const ul = d.createElement('ul')

const tcr2 = d.getElementById('TCR2')

const spp = d.getElementById('SPP')

const history = d.getElementById("history")

obj.textContent = "Objectives"

document.querySelector("#obj + p").textContent = "From my 9 years of experience helping customers and working in insurance I have developed the skills to deal with any customer and help them as efficiently and thoroughly as possible. It has also helped me with my problem solving skills as most of my career I have dealt with difficult situations that could ultimately cost people tens, if not hundreds, of thousands of dollars and resolved them with my customer paying nothing out of pocket. I am currently working to shift careers to the world of software engineering and web development as it the field is currently ever expanding and I am starting to enjoy it while learning with my bootcamp."

edu.textContent = "Education"

exp.textContent = "Experience"

const arr = ["Working with and directing counsel with regard to defending our insured and issuing the necessary authority to oppose and file motions, assign a private investigator, settle claims, and pay expenses.", "Resolving disputes in liability and assigning negligence using customer, claimant, and witness recorded statements, police reports, photos, and any other applicable and useful evidence.", "Negotiating and settling third party injury claims with attorney and unrepresented parties using all evidence needed including photographs of the injury, statements from those who saw the injury in person, medical records, prior accident activity, and even social media and private investigators.","Assigning our company's special investigation unit when necessary to investigate any suspicious activity in a claim and possible fraud.", "Investigating coverage using all evidence necessary including recorded statements, field adjusters, and recorded statements and by reviewing the policy in its entirety."]


for (let i=0; i < arr.length; i++) {const li = d.createElement('li');
li.textContent = arr[i];
ul.appendChild(li);}


geico.appendChild(ul)

const arr2 = ["Resolving disputes in liability and assigning negligence using customer, claimant, and witness recorded statements, police reports, photos, and any other applicable and useful evidence.", "Negotiating and settling third party injury claims with attorney and unrepresented parties using all evidence needed including photographs of the injury, statements from those who saw the injury in person, medical records, prior accident activity, and even social media and private investigators.", "Assigning our company’s special investigation unit when necessary to investigate any suspicious activity in a claim and possible fraud.", "Investigating coverage using all evidence necessary including recorded statements, field adjusters, and recorded statements and by reviewing the policy in its entirety.", "Arranging for repairs of vehicle as well as rentals when necessary for insureds and claimants."
]

const ul2 = d.createElement('ul')

for (let i=0; i < arr2.length; i++) {const li = d.createElement('li');
li.textContent = arr2[i];
ul2.appendChild(li);}


tcr2.appendChild(ul2)

const arr3 = ["Managed a team of five to seven associates and assisting them with calls, FMLA paperwork, and various other administrative duties.", "Coordinating with managers in the customer service department to set up proper coaching methods in order to minimize errors and help each associate further their carrier.", "Monitoring associate calls and coaching them on any errors made in terms of both quality and interaction with the customer."]

const ul3 = d.createElement('ul')

for (let i=0; i < arr3.length; i++) {const li = d.createElement('li');
li.textContent = arr3[i];
ul3.appendChild(li);}


SPP.appendChild(ul3)

arr4 =["Beginner level JavaScript, CSS, and HTML.", "I am more than capable of defusing any type of difficult situation.", "I am highly analytical and use the proper resources to make the best decision for our insured and the company.", "Proficient in Microsoft Word, Excel, and PowerPoint", "I am an above average typist at 50+ wpm", "I have a general insurance license, 2-20, and over nine years of experience in the insurance field.", "My communication is always professional yet understandable by the layman.", "I am very self-driven, a self-starter, and very motivated when it comes to resolving any issue both professionally and personally."]

const ul4 = d.createElement('ul')

for (let i=0; i < arr4.length; i++) {const li = d.createElement('li');
li.textContent = arr4[i];
ul4.appendChild(li);}

history.appendChild(ul4)