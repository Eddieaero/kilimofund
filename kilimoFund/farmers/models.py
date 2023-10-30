from django.db import models

class Farmer(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    registration_date = models.DateField()
    profile_picture = models.ImageField(upload_to='profile_pictures/')
    organization_license = models.CharField(max_length=100)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.name
