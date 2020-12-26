from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=300)
    details = models.CharField(max_length=300)
    has_been_done = models.BooleanField(default=False)
    date_creation = models.DateField(auto_now_add=True)
    date_completion = models.DateField(null=True)
    deadline_date = models.DateField()


    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=200)
    image = models.URLField(null=True)
    categorytodo =  models.ManyToManyField(Todo)

    def __str__(self):
        return self.name