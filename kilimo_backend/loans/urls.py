from django.urls import path
from . import views

urlpatterns = [
    path('request/', views.loan_request, name='loan_request'),
    path('disbursement/<int:loan_request_id>/', views.loan_disbursement, name='loan_disbursement'),
    path('repayment/<int:loan_request_id>/', views.loan_repayment, name='loan_repayment'),
]
