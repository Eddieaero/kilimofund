# Generated by Django 4.2.4 on 2023-10-16 20:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('loans', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='loanrequest',
            name='farmer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='loanrepayment',
            name='loan_request',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='loans.loanrequest'),
        ),
        migrations.AddField(
            model_name='loandisbursement',
            name='loan_request',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='loans.loanrequest'),
        ),
    ]
