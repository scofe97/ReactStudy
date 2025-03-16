import {add} from "../util/testFunction1";

describe('계산기', () => {

    describe('addition', () => {
        it('더하기 검증', () => expect(add(1,2)).toBe(3));

        it('마이너스 검증', () => expect(add(-1,-2)).toBe(-3));
    });

    describe('subtraction', () => {
        it('빼기 검증', () => {});
    })

    // ...
})

