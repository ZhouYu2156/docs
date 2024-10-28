from django.contrib import admin

from app.models import VideoTutorial, Category, Music


# Register your models here.
@admin.register(VideoTutorial)
class VideoTutorialAdmin(admin.ModelAdmin):
    list_display = ('title', 'summary', 'play_url', 'likes', 'views', 'is_paid', 'category', 'created_at', 'updated_at')
    list_filter = ('category', 'is_paid')
    search_fields = ('title', 'summary')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'cover', 'created_at', 'updated_at')
    search_fields = ('name',)
    list_filter = ('name',)
    fieldsets = (
        ('基本信息', {'fields': ('name', 'cover')}),
    )

@admin.register(Music)
class MusicAdmin(admin.ModelAdmin):
    list_display = ('songName', 'singer', 'cover', 'play_url', 'created_at')
    search_fields = ('songName', 'singer')
    list_filter = ('songName',)