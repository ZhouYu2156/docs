from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# 创建路由器实例
router = DefaultRouter()

# 注册视图集
router.register(r'categories', views.CategoryView, basename='category')
router.register(r'videos', views.VideoTutorialView, basename='video-tutorial')
router.register(r'musics', views.MusicView, basename='music')

# 定义 URL 模式
urlpatterns = []

urlpatterns += router.urls