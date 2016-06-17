from django.conf.urls import include, patterns, url
from django.contrib import admin

#from rest_framework_nested import routers

from gitnote_api import views
from gitnote_api.views import IndexView

admin.autodiscover()

urlpatterns = patterns(
    '',
    # django-rest-social-auth
    url(r'^api/login/', include('rest_social_auth.urls_token')),
    url(r'^api/logout/session/$', views.LogoutSessionView.as_view(), name='logout_session'),
    url(r'^api/user/token/', views.UserTokenDetailView.as_view(), name="current_user_token"),

    # admin interface
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),

    # angular
    url('^.*$', IndexView.as_view(), name='index'),
)
