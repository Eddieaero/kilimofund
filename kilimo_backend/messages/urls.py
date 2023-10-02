# messages/urls.py

from django.urls import path
from . import views
from .views import MessageListCreateView, MessageDetailView


urlpatterns = [
    path('send/<int:recipient_id>/', views.send_message, name='send_message'),
    path('list/', views.message_list, name='message_list'),
    path('view/<int:message_id>/', views.view_message, name='view_message'),
    path('messages/', MessageListCreateView.as_view(), name='message-list-create'),
    path('messages/<int:pk>/', MessageDetailView.as_view(), name='message-detail'),
]
