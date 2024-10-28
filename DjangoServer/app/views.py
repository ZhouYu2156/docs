from rest_framework import viewsets
from app.models import Category, Music, VideoTutorial
from app.serializers import CategorySerializer, MusicSerializer, VideoTutorialSerializer


class CategoryView(viewsets.ModelViewSet):
    """
    分类视图

    列出所有有效的分类。

    - **GET /api/categories/**: 获取分类列表

    **请求方法**:
    - GET

    **请求参数**:
    - 无

    **响应结果**:
    - **200 OK**: 成功返回分类列表
      - **Content-Type**: `application/json`
      - **Body**: [Category]

    **错误响应**:
    - **400 Bad Request**: 请求参数无效
      - **Content-Type**: `application/json`
      - **Body**: {"detail": "请求参数无效"}
    """
    serializer_class = CategorySerializer
    queryset = Category.objects.filter(is_deleted=False)

    # 只允许列表操作
    http_method_names = ['get']


class VideoTutorialView(viewsets.ModelViewSet):
    """
    视频教程视图

    列出所有视频教程。

    - **GET /api/video-tutorials/**: 获取视频教程列表

    **请求方法**:
    - GET

    **请求参数**:
    - 无

    **响应结果**:
    - **200 OK**: 成功返回视频教程列表
      - **Content-Type**: `application/json`
      - **Body**: [VideoTutorial]

    **错误响应**:
    - **400 Bad Request**: 请求参数无效
      - **Content-Type**: `application/json`
      - **Body**: {"detail": "请求参数无效"}
    """
    serializer_class = VideoTutorialSerializer
    queryset = VideoTutorial.objects.all()

    # 只允许列表操作
    http_method_names = ['get']


class MusicView(viewsets.ModelViewSet):
    """
    音乐视图

    列出所有音乐。

    - **GET /api/musics/**: 获取音乐列表

    **请求方法**:
    - GET

    **请求参数**:
    - 无

    **响应结果**:
    - **200 OK**: 成功返回音乐列表
      - **Content-Type**: `application/json`
      - **Body**: [Music]

    **错误响应**:
    - **400 Bad Request**: 请求参数无效
      - **Content-Type**: `application/json`
      - **Body**: {"detail": "请求参数无效"}
    """
    serializer_class = MusicSerializer
    queryset = Music.objects.all()

    # 只允许列表操作
    http_method_names = ['get']
