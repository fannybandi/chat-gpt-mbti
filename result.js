// 페이지가 로드될 때 실행되는 함수
window.onload = function () {
  // 로컬스토리지에서 MBTI 결과 가져오기
  const mbtiResult = localStorage.getItem('mbti_result');
  const resultElement = document.getElementById('result');
  const restartButton = document.getElementById('restart-button');

  // 결과가 있을 경우, 결과를 보여줌
  if (mbtiResult) {
    resultElement.textContent = `${mbtiResult}입니다!`;
  } else {
    // 결과가 없을 경우, 안내 문구를 보여줌
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    restartButton.textContent = '테스트 하러 가기'; // 버튼 텍스트 변경
  }
};
