#Entregable
saldos=(1000,2030,4030,1700,2040)
names=("Mario","Jon","Francisco","Daniel","Antony")
surnames=("Gonzales","Jones","Pérez","Núñez","Ibañez")
pins=("1111","2222","3333","4444","5555")
tipos_de_clientes=("VIP","Estandar","Premium","VIP","Premium")

def cajero_automatico(saldos,names,surnames,tipos_de_clientes):
    def fecha_actual():
        import datetime
        fecha_actual = datetime.date.today()
        fecha_formateada = fecha_actual.strftime("%d/%m/%Y")
        print(fecha_formateada)
    fecha_actual()
       
    while pin==pins[0]or pins[1]or pins[2]or pins[3] or pins[4]: 
        print(f"""{names} {surnames} ¿Qué desea realizar?:
    1: Consultar Saldo
    2: Retirar Dinero
    3: Depositar Dinero
    4: Consultar Membresía
    5: Salir""")
        opc=int(input("Ingrese el número que corresponda a cada acción: "))
        if opc=="1":
            print(f"Usted tiene el saldo total de: {saldos} soles.")
        elif opc=="2":
            monto= int(input("Cuanto dinero desear retirar: "))
            if monto<=saldos:
                saldos=saldos-monto
                print(f"Su saldo actual es de: {saldos}")
            else: 
                monto>saldos
                print(f"No tiene saldo suficiente, su saldo actual es de: {saldos}")
        elif opc=="3":
            monto= int(input("Cuanto dinero deseas depositar: "))
            if monto<=saldos:
                saldos=saldos-monto
                print(f"Su saldo actual es de: {saldos}")
            else: 
                monto>saldos
                print(f"No tiene saldo suficiente, su saldo actual es de: {saldos}")
        elif opc=="4":
            print(f"Usted tiene la membresía {tipos_de_clientes}")
        elif opc=="5":
            print("Recuerda retirar la tarjeta antes de irte.")
            break
        else:
            print("Opcion no valida")
   
intentos=3
print("Bienvenido a New Perú Bank")
while intentos>0: 
    pin=int(input("Ingrese su PIN: "))
    if pin==pins[0]:
        cajero_automatico((saldos[0]),(names[0]),(surnames[0]),(tipos_de_clientes[0]))
        break
    elif pin==pins[1]:
        cajero_automatico((saldos[1]),(names[1]),(surnames[1]),(tipos_de_clientes[1]))
        break
    elif pin==pins[2]:
        cajero_automatico((saldos[2]),(names[2]),(surnames[2]),(tipos_de_clientes[2]))
        break
    elif pin==pins[3]:
        cajero_automatico((saldos[3]),(names[3]),(surnames[3]),(tipos_de_clientes[3]))
        break
    elif pin==pins[4]:
        cajero_automatico((saldos[4]),(names[4]),(surnames[4]),(tipos_de_clientes[4]))
        break                        
    else:
        intentos-= 1
        print(f"PIN incorrecto. Le quedan {intentos} intentos") 
    if intentos==0:
        print("Usted ha hecho demasiados intentos, por favor vuelva mas tarde.")
        break
                          
   
