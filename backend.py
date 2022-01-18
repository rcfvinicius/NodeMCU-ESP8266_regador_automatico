from flask import Flask, request, render_template#, json
from flask_mail import Mail, Message
import json
import csv
import datetime

import sys
sys.path.insert(0,'/home/rcfvinicius')
import senhas as chave

header_key = chave.header_

app = Flask(__name__)
#-------------------------------novo
from flask_cors import CORS
CORS(app)
cors = CORS(app, resources={
    r"/login*":{
        "origins":"*"
        },
    r"/logon*":{
        "origins":"*"
        },
    r"/node*":{
        "origins":"*"
        },
    r"/dados*":{
        "origins":"*"
        },
    r"/nivelagua*":{
        "origins":"*"
        },
    r"/nivelaguabaixo":{
        "origins":"*"
         },
    r"/nivel":{
        "origins":"*"
         }
    })

@app.route('/login', methods=['GET','POST'])
def axios():
    #return {"Datalog":"teste"}
    header = request.get_json()
    global v
    v = header['chave']
    return 'x'

@app.route('/logon', methods=['GET','POST'])
def logon():
    if v == '1':
        return {'query':'ok'}
    else:
        return {'query':'err'}

global niveldaagua
niveldaagua = ''
global arr
arr = []
global arr1
arr1 = []

@app.route('/dados', methods=['GET','POST'])
def dados():
    ler()
    return {'a':arr[-1], 'b':arr[-2], 'c':arr[-3], 'd':arr[-4], 'e':arr[-5], 'f':niveldaagua}



@app.route('/node', methods=['GET','POST'])
def node():
    hora()


@app.route('/nivelagua', methods=['GET','POST'])
def nivelagua():
    gravarNivel('Normal')

@app.route('/nivelaguabaixo', methods=['GET','POST'])
def nivelaguabaixo():
    gravarNivel('Baixo')

@app.route('/nivel', methods=['GET','POST'])
def nivel():
    lerNivel()
    return {'n':arr1[-1]}


####################funcoes
def gravarNivel(a):
    nome_do_arquivo = "/home/rcfvinicius/mysite/dados/nivel.csv"
    linha = str(a)+"\n"
    arquivo = open( nome_do_arquivo , 'a' )
    arquivo.write( linha )
    arquivo.close()

def lerNivel():
    arquivo = csv.reader(open('/home/rcfvinicius/mysite/dados/nivel.csv'))
    for linha in arquivo:
        arr1.append(linha)

def gravar(a):
    nome_do_arquivo = "/home/rcfvinicius/mysite/dados/armazenamento.csv"
    linha = str(a)+"\n"
    arquivo = open( nome_do_arquivo , 'a' )
    arquivo.write( linha )
    arquivo.close()


def ler():
    arquivo = csv.reader(open('/home/rcfvinicius/mysite/dados/armazenamento.csv'))
    for linha in arquivo:
        arr.append(linha)

def hora():
    d = str(datetime.datetime.now())
    hora = int(d[11:13]) - 3
    st = d[14:16]+' - '+d[8:10]+'/'+d[5:7]+'/'+d[2:4]
    data = str(hora)+':'+st
    gravar(data)
    #h:m - d/m/a
    #0123456789012345678
    #2021-12-06 14:47:19.102678