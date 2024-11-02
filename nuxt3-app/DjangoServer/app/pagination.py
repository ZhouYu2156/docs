from rest_framework.pagination import PageNumberPagination


class SourcePageNumberPagination(PageNumberPagination):
    page_size_query_param = 'pageSize'  # 前端传递的每页条目数参数名
    page_query_param = 'page'  # 前端传递的页码参数名
    max_page_size = 100  # 每页最大条目数限制