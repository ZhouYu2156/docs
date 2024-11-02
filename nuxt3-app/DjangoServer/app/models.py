from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=32, unique=True, help_text="分类名称")
    cover = models.ImageField(upload_to='category_covers', help_text="封面")
    description = models.TextField(blank=True, default='', help_text="分类描述", null=True)
    created_at = models.DateTimeField(auto_now_add=True, help_text="创建时间")
    updated_at = models.DateTimeField(auto_now=True, help_text="更新时间")
    is_deleted = models.BooleanField(default=False, help_text="是否删除")

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created_at']
        verbose_name = "教程分类"
        verbose_name_plural = "教程分类"
        db_table = 'video_category'


class VideoTutorial(models.Model):
    title = models.CharField(max_length=32, unique=True, help_text="标题")
    summary = models.CharField(max_length=128, help_text="概要")
    cover = models.ImageField(upload_to='video_covers', help_text="视频封面")
    play_url = models.FileField(upload_to='videos', help_text="播放地址")
    views = models.IntegerField(default=0, help_text="播放量")
    likes = models.IntegerField(default=0, help_text="点赞量")
    created_at = models.DateTimeField(auto_now_add=True, help_text="创建时间")
    updated_at = models.DateTimeField(auto_now=True, help_text="更新时间")
    is_deleted = models.BooleanField(default=False, help_text="是否删除")
    is_paid = models.BooleanField(default=False, help_text="是否付费")
    category = models.ForeignKey('Category', on_delete=models.CASCADE, help_text="视频分类")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
        verbose_name = "视频资源"
        verbose_name_plural = "视频资源"
        db_table = 'video_series'

class Music(models.Model):
    """ 音乐 """
    singer = models.CharField(max_length=128, help_text="歌手")
    songName = models.CharField(max_length=128, help_text="音乐名")
    cover = models.URLField(max_length=512, help_text="封面")
    play_url = models.ImageField(upload_to='musics', help_text="本地播放地址")
    remote_url = models.CharField(max_length=128, help_text="酷狗播放地址")
    lyrics = models.TextField(help_text="歌词")
    views = models.IntegerField(default=0, help_text="播放量")
    likes = models.IntegerField(default=0, help_text="点赞量")
    created_at = models.DateTimeField(auto_now_add=True, help_text="创建时间")
    updated_at = models.DateTimeField(auto_now=True, help_text="更新时间")

    def __str__(self):
        return self.singer + '-' + self.songName

    class Meta:
        verbose_name = "音乐"
        verbose_name_plural = "音乐"
        db_table = 'music'