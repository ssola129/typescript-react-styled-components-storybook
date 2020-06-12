# Spec

- Typescript
- React
- Storybook 
- Styled-components


# Install

## Step 1

### React + Typescript 설치 및 디렉터리 구성

```
$ mkdir [filename]
$ cd [filename]

$ npm init -y

$ npm Install —save react react-do
$ npm Install —save @types/react @types/react-dom

$ npm install —save-dev typescript
$ npm typescript —init
```

### tsconfig.json 파일 수정

```
// tsconfig.json

“compilorOptions”: {
	“jsx”: “react”,
	...
}
```


## Step 2

### 디렉터리 구조 셋팅 및 파일 생성

1. 최상위 디렉터리 내부 
    1. index.html 파일 생성

```
// index.html

<!DOCTYPE html>
<html>
	<head>
		<meta charset=“UTF-8” /> 		<title>Hello</title>
	</head>
	<body>
		<div id=“app”></div>
		<script src=“./dist/main.js”></script>
	</body>
</html>
```
