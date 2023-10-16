from django.db import models
from users.models import CustomUser

class LoanRequest(models.Model):
    farmer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    purpose = models.CharField(max_length=100)
    request_date = models.DateTimeField(auto_now_add=True)
    status_choices = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    status = models.CharField(max_length=15, choices=status_choices, default='pending')



class LoanDisbursement(models.Model):
    loan_request = models.OneToOneField(LoanRequest, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    disbursement_date = models.DateTimeField()



class LoanRepayment(models.Model):
    loan_request = models.ForeignKey(LoanRequest, on_delete=models.CASCADE)
    repayment_date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    # Add other fields as needed


















