from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

from core.view.store_manager import allocate_budget_to_idarah,get_total_allocated_budget
urlpatterns = [
    path('allocate-budget/', allocate_budget_to_idarah),
    path('get-total-allocated-budget/', get_total_allocated_budget),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)
