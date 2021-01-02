
from django.contrib import admin
from django.urls import path, re_path
from events import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/events/', views.events_list),
    path('api/events/<int:id>/', views.events_detail),
    
    # re_path(r'^api/events/(?P<id>[0-9]+)$', views.events_detail),
]