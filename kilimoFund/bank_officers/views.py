from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Message, Guidelines
from .serializers import MessageSerializer, GuidelinesSerializer
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_message(request):
    serializer = MessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(sender=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_messages(request, receiver_id):
    messages = Message.objects.filter(receiver_id=receiver_id, sender=request.user)
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_loan_application_guidelines(request):
    guidelines = Guidelines.objects.all()
    serializer = GuidelinesSerializer(guidelines, many=True)
    return Response(serializer.data)