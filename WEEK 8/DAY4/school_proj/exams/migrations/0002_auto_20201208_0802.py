# Generated by Django 3.1.4 on 2020-12-08 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exams', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='category',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='difficulty',
            field=models.IntegerField(default=5),
        ),
    ]
