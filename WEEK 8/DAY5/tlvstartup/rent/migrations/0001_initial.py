# Generated by Django 3.1.4 on 2020-12-10 09:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=40)),
                ('lastname', models.CharField(max_length=40)),
                ('email', models.CharField(max_length=80)),
                ('phone', models.IntegerField()),
                ('address', models.CharField(max_length=80)),
                ('city', models.CharField(max_length=40)),
                ('country', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='VehicleSize',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='VehicleType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datecreated', models.DateField()),
                ('realcost', models.IntegerField()),
                ('size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='size', to='rent.vehiclesize')),
                ('vehicletype', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='type', to='rent.vehicletype')),
            ],
        ),
        migrations.CreateModel(
            name='RentalRate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dailyrate', models.IntegerField()),
                ('vehiclesize', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vsize', to='rent.vehiclesize')),
                ('vehicletype', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vtype', to='rent.vehicletype')),
            ],
        ),
        migrations.CreateModel(
            name='Rental',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rentaldate', models.DateField()),
                ('returndate', models.DateField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer', to='rent.customer')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vehicle', to='rent.vehicle')),
            ],
        ),
    ]
