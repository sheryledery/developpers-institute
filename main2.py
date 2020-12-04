import tkinter

app = tkinter.Tk()


def hello():
	print("Hello on terminal !")

msg="Welcome Everyone!"

message_welcome = tkinter.Message(app, text=msg)
message_welcome.pack()

entry_name = tkinter.Entry(app, exportselection=0)
entry_name.pack()

button_quit = tkinter.Button(app, text="Enter", command=hello)
button_quit.pack()

app.mainloop()