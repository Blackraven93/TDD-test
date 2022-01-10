# TDD test

## 개요

- Toy project를 이용하며 TDD를 익혀 갑니다.
- 테스트 코드 작성을 통해 TDD 방법론을 숙달합니다.
  - cypress
  - jest
- 프로그래밍의 다양한 설계를 TDD를 통해 연습합니다.
  - 클린코드 
  - OOP & FP 
  - Design Pattern 
  - Algorithm & data structure

## 1. Calculate

### Test case

**Convention**

1. ID값이 calculation인 input 태그를 display 정의

2. display box의 value값을 value라고 정의

3. 변수의 자료구조는 Queue 형태로 리팩토링 한다.(Unit test)

#### Number

1. 변수에 대한 자료구조 정의
   
- [ ]

1. 초기 숫자 표기

- [x] 사이트 렌더링 이후 초기 value 값은 "0"
- [x] value 값이 '0'일 때 (어느 상황에서든) '0'버튼을 누르면 value 값에 변화가 없다.
- [x] value 값이 '0'일 때 0을 제외한 숫자를 누르면 숫자 값으로 변경 된다.
- [x] value 값이 '1'이라면 '9'버튼을 누를 시 결과는 '19'이다.

3. 연산버튼 Click

- [x] 숫자를 입력하고 연산자 버튼 Click 시 value 값에 변화가 없다.

4. 한계수치

- [ ] 숫자 한계치

#### Operator

- [ ] 소수점 내림
- [ ] 무한대 처리
- [ ] 음수값 처리
- [ ] 연산식 처리
- [ ] 예외처리
  - [ ] 연산자 연속 Click
  - [ ] 한계처리 Message
    - 빼기 & 나누기 가능
    - 더하기 & 곱하기 불가능