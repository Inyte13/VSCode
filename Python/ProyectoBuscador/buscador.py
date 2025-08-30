import imaplib
import email
from email.header import decode_header
IMAP_SERVER = "imap.gmail.com"
EMAIL_ACCOUNT = "lgarciada@unsa.edu.pe"
PASSWORD = "bajx syzz ljkp dbox" 

# --- Conectar a Gmail ---
mail = imaplib.IMAP4_SSL(IMAP_SERVER)
mail.login(EMAIL_ACCOUNT, PASSWORD)

# Seleccionar la bandeja de entrada
mail.select("inbox")

# Buscar los últimos 10 correos
status, mensajes = mail.search(None, "ALL")
mail_ids = mensajes[0].split()
ultimos_10 = mail_ids[-10:]

for num in ultimos_10:
    status, data = mail.fetch(num, "(RFC822)")
    for response_part in data:
        if isinstance(response_part, tuple):
            msg = email.message_from_bytes(response_part[1])
            # Decodificar el asunto
            subject, encoding = decode_header(msg["Subject"])[0]
            if isinstance(subject, bytes):
                subject = subject.decode(encoding if encoding else "utf-8")
            print("📧 Asunto:", subject)
            print("De:", msg.get("From"))
            print("-" * 40)

mail.logout()
