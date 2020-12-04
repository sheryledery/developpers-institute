#Reading and writing JSON :

import json
person = {
	"name": "Jon",
	"age": 10,
	"married": False,
	"family": ["Dad", "Mom", "Cat"],
	"address": {
		"country": "Israel",
		"city": "Tel Aviv"
	} 
}
# Convert to JSON and write to File
with open("myfile", "w") as f:
	json.dump(person, f)
# Read JSON from a file and convert back to Python
with open("myfile", "r") as f:
	data = json.load(f)
