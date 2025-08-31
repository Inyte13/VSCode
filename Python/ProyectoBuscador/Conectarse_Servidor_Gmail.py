import imaplib # Importando un módulo de Python, sirve para hablar con IMAP
# Variables en UPPERCASE porque no cambiarán durante el código
# IMAP: Lee datos y los muestra
# POP: Descarga y borra
IMAP="imap.gmail.com" # Variable donde guardo el imap.gmail.com (servidor de Gmail para IMAP) 
CUENTA="lgarciada@unsa.edu.pe"
CONTRASEÑA="bajx syzz ljkp dbox"
gmail=imaplib.IMAP4_SSL(IMAP)
gmail.login(CUENTA,CONTRASEÑA) # Inicio sesión con .login(usuario, contraseña)
gmail.select("inbox") # Selecciono la bandeja de entrada con .select("inbox")
status, data = gmail.search(None, "ALL") # .search(None, "ALL") devuelve el status OK y los IDs en una lista con solo un elemento bytes b'1 2 3 4 ...'
ids=data[0].split(b" ") # Accedemos al elemento cero de la lista datos y lo dividimos con b" " 
print(ids)
gmail.logout()
