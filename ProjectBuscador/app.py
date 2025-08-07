# "pip freeze > requirements.txt": Para sync de la pip list
from flask import Flask, render_template, request
# Importamos Flask
# render_template: Para renderizar HTML
# request: Para recibir datos del usuario 
import pandas as pd
# Importamos Pandas

app=Flask(__name__) # Creamos la instancia de la app
dataF=pd.read_csv("libros.csv") # Asignar el DataFrame a "dataF"

@app.route("/") # Define la ruta principal
def index(): # Función que se ejecuta cuando visitan la pagina principal
    return render_template('index.html') # Retorna el HTML
@app.route("/buscar", methods=['POST']) # Define "/buscar" cuando el usuario hace la búsqueda, solo permite POST
def buscar(): # Función que se ejecuta cuando el usuario hace una búsqueda
    consulta=request.form["consulta"].lower() # Obtiene la consulta del formulario y la convierte a minúsculas
    resultados=dataF[dataF["genero"].str.contains(consulta, case=False)] # Busca en la columna "genero" sin distinguir mayúsculas y minúsculas
    return render_template("resultados.html", libros=resultados.to_dict(orient='records')) # Muestra resultados.html y palas los resultados como un diccionario
if __name__=='__main__': # Si el archivo es el principal
    app.run(debug=True) # Ejecuta la app en modo debug
