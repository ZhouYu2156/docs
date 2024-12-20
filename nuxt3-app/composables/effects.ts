// // 用于存储正在播放音乐的相关信息的对象，键为音乐的唯一标识符
import type {Music} from "~/types/site";
let requestAnimationFrameId: number = 0
export function usePlayMusic(cvs: HTMLCanvasElement, audio: HTMLAudioElement) {
    let isInit = false
    const ctx = cvs.getContext('2d') as CanvasRenderingContext2D
    let analyser: AnalyserNode
    let frequencyData: Uint8Array
    let isPlaying: boolean

    audio.onplay = () => {
        if (isInit) {
            isPlaying = true
            animate()
            return
        }
        const audioContext = new AudioContext()
        const source = audioContext.createMediaElementSource(audio)
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 2048
        frequencyData = new Uint8Array(analyser.frequencyBinCount)
        source.connect(analyser)
        analyser.connect(audioContext.destination)

        isInit = true
        isPlaying = true
        animate()
    }

    audio.onpause = () => {
        isPlaying = false
    }

    const animate = () => {
        if (isPlaying) {
            requestAnimationFrameId = requestAnimationFrame(animate)
            drawVisualizer()
        }
    }

    const drawVisualizer = () => {
        const { width, height } = cvs
        ctx.clearRect(0, 0, width, height)
        if (!isInit) return
        analyser.getByteFrequencyData(frequencyData)
        const len = frequencyData.length
        const barWidth = width / len
        const hueStep = 360 / len   // 每个柱子的色调变化步长
        for (let i = 0; i < len; i++) {
            const digit = frequencyData[i]
            const barHeight = (digit / 255) * height
            const x1 = width / 2 + i * barWidth
            const x2 = width / 2 - (i + 1) * barWidth
            const y = height - barHeight
            const hue = (i * hueStep) % 360         // 根据索引计算色调
            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`
            ctx.fillRect(x1, y, barWidth, barHeight)
            ctx.fillRect(x2, y, barWidth, barHeight)
        }
    }
}


//
// export async function useMusicEffect(music: Music, canvas: HTMLCanvasElement, musics: Ref<Music[]>) {
//     // 创建音频上下文
//     const audioContext = new AudioContext();
//     // 获取音频
//     let audio = await fetch(music.play_url);
//     // 获取音频文件的二进制数据
//     const arrayBuffer = await audio.arrayBuffer();
//     // 解码音频数据
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     // 创建音频源
//     const source = audioContext.createBufferSource();
//     source.buffer = audioBuffer;
//     source.connect(audioContext.destination);
//     source.start();
//
//     const analyser = audioContext.createAnalyser();
//     source.connect(analyser);
//     analyser.connect(audioContext.destination);
//     const canvasContext = canvas.getContext('2d');
//     function drawVisualizer() {
//         const bufferLength = analyser.frequencyBinCount;
//         const dataArray = new Uint8Array(bufferLength);
//         analyser.getByteFrequencyData(dataArray);
//
//         canvasContext!.clearRect(0, 0, canvas.width, canvas.height);
//
//         const barWidth = canvas.width / bufferLength;
//         const barGap = 2; // 柱子之间的间隔
//         const hueStep = 360 / bufferLength; // 每个柱子的色调变化步长
//
//         for (let i = 0; i < bufferLength; i++) {
//             const barHeight = dataArray[i];
//             const hue = (i * hueStep) % 360; // 根据索引计算色调
//             canvasContext!.fillStyle = `hsl(${hue}, 100%, 50%)`; // 使用HSL颜色模式创建五彩效果
//             canvasContext!.fillRect(i * (barWidth + barGap), canvas.height - barHeight, barWidth, barHeight);
//         }
//
//         requestAnimationFrame(drawVisualizer);
//     }
//     drawVisualizer()
//
//     // 监听音频播放完毕, 停止绘制并关闭音频源
//     window.addEventListener('ended', () => {
//         source.stop();
//         canvasContext!.clearRect(0, 0, canvas.width, canvas.height);
//         musics.value.forEach(item => {
//             if (item.id === music.id) {
//                 item.isPlaying = false;
//             }
//         })
//         audioContext.close();
//         console.log('音乐播放完毕, 已关闭 音频源')
//     })
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
