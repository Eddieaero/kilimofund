# Generated by Django 4.2.4 on 2023-10-30 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Farmer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('registration_date', models.DateField()),
                ('profile_picture', models.ImageField(upload_to='profile_pictures/')),
                ('organization_license', models.CharField(max_length=100)),
                ('is_verified', models.BooleanField(default=False)),
            ],
        ),
    ]