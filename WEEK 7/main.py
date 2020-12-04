import tkinter

mainapp = tkinter.Tk()
mainapp.title("My first program")

screen_x = int(mainapp.winfo_screenwidth())
screen_y = int(mainapp.winfo_screenheight())
window_x = 400
window_y = 350

posX = (screen_x // 2) - (window_x // 2)
posY = (screen_y // 2) - (window_y // 2)

geo = "{}x{}+{}+{}".format(window_x, window_y, posX, posY)
mainapp.geometry(geo)

mainapp.mainloop()



""" Propriétés pour la taille de la fenêtre :
mainapp.minsize(640, 480)
mainapp.maxsize(1280, 720)
position_X = (largeur_ecran // 2) - (largeur_fenetre // 2)
position_Y = (hauteur_ecran // 2) - (hauteur_fenetre // 2)
mainapp.resizable(width=False, height=True)
mainapp.positionfrom("user")
mainapp.geometry("400x350+10+10")"""

