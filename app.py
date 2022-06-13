from crypt import methods
import json

# from importlib_metadata import method_cache
from boggle import Boggle
from flask import Flask, jsonify, render_template, redirect,session, request
boggle_game = Boggle()


app = Flask(__name__)
app.config['SECRET_KEY'] = 'hello'
app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']
app.debug = True

@app.route('/')
def home_page():
    board = boggle_game.make_board()
    session['board'] = board
    return render_template('home.html',board=board)

@app.route('/check-word')
def word_handler():
    word = request.form['guess']
    board = session['board']
    response = boggle_game.check_valid_word(board,word)
    print(word)

    return jsonify({'result':response})

# @app.route('/post-score', methods = ['POST'])
# def post_score():
#     score = request.json('score')

