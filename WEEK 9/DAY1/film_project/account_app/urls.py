from django.urls import path, include
from . import views 


urlpatterns = [
    path(r'^signup/$', views.signup, name="signup" ),
    path('login/', views.login, name="login"),
    path('logout/', views.logout, name="logout"),
    path('profile/int:<pk>', views.profile, name="profile"),
    path('', include('film_app.urls')),
    path('', include("django.contrib.auth.urls")),
]
