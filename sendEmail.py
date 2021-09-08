#import smtplib

""" gmail_user = 'forpoctest@gmail.com'
gmail_password = 'forpoctest123'

sent_from = gmail_user
to = ['forpoctest@gmail.com', 'kaleeswaran1211@gmail.com']
subject = 'first Attempt'
body = 'first Attempt'

email_text = """\
""" From: %s
To: %s
Subject: %s

%s """
""" % (sent_from, ", ".join(to), subject, body)

try:
    smtp_server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    smtp_server.ehlo()
    smtp_server.login(gmail_user, gmail_password)
    smtp_server.sendmail(sent_from, to, email_text)
    smtp_server.close()
    print ("Email sent successfully!")
except Exception as ex:
    print ("Something went wrong….",ex) """

""" smtpserver = smtplib.SMTP("smtp.gmail.com", 587)
smtpserver.ehlo()
smtpserver.starttls()
smtpserver.ehlo()
smtpserver.login('forpoctest@gmail.com', 'forpoctest123') """



import smtplib
from email.message import EmailMessage

msg = EmailMessage()
msg.set_content('hi,\n Email sent successfully')

msg['Subject'] = 'lotus pacific'
msg['From'] = "forpoctest@gmail.com"
msg['To'] = "nmkrishan@gmail.com,forpoctest@gmail.com"

# Send the message via our own SMTP server.
server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
server.login("forpoctest@gmail.com", "forpoctest123")
server.send_message(msg)
server.quit()

""" message = 'Subject: {}\n\n{}'.format(SUBJECT, TEXT)


server = smtplib.SMTP(SERVER)
server.sendmail(From, To, message)
server.quit() 

 """