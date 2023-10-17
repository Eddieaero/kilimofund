from django import forms
from .models import LoanRequest, LoanDisbursement, LoanRepayment

class LoanRequestForm(forms.ModelForm):
    class Meta:
        model = LoanRequest
        fields = ['amount', 'purpose']  # Fields for the loan request form

class LoanDisbursementForm(forms.ModelForm):
    class Meta:
        model = LoanDisbursement
        fields = ['disbursement_date'] # Fields for the disbursement form

class LoanRepaymentForm(forms.ModelForm):
    class Meta:
        model = LoanRepayment
        fields = ['amount']  # Fields for the repayment form
