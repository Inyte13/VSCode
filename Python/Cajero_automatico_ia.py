import datetime

clientes = [
    {"nombre": "Mario", "apellido": "Gonzales", "saldo": 1000, "pin": "1111", "tipo": "VIP"},
    {"nombre": "Jon", "apellido": "Jones", "saldo": 2030, "pin": "2222", "tipo": "Estandar"},
    {"nombre": "Francisco", "apellido": "Pérez", "saldo": 4030, "pin": "3333", "tipo": "Premium"},
    {"nombre": "Daniel", "apellido": "Núñez", "saldo": 1700, "pin": "4444", "tipo": "VIP"},
    {"nombre": "Antony", "apellido": "Ibañez", "saldo": 2040, "pin": "5555", "tipo": "Premium"}
]

def fecha_actual():
    fecha_actual = datetime.date.today()
    fecha_formateada = fecha_actual.strftime("%d/%m/%Y")
    print(fecha_formateada)

def consultar_saldo(cliente):
    print(f"Saldo disponible: {cliente['saldo']} soles.")

def retirar_dinero(cliente):
    monto = int(input("Ingrese el monto a retirar: "))
    if monto <= cliente['saldo']:
        cliente['saldo'] -= monto
        print(f"Retiraste {monto} soles. Saldo actual: {cliente['saldo']} soles.")
    else:
        print("Saldo insuficiente.")

def depositar_dinero(cliente):
    monto = int(input("Ingrese el monto a depositar: "))
    cliente['saldo'] += monto
    print(f"Depósito exitoso. Saldo actual: {cliente['saldo']} soles.")

def consultar_membresia(cliente):
    print(f"Tipo de membresía: {cliente['tipo']}")

def cajero_automatico(cliente):
    print(f"Bienvenido, {cliente['nombre']} {cliente['apellido']}")
    fecha_actual()
    while True:
        print("""¿Qué desea realizar?:
        1: Consultar Saldo
        2: Retirar Dinero
        3: Depositar Dinero
        4: Consultar Membresía
        5: Salir""")
        opc = input("Ingrese el número que corresponda a cada acción: ")
        if opc == "1":
            consultar_saldo(cliente)
        elif opc == "2":
            retirar_dinero(cliente)
        elif opc == "3":
            depositar_dinero(cliente)
        elif opc == "4":
            consultar_membresia(cliente)
        elif opc == "5":
            print("Gracias por utilizar nuestros servicios.")
            break
        else:
            print("Opción no válida.")

def main():
    print("Bienvenido a New Perú Bank")
    intentos = 3
    while intentos > 0:
        pin = input("Ingrese su PIN: ")
        cliente = next((c for c in clientes if c['pin'] == pin), None)
        if cliente:
            cajero_automatico(cliente)
            break
        else:
            intentos -= 1
            print(f"PIN incorrecto. Le quedan {intentos} intentos.")
            if intentos == 0:
                print("Usted ha hecho demasiados intentos, por favor vuelva más tarde.")

if __name__ == "__main__":
    main()
