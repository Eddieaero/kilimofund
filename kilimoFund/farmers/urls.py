from django.urls import path
from .views import *

app_name = 'kilimoFund'

urlpatterns = [
    path('signup/', signup, name='farmer-signup'),
    path('login/', login, name='farmer-login'),
    path('verify-membership/', verify_membership, name='verify-membership'),

    path('loan-applications/create/', create_loan_application, name='create-loan-application'),
    path('loan-applications/list/', list_loan_applications, name='list-loan-applications'),
]
