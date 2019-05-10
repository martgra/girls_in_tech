# Lett nettside med medfølgende server

## Kom i gang

0. Sørg for å ha følgende installert:
* python 3.6 eller 3.7 installert: https://www.python.org/downloads/
  * Husk å huke av for "Add to PATH" under installasjonen
* GIT https://git-scm.com/downloads
* Visual Studio Code: https://code.visualstudio.com/ med extensions
  * Beautify
  * HTML Snippets
  * HTML CSS Support
  * Python
  * Python-autopep8
  
#### 1. Klone koden til nettsiden til lokal datamaskin
For Windows:
* Søk etter cmd og skriv
```cmd
git clone https://github.com/martgra/girls_in_tech.git %HOMEPATH%\Documents\girls_in_tech
```
  * Trykk "Enter"
  * Det har nå blitt opprettet en ny mappe i "Documents" som heter girls_in_tech der alle filene man trenger finnes.

For MAC
* Søk etter "Terminal" (finnes også under Applications) og skriv
```bash
git clone https://github.com/martgra/girls_in_tech.git ~/Documents/girls_in_tech
```
  * Trykk "Enter"
  * Det har nå blitt opprettet en ny mappe i "Documents" som heter girls_in_tech der alle filene man trenger finnes.

#### 2. Åpne koden in VSCode og starte "server"
  * Velg "File-->Open Folder --> girls_in_tech" (den mappen som ble laget i forrige trinn)

For Windows
  * Trykk "CTRL+Shift+P"
  * I linjen som åpner seg skriv "Shell" og velg "Terminal: Select Default Shell"
  * Velg "Command Prompt"
  * Velg "Terminal --> New Terminal" fra verktøylinjen
  * Skriv følgende kommandoer

```cmd
python -m venv venv
```
```cmd 
venv/Scripts/activate
```
```bash 
pip install flask
```
```cmd
python app.py
```
For MAC
  * Velg "Terminal --> New Terminal" fra verktøylinjen
  * Skriv følgende kommandoer

```bash
python -m venv venv
```
```bash 
source venv/bin/activate
```
```bash 
pip install flask
```
```bash
python app.py
```

* Kontroller at du får tilgang på 127.0.0.1:5000
* Cache må slettes hver gang endringer i nettsiden gjøres. Dette gjøres ved CTRL+F5
