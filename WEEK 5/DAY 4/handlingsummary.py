#File handling summary

#Write
with open('myfile', 'w') as f:
	f.write("Hello\n")
	f.write("World\n")
#Append
with open('myfile', 'a') as f:
	f.write("Goodbye\n")
#Read one line at a time
with open('myfile', 'r') as f:
	one_line = f.readline()
#Read entire file into a single line
with open('myfile', 'r') as f:
	single_line = f.read()
#Read entire file, line by line, into a list
with open('myfile', 'r') as f:
	list_of_lines = f.readlines()
#Move the file pointer to position 3
with open('myfile', 'r') as f:
	f.seek(3)
	data = f.readline()