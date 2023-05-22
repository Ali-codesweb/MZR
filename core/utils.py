from core.models import Budget, AllocatedBudget
from django.db.models import Sum


def current_total_budget_available():
    budget_count = Budget.objects.aggregate(Sum('amount'))['amount__sum']
    allocated_bg_count = AllocatedBudget.objects.aggregate(Sum('amount'))[
        'amount__sum']
    if Budget.objects.count() < 1:
        budget_count = 0
    if AllocatedBudget.objects.count() < 1:
        allocated_bg_count = 0

    return budget_count - allocated_bg_count
