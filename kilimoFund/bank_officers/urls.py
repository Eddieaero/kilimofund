from django.urls import path
from .views import *

app_name = 'kilimoFund'

urlpatterns = [
    path('send-message/', send_message, name='send-message'),
    path('get-messages/<int:receiver_id>/', get_messages, name='get-messages'),
    path('loan-application-guidelines/', get_loan_application_guidelines, name='loan-application-guidelines'),
]
