// 점심 메뉴 리스트
const lunchMenus = [
    "김치찌개",
    "된장찌개",
    "비빔밥",
    "돈까스",
    "초밥",
    "제육볶음",
    "떡볶이",
    "냉면",
    "파스타",
    "햄버거"
];

// 버튼 클릭 이벤트 처리
document.getElementById("recommendButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * lunchMenus.length);
    const selectedMenu = lunchMenus[randomIndex];
    
    // 결과 표시
    document.getElementById("menuResult").textContent = `오늘의 추천 메뉴는 "${selectedMenu}" 입니다!`;
});
