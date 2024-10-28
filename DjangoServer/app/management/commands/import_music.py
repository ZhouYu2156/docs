import json
from django.core.management.base import BaseCommand
from app.models import Music


class Command(BaseCommand):
    help = '从JSON文件中导入音乐数据'

    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str, help='Path to the JSON file')

    def handle(self, *args, **options):
        json_file = options['json_file']
        with open(json_file, 'r+', encoding='utf-8') as f:
            data = json.load(f)
        # print(data)
        assert type(data) is dict, 'JSON文件格式不正确'
        for singer in data:
            for item in data[singer]:
                Music.objects.create(
                    singer=singer,
                    songName=item.get('songName', ''),
                    cover=item.get('cover', ''),
                    play_url=item.get('playUrl', ''),
                    remote_url=item.get('remote_url', ''),
                    lyrics=item.get('lyrics', ''),
                )
        self.stdout.write(self.style.SUCCESS('成功导入音乐数据！'))
