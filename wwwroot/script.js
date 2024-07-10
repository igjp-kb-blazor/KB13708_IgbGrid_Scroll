function setGridHeightToNull(gridId) {
    // 10ミリ秒ごとに繰り返し実行するインターバルを設定します
    let myInterval = setInterval(() => {
        // 指定されたIDを持つグリッド要素を取得します
        let grid = document.getElementById(gridId);

        // グリッド要素が存在する場合
        if (grid != null) {
            // グリッドの高さをnullに設定します
            grid.height = null;
            // インターバルをクリアして、繰り返しを停止します
            clearInterval(myInterval);
        }
    }, 10);
}
