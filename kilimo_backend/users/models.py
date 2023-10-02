from django.db import models
# from django.contrib.auth.models import user
from django.contrib.auth.models import AbstractUser
# from .models import UserProfile





class CustomUser(AbstractUser):
    role_choices = [
        ('farmer', 'Farmer'),
        ('bank_officer', 'Bank Officer'),
    ]
    role = models.CharField(max_length=15, choices=role_choices)

    # Add any other fields you need

    def __str__(self):
        return self.username