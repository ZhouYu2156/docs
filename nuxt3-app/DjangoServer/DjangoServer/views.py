# 返回 favicon.cio 网站图标

from django.http import HttpResponse
from . import settings
import os


def favicon_view(request):
    # 获取 favicon.ico 文件的路径
    favicon_path = os.path.join(settings.STATIC_ROOT, 'favicon.ico')

    # 读取文件内容
    with open(favicon_path, 'rb+') as f:
        favicon_data = f.read()

    # 返回 HTTP 响应
    return HttpResponse(favicon_data, content_type='image/x-icon')

