/**
 * https://github.com/davidmz/apng-js
 */
import parseAPNG from "apng-js";

/**
 * apng-jsはバイナリデータを扱うため、fetchでblobを取得してからFileReaderでArrayBufferに変換する
 */
const getImgBuffer = (url) =>
    new Promise(async (resolve) => {
        const blob = await fetch(url).then((res) => res.blob());
        const reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onload = () => {
            resolve(reader.result);
        };
    });

/**
 * apngの操作を行うためのプレイヤーを生成する
 */
export async function createAPNGPlayer(id) {
    const apng = document.querySelector(`[data-apng-id="${id}"]`);
    const imgBuffer = await getImgBuffer(apng.dataset.apngSrc);

    // apng-jsでパースし、canvasに描画する
    const parsed = parseAPNG(imgBuffer);
    await parsed.createImages();

    const ctx = document.createElement("canvas");

    ctx.width = parsed.width;
    ctx.height = parsed.height;

    apng.appendChild(ctx);

    const player = await parsed.getPlayer(ctx.getContext("2d"));

    return player;
}
