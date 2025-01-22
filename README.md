# check-cycle

### install

```bash
npm install check-cycle -D
```

### usage

```bash
npx check-cycle
```

### example

```bash
npx check-cycle
```

1. 순환 참조가 없는 경우

```
=============
✅ 순환 참조가 없습니다.
```

2. 순환 참조가 있는 경우

```
=============
❌ 순환 참조가 발견되었습니다:

순환 참조 #1:
src/components/A.tsx -> src/components/B.tsx -> src/components/A.tsx

순환 참조 #2:
src/components/C.tsx -> src/components/D.tsx -> src/components/E.tsx -> src/components/C.tsx

순환 참조 #3:
src/types/A.ts -> src/types/B.ts -> src/types/A.ts
```
