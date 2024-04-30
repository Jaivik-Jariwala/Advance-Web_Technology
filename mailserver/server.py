
import smtplib 
   
my_email=’jess_xxx@gmail.com’
password_key=’xxxxx’
    
# SMTP Server and port no for GMAIL.com
gmail_server= "smtp.gmail.com"
gmail_port= 587


# Starting connection
my_server = smtplib.SMTP(gmail_server, gmail_port)
my_server.ehlo()
my_server.starttls()
      
# Login with your email and password
my_server.login(my_email, password_key)

from email.mime.multipart import MIMEMultipart
message = MIMEMultipart("alternative")

from email.mime.text import MIMEText


text_content= “ Hello, I am a final year student with an Mtech degree in Computer science specializing in Artificial Intelligence. I’m interested in data science roles at your organization.”


message.attach(MIMEText(text))

resume_file = '...../resume.txt'


# Read the file from location
with open(resume_file, 'rb') as f:
    file = MIMEApplication(
        f.read(),
        name=os.path.basename(resume_file)
    )
    file['Content-Disposition'] = f'attachment; 


    filename="{os.path.basename(resume_file)}"'
    message.attach(file)

import csv


with open("job_contacts.csv") as csv_file:
        jobs = csv.reader(csv_file)
        next(jobs)  # Skip header row
        
        for recruiter_name, recruiter_email, organization, 
        organization_sector,job_role in jobs:
            
            email_text=text_content.format(recruiter_name, recruiter_email
            Organziation, organization_sector, job_role)
            
            # Attaching the personalized text to our message
            message.attach(MIMEText(email_text))
            
            my_server.sendmail(
                from_addr= my_email,
                to_addrs=recruiter_email,
                msg=message
            )




my_server.quit()