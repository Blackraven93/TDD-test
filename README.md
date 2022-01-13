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

### Login

### Test case

**Convention**

1. ID값이 calculation인 input 태그를 display 정의

2. display box의 value값을 value라고 정의

3. 변수의 자료구조는 List 형태로 리팩토링 한다.(Unit test)

4. 객체의 관계를 도식화 해서 리팩토링하기

5. Integration test는 cypress unit test는 jest로 진행한다.

#### Number

1. 변수에 대한 자료구조 정의
   
- [x] 문자열 자료 구조를 이용한 구현
- [x] List 자료 구조를 이용해 Refactoring
  - [x] Test code 작성
  - [x] Test code를 바탕으로 List 자료 구조 구현
  - [x] 자료 구조를 바탕으로 리팩토링

**Unit**

##### List class

- [x] 클래스 List 테스트
- [x] 인스턴스 생성
- [x] _push method 확인
- [x] _pop method 확인
- [x] _pop method argument(2) 확인
- [x] empty property 확인
- [x] _clear method 작동 확인


1. 초기 숫자 표기
   
**Integration**
- [x] 사이트 렌더링 이후 초기 value 값은 "0"
- [x] value 값이 '0'일 때 (어느 상황에서든) '0'버튼을 누르면 value 값에 변화가 없다.
- [x] value 값이 '0'일 때 0을 제외한 숫자를 누르면 숫자 값으로 변경 된다.
 
2. 연산버튼 Click

**Integration**
- [x] value 값이 '1'이라면 '9'버튼을 누를 시 결과는 '19'이다.
- [x] AC 버튼을 누르면 value = 0 그리고 연산식도 초기화 된다.
- [x] 숫자를 입력하고 연산자 버튼 Click 시 value 값에 변화가 없다.
- [x] 연산식을 누르고 0을 두번 눌러도 value 값에 변화가 없다.
- [x] "20 + 70 * 2 = 180"

3. 한계수치

- [ ] 숫자 한계치

#### Operator

**Unit**

##### operator class

- [x] calculate 메소드 연산 정상 작동 테스트
- [x] calculate 메소드를 이용해 더하기 연산자를 진행합니다.
- [x] calculate 메소드를 이용해 빼기 연산자를 진행합니다.(음수값)
- [x] calculate 메소드를 이용해 빼기 연산자를 진행합니다.
- [x] calculate 메소드를 이용해 곱하기 연산자를 진행합니다.
- [x] calculate 메소드를 이용해 나누기 연산자를 진행합니다.
- [x] calculate 메소드를 이용해 나누기 연산자를 진행합니다. (0값으로 나누기)
- [ ] calculatedValue 함수 테스트
- [ ] pushToCalculateContext 함수 테스트


**Integration**
- [ ] 소수점 내림
- [ ] 무한대 처리
- [ ] 음수값 처리
- [ ] 연산식 처리
- [ ] 예외처리
  - [ ] 연산자 연속 Click
  - [ ] 한계처리 Message
    - 빼기 & 나누기 가능
    - 더하기 & 곱하기 불가능


