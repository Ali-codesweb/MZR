from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from core.middlewares import ViceManagerPermission, StoreManagerPermission
from rest_framework.response import Response
from core.models import Budget, AllocatedBudget, CustomUser
from datetime import date
from django.http import HttpRequest
from core.serializers import BudgetSerializer, AllocatedBudgetSerializer
# Create your views here.


@api_view(['GET'])
@permission_classes([ViceManagerPermission])
def vice_manager(request):
    return Response({'message': 'Vice Manager Allowed'})


@api_view(['POST'])
@permission_classes([ViceManagerPermission])
def allocate_budget(request: HttpRequest):
    amount = request.data.get('amount', None)
    status = 200
    if amount == None:
        status = 501
        msg = 'Please Provide an amount'
        return Response({'message': msg, 'status': status})
    else:
        budget = Budget.objects.create(
            date=date.today().strftime('%d/%m/%Y'),
            amount=amount
        )
        vice_manager: CustomUser = CustomUser.objects.get(
            username="vicemanager")
        vice_manager.allocated_budget += int(amount)
        vice_manager.save()
        serializer = BudgetSerializer(budget)
        msg = 'Budget Created Successfully'
        return Response({'message': msg, 'status': status, 'data': serializer.data})


@api_view(['GET'])
@permission_classes([ViceManagerPermission])
def list_budget(request: HttpRequest):
    budgets = Budget.objects.all()
    serializer = BudgetSerializer(budgets, many=True)
    return Response(serializer.data)
