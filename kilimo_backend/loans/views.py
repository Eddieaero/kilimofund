from django.shortcuts import render, redirect
from .models import LoanRequest, LoanDisbursement, LoanRepayment
from .forms import LoanRequestForm, LoanDisbursementForm, LoanRepaymentForm


# api authentication modules starts here

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.authtoken.models import Token








def loan_request(request):
    if request.method == 'POST':
        form = LoanRequestForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('loan_request_success')  # Create a success page
    else:
        form = LoanRequestForm()

    return render(request, 'loans/loan_request.html', {'form': form})

def loan_disbursement(request, loan_request_id):
    loan_request = LoanRequest.objects.get(id=loan_request_id)
    if request.method == 'POST':
        form = LoanDisbursementForm(request.POST)
        if form.is_valid():
            form.save(commit=False)
            # Add logic to handle disbursement
            form.save()
            return redirect('disbursement_success')  # Create a success page
    else:
        form = LoanDisbursementForm(initial={'loan_request': loan_request})

    return render(request, 'loans/loan_disbursement.html', {'form': form, 'loan_request': loan_request})

def loan_repayment(request, loan_request_id):
    loan_request = LoanRequest.objects.get(id=loan_request_id)
    if request.method == 'POST':
        form = LoanRepaymentForm(request.POST)
        if form.is_valid():
            form.save(commit=False)
            # Add logic to handle repayment
            form.save()
            return redirect('repayment_success')  # Create a success page
    else:
        form = LoanRepaymentForm(initial={'loan_request': loan_request})

    return render(request, 'loans/loan_repayment.html', {'form': form, 'loan_request': loan_request})





@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def loan_request(request):
    if request.method == 'POST':
        form = LoanRequestForm(request.POST)
        if form.is_valid():
            loan_request = form.save(commit=False)
            loan_request.user = request.user  # Associate with authenticated user
            loan_request.save()
            return redirect('loan_request_success')
    else:
        form = LoanRequestForm()

    return render(request, 'loans/loan_request.html', {'form': form})



