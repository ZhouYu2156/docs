from django.apps import AppConfig as Config

app_name = '媒体资源'

class AppConfig(Config):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app'
    verbose_name = app_name
