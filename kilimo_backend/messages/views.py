from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from .models import Message
from .forms import MessageForm
from users.models import CustomUser
from .serializers import MessageSerializer
from rest_framework import generics

# api authentication modules starts here

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.authtoken.models import Token


def send_message(request, recipient_id):
    recipient = get_object_or_404(CustomUser, id=recipient_id)
    
    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            message = form.save(commit=False)
            message.sender = request.user
            message.recipient = recipient
            message.save()
            return redirect('message_list')
        
        
    else:
        form = MessageForm()

    return render(request, 'messages/send_message.html', {'form': form, 'recipient': recipient})

def message_list(request):
    messages = Message.objects.filter(recipient=request.user)
    return render(request, 'messages/message_list.html', {'messages': messages})

def view_message(request, message_id):
    message = get_object_or_404(Message, id=message_id, recipient=request.user)
    message.is_read = True
    message.save()
    return render(request, 'messages/view_message.html', {'message': message})




#   api views starts here
class MessageListCreateView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class ManageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer





# api authentication starts here

@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def my_authenticated_view(request):
    # Assuming you want to return some data for authenticated users
    user = request.user  # This will give you the authenticated user
    
    # You can perform any additional logic based on the authenticated user, for example:
    if user.is_authenticated:
        data = {
            'message': 'Welcome, {}!'.format(user.username),
            'user_id': user.id
        }
        return Response(data, status=200)
    else:
        return Response({'error': 'Authentication failed'}, status=401)








