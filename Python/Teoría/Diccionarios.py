personas={
    "Nombres":"Lucyna",   
    "Apellidos":"Kushinada",
    "Edad":20
} # El índice lo declaramos nosotros, igualmente son desordendados
print(personas.get("Edad")) # Muestra el value de "Edad" si no existe devuelve None
print(personas["Edad"]) # Muestra el value de "Edad" si no existe lanza error
print(personas.keys()) # Devuelve las claves
print(personas.values()) # Devuelve los valores
print(personas.items()) # Devuelve las claves y los valores
print(personas) # Muestra el personas completo
#print(personas.pop("Edad")) # Elimina la clave "Edad" y devuelve su valor
#print(personas.popitem()) # Elimina el último elemento y devuelve su clave y valor
personas.update({"Nombres": "Lucy"}) # Actualiza el valor de "Nombres" por "Lucy"
personas.setdefault("Género", "Femenino") # Añade "Género" con valor "Femenino" si no existe
print(personas)
# personas=dict(nombre="luis",apellidos="garcia")
# personas=dict.fromkeys("nombre","apellido")#itera el primer elemento
# personas=dict.fromkeys(["nombre","apellido"])#normal(nombre:none,apellido:none)
# personas=dict.fromkeys(["nombre","apellidos"],"no sé")#normal(nombre:no sé,apellido:no sé)
# print(personas)
