from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/side2')
def side2():
    return render_template("side2.html")


# Forsøk å legge til en egen side. Her kan du kopiere koden rett over.
# Husk at du må velge en ny adresse inne i @app.route('')
# Husk også at "funksjonen" må få et nytt navn slik som def side3():
# Tilslutt må vi lage en "side3.html". Vi må redigere "return" til å returnere denne.
# Skriv inn koden din rett under:


if __name__ == '__main__':
    app.run(debug=True)
