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


class LoanApplication(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    bank_account = models.CharField(max_length=50)
    supplier = models.CharField(max_length=100)
    reason = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date_applied = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Loan Application by {self.farmer.name}"