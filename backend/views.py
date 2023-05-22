from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from core.models import Budget,AllocatedBudget
from .serializers import UserSerializerWithToken
from core.utils import current_total_budget_available
total_budget_none = [
    'department-admin',
    'store-manager'
]
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        if self.user.role in total_budget_none:
            self.user.allocated_budget = None
            self.user.save()
        serializer = UserSerializerWithToken(self.user).data
        for key, value in serializer.items():
            data[key] = value
        if self.user.role == 'store-manager':
            data['allocated_budget'] = current_total_budget_available()
        data.pop('refresh')
        data.pop('access')
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def dummy_view(request):
    return Response({"message": "Hello World"})


def index(request):
    return render(request, "index.html")
