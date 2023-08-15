from bottle import route, run, get, static_file

@route('/static/<filepath:path>', name='static')
def static(filepath):
    return static_file(filepath, root='./public')

@get('/')
def home():
    return static_file('index.html', root='public/')

run(host='localhost', port=8080, debug=True, reloader=True)