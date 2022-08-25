## Onion example

코드를 작성하면서 어니언 아키텍처에 대해 고민해보기 위해 생성한 저장소입니다.

## 상황

OO는 앞으로 부모님이 운영하시는 작은 서점에서 사용할 수 있는 관리 프로그램을 만들어 보려고 한다. 부모님은 MS-DOS 기반의 컴퓨터에서 Lotus123 프로그램을 이용해 책의 재고를 정리해왔다. :scream:

부모님은 첨단 기술의 집약체인 컴퓨터를 이용해 재고를 관리하는 자신들이 너무 대견해, 멋을 한껏 부려 Lotus123을 사용했다. 재고 수량을 숫자로 쓰지 않고 영단어로 써보기로 한 것이다. 아니, "영단어로 쓰기도 했다"가 더 정확한 표현이다. 부모님은 "4"가 "four"인지 "fuor"인지 헷갈려서, 1부터 3까지만, "one", "two", "three"로 썼다. 아래는 저장된 데이터의 예시다:

| title                            | quantity |
| -------------------------------- | -------- |
| White Fang                       | two      |
| Moby Dick                        | one      |
| Hitchhiker's guide to the galaxy | 42       |

OO은 Lotus123의 저장 파일로부터 데이터를 가져와서(`infrasturucture/externalService.ts`), 재고 수량(`quantity`)을 숫자로 변환하여 화면에 출력해보는(`infrasturucture/runtimeEnvironment.ts`) 코드를 작성했다. 아래는 프로그램의 실행 결과다:

```sh
$ yarn start
yarn run v1.22.18
$ ts-node src/main.ts
[Qty.2 ] TITLE: White Fang
[Qty.1 ] TITLE: Moby Dick
[Qty.42] TITLE: Hitchhiker's guide to the galaxy
```
