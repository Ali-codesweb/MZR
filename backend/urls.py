from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

from .views import MyTokenObtainPairView, index

urlpatterns = [
    path('admin', admin.site.urls),
    path('api/login/', MyTokenObtainPairView.as_view()),
    path('core/', include('core.urls')),
    re_path(r'.*', index, name='index')
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)
