import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'letmein'
DATABASE = 'Hollywood'

connection = psycopg2.connect( host='localhost', user='postgres', password='letmein', dbname='Hollywood' )

cursor = connection.cursor()

query = "SELECT * FROM actors LIMIT 1;"

cursor.execute(query)

results = cursor.fetchall()

connection.close()

for item in results:
        print(item)
