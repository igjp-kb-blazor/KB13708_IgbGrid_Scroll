function setGridHeightToNull(gridId) {
    // 10�~���b���ƂɌJ��Ԃ����s����C���^�[�o����ݒ肵�܂�
    let myInterval = setInterval(() => {
        // �w�肳�ꂽID�����O���b�h�v�f���擾���܂�
        let grid = document.getElementById(gridId);

        // �O���b�h�v�f�����݂���ꍇ
        if (grid != null) {
            // �O���b�h�̍�����null�ɐݒ肵�܂�
            grid.height = null;
            // �C���^�[�o�����N���A���āA�J��Ԃ����~���܂�
            clearInterval(myInterval);
        }
    }, 10);
}
