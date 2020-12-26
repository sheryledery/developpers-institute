from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def addtask(request):
    if request.method == "GET":
        form = AddQuestionForm()
        return render(request, 'addnewtask.html', {'form': form})

    if request.method == "POST":
        form = AddQuestionForm(request.POST)

        if form.is_valid():
            form.save()
        
        return redirect('addtask')




def display_todos(request):  #Controller (VIEW)
    
    #Calling the Model and asking for Data  (The model calls the DB)
    todos = Todo.objects.all()

    #Calling the template and asking for html to be built
    html =  render(request, 'todolist.html', {'todos':todos})

    return html
