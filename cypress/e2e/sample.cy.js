describe("메인 페이지 테스트", () => {
    it("페이지가 정상적으로 로드되는지 확인", () => {
        cy.visit("http://localhost:3000"); // ✅ 테스트할 웹사이트 방문
        cy.contains("Hello World").should("be.visible"); // ✅ 특정 텍스트가 보이는지 확인
    });
});