from django.urls import path
from .views import send_message, get_messages

app_name = 'kilimoFund'

urlpatterns = [
    path('send-message/', send_message, name='send-message'),
    path('get-messages/<int:receiver_id>/', get_messages, name='get-messages'),
]
