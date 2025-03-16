import {act, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {TermsAndConditions} from "../components/TermsAndConditions.tsx";

describe('컴포넌트 테스트', () => {
    it("컴포넌트 링크 ", () => {
        render(<TermsAndConditions />)

        // Next 이름요소 찾기
        const button = screen.getByText("Next");
        expect(button).toBeDisabled();

        // 체크박스 찾기
        const checkbox = screen.getByRole('checkbox')
        act(() => {
            userEvent.click(checkbox);
        })
        expect(button).toBeEnabled();
    })
})