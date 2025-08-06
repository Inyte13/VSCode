from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)
df = pd.read_csv('libros.csv')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/buscar', methods=['POST'])
def buscar():
    consulta = request.form['consulta'].lower()
    resultados = df[df['genero'].str.contains(consulta, case=False)]
    return render_template('resultados.html', libros=resultados.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
