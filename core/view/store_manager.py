from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from core.middlewares import ViceManagerPermission, StoreManagerPermission
from rest_framework.response import Response
from core.models import Budget, AllocatedBudget,CustomUser
from datetime import date
from django.http import HttpRequest
from core.serializers import BudgetSerializer, AllocatedBudgetSerializer
from core.utils import current_total_budget_available


@api_view(['POST'])
@permission_classes([StoreManagerPermission])
def allocate_budget_to_idarah(request: HttpRequest):
    data = request.data
    total_budget_available = CustomUser.objects.get(username='vicemanager').allocated_budget
    if total_budget_available < 1 or int(data['amount']) > total_budget_available:
        return Response({'message': 'No Bugdget Available. Kindly Contact your Vice Manager','status':501})

    budget = AllocatedBudget.objects.create(
        allocator=request.user,
        amount=data['amount'],
        idarah=data['idarah']
    )
    serializer = AllocatedBudgetSerializer(budget)
    return Response({'data': serializer.data, 'message': 'Budget Allocated to ' + data['idarah'] + ' Succesfully','status':200})


@api_view(['GET'])
@permission_classes([StoreManagerPermission])
def get_total_allocated_budget(request: HttpRequest):
    budgets = AllocatedBudget.objects.all()
    serializer = AllocatedBudgetSerializer(budgets,many=True)
    return Response(serializer.data)
